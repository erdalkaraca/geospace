use routx_wasm::{build_graph_from_pbf_file, serialize_graph};
use std::env;
use std::fs;
use std::path::Path;

fn main() {
    env_logger::Builder::from_env(env_logger::Env::default().default_filter_or("info")).init();

    let args: Vec<String> = env::args().collect();
    if args.len() < 2 {
        eprintln!("Usage: pbf-to-routx <input.pbf> [output.routx]");
        eprintln!("  Reads OSM PBF, builds routing graph, writes routx binary format.");
        eprintln!("  If output is omitted, writes to <input>.routx");
        std::process::exit(1);
    }

    let input_path = Path::new(&args[1]);
    if !input_path.exists() {
        eprintln!("Error: input file not found: {}", input_path.display());
        std::process::exit(1);
    }

    let output_path = if args.len() >= 3 {
        Path::new(&args[2]).to_path_buf()
    } else {
        input_path.with_extension("routx")
    };

    let graph = build_graph_from_pbf_file(input_path).expect("Failed to load PBF");

    let node_count = graph.len();
    let edge_count: usize = graph.iter().map(|n| graph.get_edges(n.id).len()).sum();
    log::info!("Graph: {} nodes, {} edges", node_count, edge_count);

    let bytes = serialize_graph(&graph);
    log::info!("Writing {} bytes to {}", bytes.len(), output_path.display());
    fs::write(&output_path, &bytes).expect("Failed to write output");
    log::info!("Done.");
}
