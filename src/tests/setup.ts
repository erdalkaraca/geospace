import '@testing-library/jest-dom'

// Mock global objects that might be used in tests
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}
global.localStorage = localStorageMock

// Mock sessionStorage
const sessionStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}
global.sessionStorage = sessionStorageMock

// Mock requestAnimationFrame
global.requestAnimationFrame = vi.fn(cb => setTimeout(cb, 0))
global.cancelAnimationFrame = vi.fn()

// Mock requestIdleCallback
global.requestIdleCallback = vi.fn(cb => setTimeout(cb, 0))
global.cancelIdleCallback = vi.fn()

// Mock IndexedDB
const mockIndexedDB = {
  open: vi.fn(() => {
    const request = {
      result: {
        createObjectStore: vi.fn(),
        transaction: vi.fn(() => ({
          objectStore: vi.fn(() => ({
            get: vi.fn(() => Promise.resolve(undefined)),
            put: vi.fn(() => Promise.resolve()),
            delete: vi.fn(() => Promise.resolve()),
            clear: vi.fn(() => Promise.resolve()),
            count: vi.fn(() => Promise.resolve(0))
          }))
        }))
      },
      onupgradeneeded: null,
      onsuccess: null,
      onerror: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn()
    }
    // Simulate successful opening
    setTimeout(() => {
      if (request.onsuccess) {
        request.onsuccess(new Event('success'))
      }
    }, 0)
    return request
  }),
  deleteDatabase: vi.fn(() => Promise.resolve()),
  cmp: vi.fn(() => 0)
}

// Mock IDBKeyVal functions that are used in the codebase
const mockIDBKeyVal = {
  get: vi.fn(() => Promise.resolve(undefined)),
  set: vi.fn(() => Promise.resolve()),
  del: vi.fn(() => Promise.resolve()),
  clear: vi.fn(() => Promise.resolve()),
  keys: vi.fn(() => Promise.resolve([])),
  values: vi.fn(() => Promise.resolve([])),
  entries: vi.fn(() => Promise.resolve([]))
}

// Set up the mocks
Object.defineProperty(global, 'indexedDB', {
  writable: true,
  value: mockIndexedDB
})

// Mock the idb-keyval module
vi.mock('idb-keyval', () => mockIDBKeyVal)

// Mock custom elements registry for Lit components
if (!customElements.get('test-k-part')) {
  customElements.define('test-k-part', class extends HTMLElement {})
}
if (!customElements.get('gs-catalog')) {
  customElements.define('gs-catalog', class extends HTMLElement {})
}
