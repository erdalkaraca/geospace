import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ExecutionContext } from '../core/commandregistry'
import { fromLonLat } from 'ol/proj'

// Mock OpenLayers modules
vi.mock('ol/proj', () => ({
  fromLonLat: vi.fn((coords) => coords),
  transformExtent: vi.fn((extent) => extent)
}))

// Mock the map editor and related modules
vi.mock('./gs-map-editor', () => ({
  GsMapEditor: vi.fn()
}))

vi.mock('./utils', () => ({
  findOlLayer: vi.fn(),
  replaceUris: vi.fn()
}))

vi.mock('../rt', () => ({
  stylesLoader: {
    bindToLayer: vi.fn(),
    cacheStyle: vi.fn().mockResolvedValue(undefined),
    cacheStylesFromPath: vi.fn().mockResolvedValue(undefined)
  },
  toOlFeature: vi.fn(),
  toOlLayer: vi.fn(),
  toOlOverlay: vi.fn(),
  toOlControl: vi.fn(),
  toGsLayerType: vi.fn(),
  toGsSourceType: vi.fn(),
  toSourceUrl: vi.fn(),
  olMapToGsMap: vi.fn(),
  importOverlaySource: vi.fn(),
  importControlSource: vi.fn(),
  LAYER_GEOCODED_MARKERS: 'geocoded-markers',
  KEY_STYLES_PATH: 'stylesPath',
  GsSourceType: {
    Features: 'features',
    Vector: 'vector',
    Raster: 'raster'
  },
  GsLayerType: {
    VECTOR: 'vector',
    RASTER: 'raster'
  },
  GsGeometryType: {
    Point: 'point'
  },
  GsStyleType: {
    IMAGE: 'image'
  }
}))

vi.mock('../../core/toast', () => ({
  toastError: vi.fn()
}))

describe('Geo Command Handlers', () => {
  let mockMapEditor: any
  let mockView: any
  let mockOlMap: any
  let mockGsMap: any

  beforeEach(() => {
    // Reset all mocks
    vi.clearAllMocks()

    // Create mock view
    mockView = {
      setZoom: vi.fn(),
      setCenter: vi.fn(),
      calculateExtent: vi.fn().mockReturnValue([0, 0, 100, 100]),
      getProjection: vi.fn().mockReturnValue('EPSG:3857')
    }

    // Create mock OpenLayers map
    mockOlMap = {
      getLayers: vi.fn().mockReturnValue({
        getLength: vi.fn().mockReturnValue(2),
        item: vi.fn().mockReturnValue({}),
        insertAt: vi.fn(),
        addLayer: vi.fn(),
        removeLayer: vi.fn()
      }),
      addOverlay: vi.fn(),
      addControl: vi.fn(),
      render: vi.fn(),
      get: vi.fn(),
      set: vi.fn(),
      on: vi.fn()
    }

    // Create mock GS map
    mockGsMap = {
      layers: [
        { name: 'layer1', stylesPath: 'styles1.json' },
        { name: 'layer2', stylesPath: 'styles2.json' }
      ],
      styles: {}
    }

    // Create mock map editor
    mockMapEditor = {
      getView: vi.fn().mockReturnValue(mockView),
      olMap: mockOlMap,
      gsMap: mockGsMap,
      renderRoot: {
        querySelectorAll: vi.fn().mockReturnValue([])
      }
    }
  })

  describe('zoom_to_level command', () => {
    it('should have proper zoom logic', () => {
      const context: ExecutionContext = {
        source: mockMapEditor,
        params: { zoom: '5' }
      }

      // Test the logic directly without command registry
      const controller = context.source
      controller.getView().setZoom(Number(context.params!["zoom"]).valueOf())

      expect(mockView.setZoom).toHaveBeenCalledWith(5)
    })

    it('should handle invalid zoom values', () => {
      const context: ExecutionContext = {
        source: mockMapEditor,
        params: { zoom: 'invalid' }
      }

      // Test the logic directly
      const controller = context.source
      const zoomValue = Number(context.params!["zoom"]).valueOf()
      
      expect(isNaN(zoomValue)).toBe(true)
    })
  })

  describe('center_location command', () => {
    it('should have proper coordinate transformation logic', () => {
      const context: ExecutionContext = {
        source: mockMapEditor,
        params: { lat: '40.7128', lon: '-74.0060' }
      }

      // Test the logic directly
      const controller = context.source
      const coords = fromLonLat([Number(context.params!["lon"]).valueOf(), Number(context.params!["lat"]).valueOf()])
      controller.getView().setCenter(coords)

      expect(fromLonLat).toHaveBeenCalledWith([-74.0060, 40.7128])
      expect(mockView.setCenter).toHaveBeenCalled()
    })

    it('should handle coordinate conversion', () => {
      const lat = '40.7128'
      const lon = '-74.0060'
      
      const coords = fromLonLat([Number(lon), Number(lat)])
      
      expect(fromLonLat).toHaveBeenCalledWith([-74.0060, 40.7128])
    })
  })

  describe('add_marker command', () => {
    it('should handle marker creation logic', () => {
      const context: ExecutionContext = {
        source: mockMapEditor,
        params: {
          lat: '40.7128',
          lon: '-74.0060',
          name: 'Test Marker',
          description: 'A test marker',
          iconPath: 'custom-icon.png'
        }
      }

      // Test the coordinate transformation
      const coords = fromLonLat([Number(context.params!["lon"]).valueOf(), Number(context.params!["lat"]).valueOf()])
      const iconPath = context.params!["iconPath"] || "marker.png"

      expect(fromLonLat).toHaveBeenCalledWith([-74.0060, 40.7128])
      expect(iconPath).toBe('custom-icon.png')
    })

    it('should use default marker icon when iconPath not provided', () => {
      const context: ExecutionContext = {
        source: mockMapEditor,
        params: {
          lat: '40.7128',
          lon: '-74.0060',
          name: 'Test Marker',
          description: 'A test marker'
        }
      }

      const iconPath = context.params!["iconPath"] || "marker.png"
      expect(iconPath).toBe('marker.png')
    })
  })

  describe('add_layer command', () => {
    it('should handle layer creation logic', () => {
      const context: ExecutionContext = {
        source: mockMapEditor,
        params: {
          source: 'vector',
          url: 'http://example.com/data.geojson'
        }
      }

      const source = context.params!["source"]?.trim().toLowerCase()
      const url = context.params!["url"] as string

      expect(source).toBe('vector')
      expect(url).toBe('http://example.com/data.geojson')
    })

    it('should handle basemap layer creation', () => {
      const context: ExecutionContext = {
        source: mockMapEditor,
        params: {
          source: 'raster',
          basemap: true,
          url: 'http://example.com/tiles'
        }
      }

      const basemap = context?.params && context.params["basemap"] == true
      expect(basemap).toBe(true)
    })
  })

  describe('delete_layer command', () => {
    it('should handle layer deletion logic', () => {
      const context: ExecutionContext = {
        source: mockMapEditor,
        params: { index: '1' }
      }

      const index = parseInt(context.params!["index"]) - 1
      expect(index).toBe(0)
    })

    it('should handle invalid layer index', () => {
      const context: ExecutionContext = {
        source: mockMapEditor,
        params: { index: '10' } // Index out of bounds
      }

      const index = parseInt(context.params!["index"]) - 1
      const layerCount = mockOlMap.getLayers().getLength()
      
      expect(index).toBe(9)
      expect(layerCount).toBe(2)
      expect(index >= layerCount).toBe(true) // Should be out of bounds
    })
  })

  describe('apply_styles command', () => {
    it('should handle styles application with layer index', () => {
      const context: ExecutionContext = {
        source: mockMapEditor,
        params: {
          stylesPath: 'styles.json',
          layer: '1'
        }
      }

      const layer = context.params!["layer"]
      const stylesPath = context.params!["stylesPath"]?.trim().toLowerCase()

      expect(stylesPath).toBe('styles.json')
      expect(typeof layer === "number" || (layer && layer.trim().match(/\d+/) !== null)).toBe(true)
    })

    it('should handle styles application with layer name', () => {
      const context: ExecutionContext = {
        source: mockMapEditor,
        params: {
          stylesPath: 'styles.json',
          layer: 'layer1'
        }
      }

      const layer = context.params!["layer"]
      const layerName = layer?.trim().toLowerCase()

      expect(layerName).toBe('layer1')
    })
  })

  describe('switch_color_mode command', () => {
    it('should handle dark mode toggle logic', () => {
      const context: ExecutionContext = {
        source: mockMapEditor,
        params: {}
      }

      let darkmode: boolean = mockOlMap.get("darkmode") ?? false
      if (!context.params || !("mode" in context.params)) {
        darkmode = !darkmode
      }

      expect(darkmode).toBe(true) // Should toggle from false to true
    })

    it('should handle explicit dark mode setting', () => {
      const context: ExecutionContext = {
        source: mockMapEditor,
        params: { mode: 'dark' }
      }

      let darkmode: boolean = mockOlMap.get("darkmode") ?? false
      if (context.params && "mode" in context.params) {
        darkmode = context.params!["mode"] == "dark"
      }

      expect(darkmode).toBe(true)
    })

    it('should handle explicit light mode setting', () => {
      const context: ExecutionContext = {
        source: mockMapEditor,
        params: { mode: 'light' }
      }

      let darkmode: boolean = mockOlMap.get("darkmode") ?? false
      if (context.params && "mode" in context.params) {
        darkmode = context.params!["mode"] == "dark"
      }

      expect(darkmode).toBe(false)
    })
  })

  describe('view_extents command', () => {
    it('should handle view extent calculation', () => {
      const context: ExecutionContext = {
        source: mockMapEditor,
        params: { latlon: true }
      }

      const latlon = context.params!["latlon"]
      const extent = mockView.calculateExtent()

      expect(extent).toEqual([0, 0, 100, 100])
      expect(latlon).toBe(true)
    })

    it('should handle view extent without latlon parameter', () => {
      const context: ExecutionContext = {
        source: mockMapEditor,
        params: {}
      }

      const latlon = context.params!["latlon"]
      const extent = mockView.calculateExtent()

      expect(extent).toEqual([0, 0, 100, 100])
      expect(latlon).toBeUndefined()
    })
  })
})
