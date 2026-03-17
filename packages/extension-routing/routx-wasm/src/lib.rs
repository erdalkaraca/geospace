use wasm_bindgen::prelude::*;
use routx::{Graph, Node, Edge, DEFAULT_STEP_LIMIT};
use js_sys::Array;
use std::cell::RefCell;

thread_local! {
    static GRAPH: RefCell<Option<Graph>> = RefCell::new(None);
}

/// Serialize the graph using only routx's public API.
/// Format:
/// - u32: node_count
/// - node_count * (Node + u32 edge_count + edge_count * Edge)
fn serialize_graph(graph: &Graph) -> Vec<u8> {
    use std::convert::TryInto;

    let mut buf = Vec::new();

    // Number of nodes (u32)
    let node_count = graph.len() as u32;
    buf.extend_from_slice(&node_count.to_le_bytes());

    // Graph::iter() yields &Node; we then pull edges via get_edges(node.id)
    for node in graph.iter() {
        buf.extend_from_slice(&node.id.to_le_bytes());
        buf.extend_from_slice(&node.osm_id.to_le_bytes());
        buf.extend_from_slice(&node.lat.to_le_bytes());
        buf.extend_from_slice(&node.lon.to_le_bytes());

        let edges = graph.get_edges(node.id);
        let edge_count = edges.len() as u32;
        buf.extend_from_slice(&edge_count.to_le_bytes());

        for edge in edges {
            buf.extend_from_slice(&edge.to.to_le_bytes());
            buf.extend_from_slice(&edge.cost.to_le_bytes());
        }
    }

    buf
}

/// Deserialize the graph using routx's public constructors (`Graph::from_iter`).
fn deserialize_graph(bytes: &[u8]) -> Result<Graph, String> {
    use std::convert::TryInto;

    let mut offset = 0usize;

    fn read_u32(bytes: &[u8], offset: &mut usize) -> Result<u32, String> {
        if *offset + 4 > bytes.len() {
            return Err("Unexpected end of buffer while reading u32".into());
        }
        let v = u32::from_le_bytes(bytes[*offset..*offset + 4].try_into().unwrap());
        *offset += 4;
        Ok(v)
    }

    fn read_i64(bytes: &[u8], offset: &mut usize) -> Result<i64, String> {
        if *offset + 8 > bytes.len() {
            return Err("Unexpected end of buffer while reading i64".into());
        }
        let v = i64::from_le_bytes(bytes[*offset..*offset + 8].try_into().unwrap());
        *offset += 8;
        Ok(v)
    }

    fn read_f32(bytes: &[u8], offset: &mut usize) -> Result<f32, String> {
        if *offset + 4 > bytes.len() {
            return Err("Unexpected end of buffer while reading f32".into());
        }
        let v = f32::from_le_bytes(bytes[*offset..*offset + 4].try_into().unwrap());
        *offset += 4;
        Ok(v)
    }

    let node_count = read_u32(bytes, &mut offset)? as usize;

    let mut nodes: Vec<Node> = Vec::with_capacity(node_count);
    let mut edges: Vec<(i64, i64, f32)> = Vec::new();

    for _ in 0..node_count {
        let id = read_i64(bytes, &mut offset)?;
        let osm_id = read_i64(bytes, &mut offset)?;
        let lat = read_f32(bytes, &mut offset)?;
        let lon = read_f32(bytes, &mut offset)?;

        nodes.push(Node { id, osm_id, lat, lon });

        let edge_count = read_u32(bytes, &mut offset)? as usize;
        for _ in 0..edge_count {
            let to = read_i64(bytes, &mut offset)?;
            let cost = read_f32(bytes, &mut offset)?;
            edges.push((id, to, cost));
        }
    }

    if offset != bytes.len() {
        return Err("Trailing bytes after graph deserialization".into());
    }

    Ok(Graph::from_iter(nodes, edges))
}

#[wasm_bindgen]
pub fn load_graph_from_pbf(pbf_bytes: &[u8]) -> Result<(), JsValue> {
    let mut graph = Graph::new();
    let opts = routx::osm::Options {
        profile: &routx::osm::CAR_PROFILE,
        file_format: routx::osm::FileFormat::Unknown,
        bbox: [0.0; 4],
    };

    routx::osm::add_features_from_buffer(&mut graph, &opts, pbf_bytes)
        .map_err(|e| JsValue::from_str(&format!("Failed to load PBF: {e}")))?;

    GRAPH.with(|cell| {
        *cell.borrow_mut() = Some(graph);
    });

    Ok(())
}

#[wasm_bindgen]
pub fn load_graph_from_blob(graph_bytes: &[u8]) -> Result<(), JsValue> {
    let graph = deserialize_graph(graph_bytes)
        .map_err(|e| JsValue::from_str(&format!("Failed to deserialize graph: {e}")))?;

    GRAPH.with(|cell| {
        *cell.borrow_mut() = Some(graph);
    });

    Ok(())
}

#[wasm_bindgen]
pub fn export_graph() -> Result<Box<[u8]>, JsValue> {
    GRAPH.with(|cell| {
        let graph_ref = cell.borrow();
        let graph = graph_ref
            .as_ref()
            .ok_or_else(|| JsValue::from_str("Graph not initialized"))?;

        let bytes = serialize_graph(graph);
        Ok(bytes.into_boxed_slice())
    })
}

#[wasm_bindgen]
pub fn route(
    from_lat: f64,
    from_lon: f64,
    to_lat: f64,
    to_lon: f64,
) -> Result<JsValue, JsValue> {
    let from_lat_f32 = from_lat as f32;
    let from_lon_f32 = from_lon as f32;
    let to_lat_f32 = to_lat as f32;
    let to_lon_f32 = to_lon as f32;

    GRAPH.with(|cell| -> Result<JsValue, JsValue> {
        let graph_ref = cell.borrow();
        let graph = graph_ref
            .as_ref()
            .ok_or_else(|| JsValue::from_str("Graph not initialized. Call load_graph_* first."))?;

        let start = graph
            .find_nearest_node(from_lat_f32, from_lon_f32)
            .ok_or_else(|| JsValue::from_str("No start node found"))?;
        let end = graph
            .find_nearest_node(to_lat_f32, to_lon_f32)
            .ok_or_else(|| JsValue::from_str("No end node found"))?;

        let route = routx::find_route_without_turn_around(
            graph,
            start.id,
            end.id,
            DEFAULT_STEP_LIMIT,
        )
        .map_err(|e| JsValue::from_str(&format!("Routing failed: {e}")))?;

        // Help JS-side debugging: an empty route is almost always unexpected.
        // Instead of silently returning an empty coordinate list, surface a
        // clear error so callers can distinguish "no path" from "ok".
        if route.is_empty() {
            return Err(JsValue::from_str(
                &format!(
                    "Routing returned an empty path between nodes {} and {}. \
This usually means no path exists in the current graph for the given coordinates.",
                    start.id, end.id
                ),
            ));
        }

        // Convert the route (Vec<i64> of node ids) into a JS array of [lon, lat] pairs.
        let coords = Array::new();
        for node_id in route {
            if let Some(n) = graph.get_node(node_id) {
                let pair = Array::new();
                pair.push(&JsValue::from_f64(n.lon as f64));
                pair.push(&JsValue::from_f64(n.lat as f64));
                coords.push(&pair.into());
            }
        }

        Ok(coords.into())
    })
}

#[wasm_bindgen]
pub fn graph_stats() -> Result<JsValue, JsValue> {
    GRAPH.with(|cell| {
        let graph_ref = cell.borrow();
        let graph = graph_ref
            .as_ref()
            .ok_or_else(|| JsValue::from_str("Graph not initialized"))?;

        let mut node_count: usize = 0;
        let mut edge_count: usize = 0;

        for node in graph.iter() {
            node_count += 1;
            edge_count += graph.get_edges(node.id).len();
        }

        let arr = Array::new();
        arr.push(&JsValue::from_f64(node_count as f64));
        arr.push(&JsValue::from_f64(edge_count as f64));

        Ok(arr.into())
    })
}

