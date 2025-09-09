import { describe, it, expect, beforeEach } from 'vitest'
import { 
  EMPTY_SIGNALPORT,
  activePartSignal,
  activeEditorSignal,
  partDirtySignal,
  activeTasksSignal,
  activeSelectionSignal
} from '../core/appstate'

describe('AppState Signals', () => {
  beforeEach(() => {
    // Reset all signals to their initial state
    activePartSignal.set(null as any)
    activeEditorSignal.set(null as any)
    partDirtySignal.set(null as any)
    activeTasksSignal.set(0)
    activeSelectionSignal.set(undefined)
  })

  describe('EMPTY_SIGNALPORT', () => {
    it('should be an empty object', () => {
      expect(EMPTY_SIGNALPORT).toEqual({})
    })

    it('should be a SignalPort type', () => {
      expect(typeof EMPTY_SIGNALPORT).toBe('object')
    })
  })

  describe('activePartSignal', () => {
    it('should initialize with null value', () => {
      expect(activePartSignal.get()).toBeNull()
    })

    it('should update when a value is set', () => {
      const testValue = { id: 'test-part', name: 'Test Part' }
      activePartSignal.set(testValue as any)
      expect(activePartSignal.get()).toBe(testValue)
    })

    it('should maintain value consistency', () => {
      const testValue = { id: 'test-part', name: 'Test Part' }
      activePartSignal.set(testValue as any)
      expect(activePartSignal.get()).toBe(testValue)
      
      // Verify the value persists
      expect(activePartSignal.get()).toBe(testValue)
    })

    it('should handle null values', () => {
      const testValue = { id: 'test-part' }
      activePartSignal.set(testValue as any)
      expect(activePartSignal.get()).toBe(testValue)
      
      activePartSignal.set(null as any)
      expect(activePartSignal.get()).toBeNull()
    })
  })

  describe('activeEditorSignal', () => {
    it('should initialize with null value', () => {
      expect(activeEditorSignal.get()).toBeNull()
    })

    it('should update when a value is set', () => {
      const testValue = { id: 'test-editor', type: 'monaco' }
      activeEditorSignal.set(testValue as any)
      expect(activeEditorSignal.get()).toBe(testValue)
    })

    it('should handle different editor types', () => {
      const monacoEditor = { id: 'monaco-editor', type: 'monaco' }
      const markdownEditor = { id: 'markdown-editor', type: 'markdown' }
      
      activeEditorSignal.set(monacoEditor as any)
      expect(activeEditorSignal.get()).toBe(monacoEditor)
      
      activeEditorSignal.set(markdownEditor as any)
      expect(activeEditorSignal.get()).toBe(markdownEditor)
    })
  })

  describe('partDirtySignal', () => {
    it('should initialize with null value', () => {
      expect(partDirtySignal.get()).toBeNull()
    })

    it('should track dirty state', () => {
      const testValue = { id: 'dirty-part', modified: true }
      partDirtySignal.set(testValue as any)
      expect(partDirtySignal.get()).toBe(testValue)
    })

    it('should handle null values for clean state', () => {
      const testValue = { id: 'dirty-part' }
      partDirtySignal.set(testValue as any)
      expect(partDirtySignal.get()).toBe(testValue)
      
      partDirtySignal.set(null as any)
      expect(partDirtySignal.get()).toBeNull()
    })
  })

  describe('activeTasksSignal', () => {
    it('should initialize with 0 tasks', () => {
      expect(activeTasksSignal.get()).toBe(0)
    })

    it('should track active task count', () => {
      activeTasksSignal.set(3)
      expect(activeTasksSignal.get()).toBe(3)
    })

    it('should handle task count changes', () => {
      activeTasksSignal.set(1)
      expect(activeTasksSignal.get()).toBe(1)

      activeTasksSignal.set(0)
      expect(activeTasksSignal.get()).toBe(0)
    })

    it('should handle negative task counts', () => {
      activeTasksSignal.set(-1)
      expect(activeTasksSignal.get()).toBe(-1)
    })

    it('should handle large task counts', () => {
      activeTasksSignal.set(1000)
      expect(activeTasksSignal.get()).toBe(1000)
    })
  })

  describe('activeSelectionSignal', () => {
    it('should initialize with undefined value', () => {
      expect(activeSelectionSignal.get()).toBeUndefined()
    })

    it('should track file selection', () => {
      const fileSelection = { type: 'file', path: '/test/file.txt' }
      activeSelectionSignal.set(fileSelection)
      expect(activeSelectionSignal.get()).toBe(fileSelection)
    })

    it('should track directory selection', () => {
      const dirSelection = { type: 'directory', path: '/test/dir' }
      activeSelectionSignal.set(dirSelection)
      expect(activeSelectionSignal.get()).toBe(dirSelection)
    })

    it('should handle complex selection objects', () => {
      const complexSelection = { 
        type: 'multi', 
        items: ['file1.txt', 'file2.txt'],
        metadata: { count: 2, timestamp: Date.now() }
      }
      activeSelectionSignal.set(complexSelection)
      expect(activeSelectionSignal.get()).toBe(complexSelection)
    })

    it('should handle undefined values for no selection', () => {
      const selection = { type: 'file', path: '/test/file.txt' }
      activeSelectionSignal.set(selection)
      expect(activeSelectionSignal.get()).toBe(selection)
      
      activeSelectionSignal.set(undefined)
      expect(activeSelectionSignal.get()).toBeUndefined()
    })
  })

  describe('Signal Integration', () => {
    it('should allow multiple signals to be updated independently', () => {
      const partValue = { id: 'part1', name: 'Test Part' }
      const editorValue = { id: 'editor1', type: 'monaco' }
      
      activePartSignal.set(partValue as any)
      activeEditorSignal.set(editorValue as any)
      activeTasksSignal.set(2)

      expect(activePartSignal.get()).toBe(partValue)
      expect(activeEditorSignal.get()).toBe(editorValue)
      expect(activeTasksSignal.get()).toBe(2)
    })

    it('should maintain signal isolation', () => {
      const partValue = { id: 'part1' }
      const dirtyValue = { id: 'dirty-part' }
      const selectionValue = { type: 'file', path: '/test.txt' }
      
      activePartSignal.set(partValue as any)
      partDirtySignal.set(dirtyValue as any)
      activeSelectionSignal.set(selectionValue)
      
      // Each signal should maintain its own value
      expect(activePartSignal.get()).toBe(partValue)
      expect(partDirtySignal.get()).toBe(dirtyValue)
      expect(activeSelectionSignal.get()).toBe(selectionValue)
    })

    it('should handle rapid signal updates', () => {
      const values = [
        { id: 'value1' },
        { id: 'value2' },
        { id: 'value3' }
      ]
      
      values.forEach((value, index) => {
        activePartSignal.set(value as any)
        activeTasksSignal.set(index + 1)
        expect(activePartSignal.get()).toBe(value)
        expect(activeTasksSignal.get()).toBe(index + 1)
      })
    })
  })
})
