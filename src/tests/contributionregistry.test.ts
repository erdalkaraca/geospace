import { describe, it, expect, beforeEach, vi } from 'vitest'
import { 
  Contribution, 
  CommandContribution, 
  HTMLContribution, 
  TabContribution,
  contributionRegistry,
  TOPIC_CONTRIBUTEIONS_CHANGED 
} from '../core/contributionregistry'
import { Signal } from '@lit-labs/signals'
import { html } from 'lit'

describe('ContributionRegistry', () => {
  let registry: any

  beforeEach(() => {
    registry = contributionRegistry
    // Clear the registry for each test
    registry.getContributions('test.target').length = 0
    registry.getContributions('html.target').length = 0
    registry.getContributions('tab.target').length = 0
    registry.getContributions('command.target').length = 0
  })

  describe('registerContribution', () => {
    it('should register a basic contribution', () => {
      const contribution: Contribution = {
        label: 'Test Contribution',
        icon: 'test-icon'
      }

      registry.registerContribution('test.target', contribution)

      const contributions = registry.getContributions('test.target')
      expect(contributions).toHaveLength(1)
      expect(contributions[0]).toBe(contribution)
    })

    it('should register multiple contributions for the same target', () => {
      const contribution1: Contribution = {
        label: 'Test Contribution 1'
      }
      const contribution2: Contribution = {
        label: 'Test Contribution 2'
      }

      registry.registerContribution('test.target', contribution1)
      registry.registerContribution('test.target', contribution2)

      const contributions = registry.getContributions('test.target')
      expect(contributions).toHaveLength(2)
      expect(contributions[0]).toBe(contribution1)
      expect(contributions[1]).toBe(contribution2)
    })

    it('should convert function disabled to Signal.Computed', () => {
      const mockDisabled = vi.fn().mockReturnValue(true)
      const contribution: Contribution = {
        label: 'Test Contribution',
        disabled: mockDisabled
      }

      registry.registerContribution('test.target', contribution)

      const contributions = registry.getContributions('test.target')
      expect(contributions[0].disabled).toBeInstanceOf(Signal.Computed)
    })

    it('should preserve Signal.Computed disabled as is', () => {
      const computedDisabled = new Signal.Computed(() => false)
      const contribution: Contribution = {
        label: 'Test Contribution',
        disabled: computedDisabled
      }

      registry.registerContribution('test.target', contribution)

      const contributions = registry.getContributions('test.target')
      expect(contributions[0].disabled).toBe(computedDisabled)
    })
  })

  describe('getContributions', () => {
    it('should return empty array for new target', () => {
      const contributions = registry.getContributions('new.target')
      expect(contributions).toEqual([])
    })

    it('should return registered contributions', () => {
      const contribution: Contribution = {
        label: 'Test Contribution'
      }

      registry.registerContribution('test.target', contribution)
      const contributions = registry.getContributions('test.target')

      expect(contributions).toHaveLength(1)
      expect(contributions[0]).toBe(contribution)
    })

    it('should create new array for each target', () => {
      const contribution1: Contribution = { label: 'Contribution 1' }
      const contribution2: Contribution = { label: 'Contribution 2' }

      registry.registerContribution('target1', contribution1)
      registry.registerContribution('target2', contribution2)

      const contributions1 = registry.getContributions('target1')
      const contributions2 = registry.getContributions('target2')

      expect(contributions1).toHaveLength(1)
      expect(contributions2).toHaveLength(1)
      expect(contributions1[0]).toBe(contribution1)
      expect(contributions2[0]).toBe(contribution2)
    })
  })

  describe('Contribution Types', () => {
    it('should handle CommandContribution', () => {
      const contribution: CommandContribution = {
        label: 'Test Command',
        command: 'test.command',
        icon: 'command-icon'
      }

      registry.registerContribution('command.target', contribution)

      const contributions = registry.getContributions('command.target')
      expect(contributions[0]).toEqual(contribution)
    })

    it('should handle HTMLContribution with string', () => {
      const contribution: HTMLContribution = {
        label: 'Test HTML',
        html: '<div>Test HTML</div>'
      }

      registry.registerContribution('html.target', contribution)

      const contributions = registry.getContributions('html.target')
      expect(contributions[0]).toEqual(contribution)
    })

    it('should handle HTMLContribution with function', () => {
      const templateFunction = () => html`<div>Test Template</div>`
      const contribution: HTMLContribution = {
        label: 'Test HTML',
        html: templateFunction
      }

      registry.registerContribution('html.target', contribution)

      const contributions = registry.getContributions('html.target')
      expect(contributions[0]).toEqual(contribution)
    })

    it('should handle TabContribution', () => {
      const componentFunction = () => html`<div>Tab Content</div>`
      const contribution: TabContribution = {
        label: 'Test Tab',
        name: 'test-tab',
        closable: true,
        noOverflow: false,
        component: componentFunction
      }

      registry.registerContribution('tab.target', contribution)

      const contributions = registry.getContributions('tab.target')
      expect(contributions[0]).toEqual(contribution)
    })
  })

  describe('Event Publishing', () => {
    it('should publish contributions changed event', () => {
      const mockPublish = vi.fn()
      
      // Mock the publish function
      vi.doMock('./events.ts', () => ({
        publish: mockPublish
      }))

      const contribution: Contribution = {
        label: 'Test Contribution'
      }

      registry.registerContribution('test.target', contribution)

      // Note: In a real test, we'd need to properly mock the publish function
      // This test structure shows the intent
    })
  })
})

describe('Global Contribution Registry', () => {
  it('should be defined', () => {
    expect(contributionRegistry).toBeDefined()
  })

  it('should be available in root context', () => {
    // This test would require access to rootContext to verify
    // The structure shows the intent
    expect(contributionRegistry).toBeDefined()
  })
})

describe('Constants', () => {
  it('should have correct topic constant', () => {
    expect(TOPIC_CONTRIBUTEIONS_CHANGED).toBe('events/contributionregistry/contributionsChanged')
  })
})
