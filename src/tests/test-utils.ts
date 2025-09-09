import { vi } from 'vitest'

// Mock utilities for testing
export const createMockElement = (tagName: string = 'div'): HTMLElement => {
  const element = document.createElement(tagName)
  return element
}

export const createMockEvent = (type: string, detail?: any): CustomEvent => {
  return new CustomEvent(type, { detail, bubbles: true })
}

export const createMockMouseEvent = (type: string = 'click'): MouseEvent => {
  return new MouseEvent(type, { bubbles: true })
}

// Mock signal utilities
export const createMockSignal = <T>(initialValue: T) => {
  let value = initialValue
  const subscribers = new Set<(value: T) => void>()

  return {
    get value() {
      return value
    },
    set(newValue: T) {
      value = newValue
      subscribers.forEach(callback => callback(newValue))
    },
    subscribe(callback: (value: T) => void) {
      subscribers.add(callback)
      return () => subscribers.delete(callback)
    }
  }
}

// Mock command registry utilities
export const createMockCommand = (id: string, name: string, description: string) => {
  return {
    id,
    name,
    description,
    parameters: [],
    output: []
  }
}

export const createMockHandler = (execute: Function, canExecute?: Function) => {
  return {
    execute: vi.fn().mockImplementation(execute),
    canExecute: canExecute ? vi.fn().mockImplementation(canExecute) : undefined
  }
}

// Mock execution context
export const createMockExecutionContext = (source?: any, params?: any): any => {
  return {
    source,
    params: params || {},
    ...params
  }
}

// Wait for next tick
export const nextTick = (): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, 0))
}

// Wait for animation frame
export const nextAnimationFrame = (): Promise<void> => {
  return new Promise(resolve => requestAnimationFrame(resolve))
}
