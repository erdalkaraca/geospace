import { describe, it, expect, vi } from 'vitest'
import { Extension, ExtensionSetting, extensionRegistry } from '../core/extensionregistry'

// Simple test for extension mechanism without complex mocking
describe('Extension Mechanism', () => {
  describe('Extension Interface', () => {
    it('should accept valid Extension objects', () => {
      // Test that we can create extension objects that conform to the Extension interface
      const extension: Extension = {
        id: 'test.extension',
        name: 'Test Extension',
        description: 'A test extension',
        url: 'http://example.com/extension.js',
        loader: () => Promise.resolve({ default: () => {} }),
        icon: 'test-icon',
        experimental: false
      }

      // Test that the object can be registered with the actual ExtensionRegistry
      extensionRegistry.registerExtension(extension)
      const registeredExtensions = extensionRegistry.getExtensions()
      expect(registeredExtensions).toContain(extension)
    })

    it('should accept minimal Extension objects', () => {
      // Test that minimal extension objects work (only required fields)
      const minimalExtension: Extension = {
        id: 'minimal.extension',
        name: 'Minimal Extension'
      }

      extensionRegistry.registerExtension(minimalExtension)
      const registeredExtensions = extensionRegistry.getExtensions()
      expect(registeredExtensions).toContain(minimalExtension)
    })

    it('should accept ExtensionSetting objects', () => {
      // Test that ExtensionSetting objects work correctly
      const setting: ExtensionSetting = {
        id: 'test.extension',
        enabled: true
      }

      expect(setting.id).toBe('test.extension')
      expect(setting.enabled).toBe(true)
    })
  })

  describe('Extension Registry Operations', () => {
    it('should register and retrieve extensions', () => {
      const extension1: Extension = { id: 'test-ext1', name: 'Test Extension 1' }
      const extension2: Extension = { id: 'test-ext2', name: 'Test Extension 2' }

      extensionRegistry.registerExtension(extension1)
      extensionRegistry.registerExtension(extension2)

      const allExtensions = extensionRegistry.getExtensions()
      expect(allExtensions).toContain(extension1)
      expect(allExtensions).toContain(extension2)
    })

    it('should overwrite existing extension with same id', () => {
      const extension1: Extension = { id: 'test-overwrite', name: 'Original Extension' }
      const extension2: Extension = { id: 'test-overwrite', name: 'Updated Extension' }

      extensionRegistry.registerExtension(extension1)
      extensionRegistry.registerExtension(extension2)

      const allExtensions = extensionRegistry.getExtensions()
      const ext1 = allExtensions.find(e => e.id === 'test-overwrite')
      expect(ext1).toEqual(extension2)
    })

    it('should handle extension with loader function', () => {
      const extension: Extension = {
        id: 'loader.extension',
        name: 'Loader Extension',
        loader: () => Promise.resolve({ default: () => {} })
      }

      extensionRegistry.registerExtension(extension)
      const registeredExtensions = extensionRegistry.getExtensions()
      const foundExtension = registeredExtensions.find(e => e.id === 'loader.extension')
      
      expect(foundExtension).toBeDefined()
      expect(foundExtension?.loader).toBeDefined()
      expect(typeof foundExtension?.loader).toBe('function')
    })

    it('should handle extension with URL', () => {
      const extension: Extension = {
        id: 'url.extension',
        name: 'URL Extension',
        url: 'http://example.com/extension.js'
      }

      extensionRegistry.registerExtension(extension)
      const registeredExtensions = extensionRegistry.getExtensions()
      const foundExtension = registeredExtensions.find(e => e.id === 'url.extension')
      
      expect(foundExtension).toBeDefined()
      expect(foundExtension?.url).toBe('http://example.com/extension.js')
    })
  })

  describe('Extension Enablement State', () => {
    it('should check if extension is enabled', () => {
      const extension: Extension = { id: 'test.enabled', name: 'Test Extension' }
      extensionRegistry.registerExtension(extension)

      // Initially should not be enabled (no settings configured)
      expect(extensionRegistry.isEnabled('test.enabled')).toBe(false)
      expect(extensionRegistry.isEnabled('nonexistent')).toBe(false)
    })

    it('should handle extension enable/disable operations', () => {
      const extension: Extension = { id: 'test.toggle', name: 'Toggle Extension' }
      extensionRegistry.registerExtension(extension)

      // Test enable operation (this will try to load the extension)
      expect(() => extensionRegistry.enable('test.toggle', false)).not.toThrow()
      
      // Test disable operation
      expect(() => extensionRegistry.disable('test.toggle', false)).not.toThrow()
    })
  })

  describe('Extension Loading', () => {
    it('should handle loading non-existent extension', async () => {
      await expect(extensionRegistry.load('nonexistent.extension')).rejects.toThrow('Extension not found: nonexistent.extension')
    })

    it('should handle extension with loader function', async () => {
      const mockModule = { default: vi.fn() }
      const extension: Extension = {
        id: 'loader.test',
        name: 'Loader Test Extension',
        loader: vi.fn().mockResolvedValue(mockModule)
      }

      extensionRegistry.registerExtension(extension)
      
      // Test that the extension is registered and can be found
      const allExtensions = extensionRegistry.getExtensions()
      const foundExtension = allExtensions.find(e => e.id === 'loader.test')
      expect(foundExtension).toBeDefined()
      expect(foundExtension?.loader).toBeDefined()
    })
  })
})
