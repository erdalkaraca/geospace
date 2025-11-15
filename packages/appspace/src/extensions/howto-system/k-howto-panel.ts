import { css, html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PropertyValues } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { KWidget } from '../../widgets/k-widget';
import { howToService } from './howto-service';
import { HowToContribution, HowToStep } from './howto-contribution';
import { subscribe } from '../../core/events';
import { commandRegistry } from '../../core/commandregistry';
import { toastError, toastInfo } from '../../core/toast';
import { createRef, ref, Ref } from 'lit/directives/ref.js';
import { TOPIC_CONTRIBUTEIONS_CHANGED } from '../../core/contributionregistry';
import { HOWTO_CONTRIBUTION_TARGET } from './howto-service';
import { appSettings } from '../../core/settingsservice';
import { workspaceService, TOPIC_WORKSPACE_CONNECTED } from '../../core/filesys';

// Event topic for showing the HowTo panel
export const TOPIC_SHOW_HOWTO_PANEL = 'howto/show-panel';
export const TOPIC_TOGGLE_HOWTO_PANEL = 'howto/toggle-panel';

// Constants
const SETTINGS_KEY = 'k-howto-panel';
const DEFAULT_POSITION = { x: 100, y: 100 };
const DEFAULT_PANEL_SIZE = { width: 400, height: 300 };

interface StepState {
    step: HowToStep;
    status: 'pending' | 'active' | 'completed' | 'skipped' | 'failed';
    preConditionMet?: boolean;
    postConditionMet?: boolean;
}

@customElement('k-howto-panel')
export class KHowToPanel extends KWidget {
    @state()
    private contributions: HowToContribution[] = [];

    @state()
    private activeContributionId: string | null = null;

    @state()
    private stepStates: Map<string, StepState[]> = new Map();

    @state()
    private isMinimized: boolean = false;

    @state()
    private isVisible: boolean = false;

    @state()
    private positionX: number = DEFAULT_POSITION.x;

    @state()
    private positionY: number = DEFAULT_POSITION.y;

    private isDragging: boolean = false;

    @state()
    private dragPreviewPosition: { x: number; y: number } | null = null;

    private dragStartPosition: { x: number; y: number } = { x: 0, y: 0 };

    private panelRef: Ref<HTMLElement> = createRef();
    private howtoCleanup?: () => void;

    protected async doBeforeUI() {
        this.loadContributions();
        
        subscribe(TOPIC_CONTRIBUTEIONS_CHANGED, (event: any) => {
            if (event.target === HOWTO_CONTRIBUTION_TARGET) {
                this.loadContributions();
                this.requestUpdate();
            }
        });

        // Subscribe to show/toggle panel events
        subscribe(TOPIC_SHOW_HOWTO_PANEL, () => this.showPanel());
        subscribe(TOPIC_TOGGLE_HOWTO_PANEL, () => this.toggleVisibility());

        // Load position and visibility from dialogsettings
        await this.loadSettings();
        
        // If no workspace is selected and panel wasn't explicitly hidden, show it by default
        const hasWorkspace = workspaceService.isConnected();
        if (!hasWorkspace && this.isVisible === false) {
            // Check if user has explicitly hidden it (if settings exist and visible is false)
            const settings = await appSettings.getDialogSetting(SETTINGS_KEY);
            if (!settings || settings.visible === undefined) {
                // No explicit preference, show panel when no workspace
                this.isVisible = true;
                await this.saveSettings();
            }
        }
        
        // Subscribe to workspace connection to hide panel when workspace is connected (if it was auto-shown)
        subscribe(TOPIC_WORKSPACE_CONNECTED, () => {
            // Only auto-hide if it was auto-shown (no explicit visibility setting)
            const checkAutoHide = async () => {
                const settings = await appSettings.getDialogSetting(SETTINGS_KEY);
                if (!settings || settings.visible === undefined) {
                    // Was auto-shown, can auto-hide when workspace connects
                    // But let's keep it visible - user might want to see howtos even with workspace
                }
            };
            checkAutoHide();
        });
    }

    private boundHandleDragMove?: (e: MouseEvent) => void;
    private boundHandleDragEnd?: () => void;

    protected doInitUI() {
        // Setup document-level drag handlers (these are always available)
        this.boundHandleDragMove = this.handleDragMove.bind(this);
        this.boundHandleDragEnd = this.handleDragEnd.bind(this);
        document.addEventListener('mousemove', this.boundHandleDragMove);
        document.addEventListener('mouseup', this.boundHandleDragEnd);
    }

    protected firstUpdated(_changedProperties: PropertyValues) {
        super.firstUpdated(_changedProperties);
    }

    private loadContributions() {
        this.contributions = howToService.getAllContributions();
    }

    private async loadSettings() {
        const settings = await appSettings.getDialogSetting(SETTINGS_KEY);
        if (settings) {
            if (settings.position) {
                this.positionX = settings.position.x || DEFAULT_POSITION.x;
                this.positionY = settings.position.y || DEFAULT_POSITION.y;
            }
            if (settings.visible !== undefined) {
                this.isVisible = settings.visible;
            }
        }
    }

    private async saveSettings() {
        await appSettings.setDialogSetting(SETTINGS_KEY, {
            position: { x: this.positionX, y: this.positionY },
            visible: this.isVisible
        });
    }

    private handleDragStart = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (this.isDragTarget(target) || !this.panelRef.value) {
            return;
        }
        
        const rect = this.panelRef.value.getBoundingClientRect();
        this.dragStartPosition = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
        this.isDragging = true;
        this.dragPreviewPosition = { x: this.positionX, y: this.positionY };
        this.requestUpdate();
        e.preventDefault();
        e.stopPropagation();
    }

    private isDragTarget(target: HTMLElement): boolean {
        return !!(target.closest('.header-actions') || target.closest('wa-button'));
    }

    private getViewportBounds() {
        const panelWidth = this.panelRef.value?.offsetWidth || DEFAULT_PANEL_SIZE.width;
        const panelHeight = this.panelRef.value?.offsetHeight || DEFAULT_PANEL_SIZE.height;
        return {
            maxX: window.innerWidth - panelWidth,
            maxY: window.innerHeight - panelHeight
        };
    }

    private handleDragMove = (e: MouseEvent) => {
        if (!this.isDragging || !this.dragPreviewPosition) {
            return;
        }
        
        const bounds = this.getViewportBounds();
        const newX = Math.max(0, Math.min(e.clientX - this.dragStartPosition.x, bounds.maxX));
        const newY = Math.max(0, Math.min(e.clientY - this.dragStartPosition.y, bounds.maxY));
        
        if (this.dragPreviewPosition.x !== newX || this.dragPreviewPosition.y !== newY) {
            this.dragPreviewPosition = { x: newX, y: newY };
            this.requestUpdate();
        }
    }

    private handleDragEnd = async () => {
        if (!this.isDragging || !this.dragPreviewPosition) {
            return;
        }
        
        this.isDragging = false;
        const previewPos = this.dragPreviewPosition;
        this.dragPreviewPosition = null;
        
        this.positionX = previewPos.x;
        this.positionY = previewPos.y;
        
        await this.saveSettings();
        this.requestUpdate();
    }

    private async startHowTo(contributionId: string) {
        const contribution = howToService.getContribution(contributionId);
        if (!contribution) {
            toastError(`HowTo "${contributionId}" not found`);
            return;
        }

        // Clean up previous HowTo
        this.cleanupHowTo();

        this.activeContributionId = contributionId;
        this.isMinimized = false;

        // Initialize step states
        const states: StepState[] = contribution.steps.map(step => ({
            step,
            status: 'pending'
        }));

        this.stepStates.set(contributionId, states);
        
        // Call HowTo's initialize function if provided
        if (contribution.initialize) {
            const context = {
                requestUpdate: () => this.recheckActiveStepConditions(),
                contributionId: contributionId
            };
            this.howtoCleanup = contribution.initialize(context) || undefined;
        }
        
        this.requestUpdate();

        // Check initial pre-conditions
        await this.checkPreConditions(contributionId, 0);
    }

    private cleanupHowTo() {
        if (this.howtoCleanup) {
            this.howtoCleanup();
            this.howtoCleanup = undefined;
        }
    }

    private getStepState(contributionId: string, stepIndex: number): StepState | null {
        const states = this.stepStates.get(contributionId);
        return states && stepIndex < states.length ? states[stepIndex] : null;
    }

    private async checkPreConditions(contributionId: string, stepIndex: number) {
        const state = this.getStepState(contributionId, stepIndex);
        if (!state) return;

        if (!state.step.preCondition) {
            state.preConditionMet = true;
            this.requestUpdate();
            return;
        }

        try {
            state.preConditionMet = await state.step.preCondition();
            this.requestUpdate();
        } catch (error) {
            console.error(`Pre-condition check failed for step ${state.step.id}:`, error);
            state.preConditionMet = false;
            this.requestUpdate();
        }
    }

    private async checkPostConditions(contributionId: string, stepIndex: number) {
        const state = this.getStepState(contributionId, stepIndex);
        if (!state) return;

        if (!state.step.postCondition) {
            this.completeStep(contributionId, stepIndex);
            return;
        }

        try {
            const result = await state.step.postCondition();
            state.postConditionMet = result;
            state.status = result ? 'completed' : 'failed';
            
            if (result) {
                this.activateNextStep(contributionId, stepIndex);
            }
            this.requestUpdate();
        } catch (error) {
            console.error(`Post-condition check failed for step ${state.step.id}:`, error);
            state.postConditionMet = false;
            state.status = 'failed';
            this.requestUpdate();
        }
    }

    private completeStep(contributionId: string, stepIndex: number) {
        const state = this.getStepState(contributionId, stepIndex);
        if (!state) return;
        
        state.status = 'completed';
        this.activateNextStep(contributionId, stepIndex);
        this.requestUpdate();
    }

    private async activateNextStep(contributionId: string, stepIndex: number) {
        const states = this.stepStates.get(contributionId);
        if (!states || stepIndex + 1 >= states.length) return;
        
        const nextState = states[stepIndex + 1];
        nextState.status = 'active';
        await this.checkPreConditions(contributionId, stepIndex + 1);
    }

    /**
     * Re-checks conditions for active and pending steps when workspace or editor state changes
     */
    private async recheckActiveStepConditions() {
        if (!this.activeContributionId) return;

        const states = this.stepStates.get(this.activeContributionId);
        if (!states) return;

        // Find the active step
        const activeStepIndex = states.findIndex(state => state.status === 'active');
        
        if (activeStepIndex !== -1) {
            const activeState = states[activeStepIndex];
            const step = activeState.step;

            // Re-check post-condition if it exists and step is active
            if (step.postCondition) {
                try {
                    const result = await step.postCondition();
                    if (result && activeState.status === 'active') {
                        // Post-condition is met, complete the step and move to next
                        await this.checkPostConditions(this.activeContributionId, activeStepIndex);
                        return; // Step completed, no need to check pre-conditions
                    }
                } catch (error) {
                    // Ignore errors in post-condition checks during re-evaluation
                }
            }
        }

        // Re-check pre-conditions for pending steps (they might become available)
        for (let i = 0; i < states.length; i++) {
            const state = states[i];
            if (state.status === 'pending' && state.step.preCondition) {
                // Re-check pre-condition for pending steps
                await this.checkPreConditions(this.activeContributionId, i);
            }
        }

        this.requestUpdate();
    }

    private async executeStep(contributionId: string, stepIndex: number) {
        const state = this.getStepState(contributionId, stepIndex);
        if (!state) return;

        if (!await this.validatePreConditions(state, contributionId, stepIndex)) {
            return;
        }

        state.status = 'active';
        this.requestUpdate();

        if (state.step.command && !await this.executeStepCommand(state)) {
            return;
        }

        await this.checkPostConditions(contributionId, stepIndex);
    }

    private async validatePreConditions(state: StepState, contributionId: string, stepIndex: number): Promise<boolean> {
        if (!state.step.preCondition) {
            return true;
        }

        if (state.preConditionMet === undefined || state.preConditionMet === false) {
            await this.checkPreConditions(contributionId, stepIndex);
        }

        if (state.preConditionMet !== true) {
            toastError(`Pre-conditions not met for step: ${state.step.title}`);
            return false;
        }

        return true;
    }

    private async executeStepCommand(state: StepState): Promise<boolean> {
        if (!state.step.command) {
            return true;
        }

        try {
            const execContext = commandRegistry.createExecutionContext(state.step.commandParams || {});
            await commandRegistry.execute(state.step.command, execContext);
            return true;
        } catch (error) {
            console.error(`Failed to execute command for step ${state.step.id}:`, error);
            toastError(`Failed to execute step: ${state.step.title}`);
            state.status = 'failed';
            this.requestUpdate();
            return false;
        }
    }

    private async runStepCommand(contributionId: string, stepIndex: number) {
        const state = this.getStepState(contributionId, stepIndex);
        if (!state || !state.step.command) {
            return;
        }

        // Check pre-conditions if they exist
        if (state.step.preCondition) {
            const preConditionMet = await state.step.preCondition();
            if (!preConditionMet) {
                toastError(`Pre-conditions not met for step: ${state.step.title}`);
                return;
            }
        }

        // Execute the command
        const success = await this.executeStepCommand(state);
        if (success) {
            // Check post-conditions after command execution
            await this.checkPostConditions(contributionId, stepIndex);
        }
    }

    private skipStep(contributionId: string, stepIndex: number) {
        const state = this.getStepState(contributionId, stepIndex);
        if (!state || !state.step.optional) return;

        state.status = 'skipped';
        this.activateNextStep(contributionId, stepIndex);
        this.requestUpdate();
    }

    private closeHowTo() {
        this.cleanupHowTo();
        this.activeContributionId = null;
        this.stepStates.clear();
        this.requestUpdate();
    }

    private toggleMinimize() {
        this.isMinimized = !this.isMinimized;
        this.requestUpdate();
    }

    private async showPanel() {
        this.isVisible = true;
        this.isMinimized = false;
        await this.saveSettings();
        this.requestUpdate();
    }

    private async hidePanel() {
        this.isVisible = false;
        await this.saveSettings();
        this.requestUpdate();
    }

    private async toggleVisibility() {
        if (this.isVisible) {
            await this.hidePanel();
        } else {
            await this.showPanel();
        }
    }

    private renderStep(state: StepState, index: number, contributionId: string) {
        const { step, status, preConditionMet, postConditionMet } = state;
        const isActive = status === 'active';
        const isCompleted = status === 'completed';
        const isFailed = status === 'failed';
        const isPending = status === 'pending';
        const isSkipped = status === 'skipped';

        return html`
            <div class="step ${status}" ?data-active=${isActive}>
                <div class="step-header">
                    <div class="step-number">${index + 1}</div>
                    <div class="step-title">${step.title}</div>
                    <div class="step-status">
                        ${step.command ? html`
                            <wa-button 
                                size="small" 
                                appearance="plain" 
                                @click=${(e: Event) => {
                                    e.stopPropagation();
                                    this.runStepCommand(contributionId, index);
                                }}
                                title="Run step command"
                            >
                                <wa-icon name="play"></wa-icon>
                            </wa-button>
                        ` : nothing}
                        ${isCompleted ? html`<wa-icon name="check-circle" class="status-icon completed"></wa-icon>` : nothing}
                        ${isFailed ? html`<wa-icon name="xmark-circle" class="status-icon failed"></wa-icon>` : nothing}
                        ${isSkipped ? html`<wa-icon name="minus-circle" class="status-icon skipped"></wa-icon>` : nothing}
                        ${isPending ? html`<wa-icon name="circle" class="status-icon pending"></wa-icon>` : nothing}
                        ${isActive ? html`<wa-icon name="play-circle" class="status-icon active"></wa-icon>` : nothing}
                    </div>
                </div>
                <div class="step-description">${step.description}</div>
                ${step.preCondition && preConditionMet !== undefined ? html`
                    <div class="condition pre-condition ${preConditionMet ? 'met' : 'not-met'}">
                        <wa-icon name="${preConditionMet ? 'check' : 'xmark'}"></wa-icon>
                        <span>Pre-condition: ${preConditionMet ? 'Met' : 'Not met'}</span>
                    </div>
                ` : nothing}
                ${step.postCondition && postConditionMet !== undefined ? html`
                    <div class="condition post-condition ${postConditionMet ? 'met' : 'not-met'}">
                        <wa-icon name="${postConditionMet ? 'check' : 'xmark'}"></wa-icon>
                        <span>Post-condition: ${postConditionMet ? 'Met' : 'Not met'}</span>
                    </div>
                ` : nothing}
                ${isActive && step.optional ? html`
                    <div class="step-actions">
                        <wa-button size="small" appearance="outline" @click=${() => this.skipStep(contributionId, index)}>
                            <wa-icon name="forward"></wa-icon>
                            Skip
                        </wa-button>
                    </div>
                ` : nothing}
            </div>
        `;
    }

    render() {
        if (!this.isVisible) {
            return nothing;
        }

        const activeContribution = this.activeContributionId
            ? howToService.getContribution(this.activeContributionId)
            : null;

        const activeStepStates = this.activeContributionId
            ? this.stepStates.get(this.activeContributionId) || []
            : [];

        return html`
            ${this.dragPreviewPosition ? html`
                <div 
                    class="howto-panel-drag-preview"
                style=${styleMap({
                    left: `${this.dragPreviewPosition.x}px`,
                    top: `${this.dragPreviewPosition.y}px`,
                    width: `${this.panelRef.value?.offsetWidth || DEFAULT_PANEL_SIZE.width}px`,
                    height: `${this.panelRef.value?.offsetHeight || DEFAULT_PANEL_SIZE.height}px`,
                    display: 'block',
                    visibility: 'visible'
                })}
                ></div>
            ` : nothing}
            <div 
                class="howto-panel ${this.isMinimized ? 'minimized' : ''} ${this.dragPreviewPosition ? 'dragging' : ''}"
                style=${styleMap({
                    left: `${this.positionX}px`,
                    top: `${this.positionY}px`,
                    transform: 'translateZ(0)'
                })}
                ${ref(this.panelRef)}
            >
                <div class="panel-header" @mousedown=${this.handleDragStart}>
                    <div class="header-title">
                        <wa-icon name="list-check"></wa-icon>
                        <span>HowTo Workflows</span>
                    </div>
                    <div class="header-actions" @mousedown=${(e: MouseEvent) => e.stopPropagation()}>
                        <wa-button 
                            size="small" 
                            appearance="plain" 
                            @click=${this.toggleMinimize}
                            title="${this.isMinimized ? 'Expand' : 'Minimize'}"
                        >
                            <wa-icon name="${this.isMinimized ? 'chevron-up' : 'chevron-down'}"></wa-icon>
                        </wa-button>
                        <wa-button 
                            size="small" 
                            appearance="plain" 
                            @click=${this.hidePanel}
                            title="Hide Panel"
                        >
                            <wa-icon name="xmark"></wa-icon>
                        </wa-button>
                    </div>
                </div>
                
                ${!this.isMinimized ? html`
                    <div class="panel-content">
                        ${activeContribution ? html`
                            <div class="active-workflow">
                                <div class="workflow-header">
                                    <div class="workflow-title-section">
                                        <h3>${typeof activeContribution.title === 'function' 
                                            ? activeContribution.title() 
                                            : activeContribution.title}</h3>
                                        ${activeContribution.description ? html`
                                            <p class="workflow-description">${typeof activeContribution.description === 'function'
                                                ? activeContribution.description()
                                                : activeContribution.description}</p>
                                        ` : nothing}
                                    </div>
                                    <wa-button 
                                        size="small" 
                                        appearance="plain" 
                                        @click=${this.closeHowTo}
                                        title="Close HowTo"
                                    >
                                        <wa-icon name="xmark"></wa-icon>
                                    </wa-button>
                                </div>
                                <div class="steps-list">
                                    ${activeStepStates.map((state, index) => 
                                        this.renderStep(state, index, this.activeContributionId!)
                                    )}
                                </div>
                            </div>
                        ` : html`
                            <div class="workflows-list">
                                <h3>Available Workflows</h3>
                                ${this.contributions.length === 0 ? html`
                                    <div class="empty-state">
                                        <wa-icon name="list-check" style="font-size: 2em; opacity: 0.5; margin-bottom: 12px;"></wa-icon>
                                        <p>No HowTo workflows available yet.</p>
                                        <p style="font-size: 0.9em; opacity: 0.7;">Extensions can register workflows via the contribution registry.</p>
                                    </div>
                                ` : this.contributions.map(contrib => {
                                    const title = typeof contrib.title === 'function' ? contrib.title() : contrib.title;
                                    const description = contrib.description 
                                        ? (typeof contrib.description === 'function' ? contrib.description() : contrib.description)
                                        : null;
                                    return html`
                                    <div class="workflow-item" @click=${() => this.startHowTo(contrib.id)}>
                                        ${contrib.icon ? html`
                                            <wa-icon name="${contrib.icon}"></wa-icon>
                                        ` : html`
                                            <wa-icon name="list-check"></wa-icon>
                                        `}
                                        <div class="workflow-info">
                                            <div class="workflow-title">${title}</div>
                                            ${description ? html`
                                                <div class="workflow-desc">${description}</div>
                                            ` : nothing}
                                            <div class="workflow-meta">${contrib.steps.length} step${contrib.steps.length !== 1 ? 's' : ''}</div>
                                        </div>
                                    </div>
                                `})}
                            </div>
                        `}
                    </div>
                ` : nothing}
            </div>
        `;
    }

    static styles = css`
        :host {
            display: block;
            position: fixed;
            z-index: 10000;
            pointer-events: none;
        }

        .howto-panel-drag-preview {
            position: fixed !important;
            border: 3px dashed var(--wa-color-primary-50, #0066cc) !important;
            background: var(--wa-color-primary-05, rgba(0, 102, 204, 0.05)) !important;
            border-radius: var(--wa-border-radius-medium, 8px);
            z-index: 10001 !important;
            pointer-events: none !important;
            opacity: 0.8 !important;
            box-sizing: border-box;
            display: block !important;
            visibility: visible !important;
            min-width: 100px;
            min-height: 100px;
        }

        :host-context(.wa-light) .howto-panel-drag-preview {
            background: var(--wa-color-primary-95);
            border-color: var(--wa-color-primary-50);
        }

        .howto-panel {
            position: fixed !important;
            width: 400px;
            max-height: 600px;
            background: var(--wa-color-surface-raised, var(--wa-color-neutral-05));
            border: var(--wa-border-width-s, 1px) solid var(--wa-color-neutral-border-loud, var(--wa-color-neutral-25));
            border-radius: var(--wa-border-radius-medium, 8px);
            box-shadow: var(--wa-shadow-large, 0 8px 24px rgba(0, 0, 0, 0.8));
            pointer-events: all;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        :host-context(.wa-light) .howto-panel {
            background: var(--wa-color-surface-raised, var(--wa-color-neutral-95));
            border-color: var(--wa-color-neutral-border-loud, var(--wa-color-neutral-75));
            box-shadow: var(--wa-shadow-large, 0 8px 24px rgba(0, 0, 0, 0.2));
        }

        .howto-panel.minimized {
            max-height: auto;
        }

        .howto-panel.dragging {
            opacity: 0.5;
        }

        .panel-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: var(--wa-spacing-medium, 12px) var(--wa-spacing-large, 16px);
            background: var(--wa-color-surface-lowered, var(--wa-color-neutral-10));
            border-bottom: var(--wa-border-width-s, 1px) solid var(--wa-color-neutral-border-loud, var(--wa-color-neutral-25));
            cursor: move;
            user-select: none;
        }

        :host-context(.wa-light) .panel-header {
            background: var(--wa-color-surface-lowered, var(--wa-color-neutral-90));
            border-bottom-color: var(--wa-color-neutral-border-loud, var(--wa-color-neutral-75));
        }

        .header-title {
            display: flex;
            align-items: center;
            gap: var(--wa-spacing-small, 8px);
            font-weight: 600;
            color: var(--wa-color-text-normal, var(--wa-color-neutral-90));
        }

        :host-context(.wa-light) .header-title {
            color: var(--wa-color-text-normal, var(--wa-color-neutral-10));
        }

        .header-actions {
            display: flex;
            gap: var(--wa-spacing-x-small, 4px);
        }

        .panel-content {
            flex: 1;
            overflow-y: auto;
            padding: var(--wa-spacing-large, 16px);
        }

        .workflows-list h3 {
            margin: 0 0 var(--wa-spacing-medium, 12px) 0;
            font-size: var(--wa-font-size-medium, 14px);
            font-weight: 600;
            color: var(--wa-color-text-normal, var(--wa-color-neutral-80));
        }

        :host-context(.wa-light) .workflows-list h3 {
            color: var(--wa-color-text-normal, var(--wa-color-neutral-20));
        }

        .workflow-item {
            display: flex;
            align-items: flex-start;
            gap: var(--wa-spacing-medium, 12px);
            padding: var(--wa-spacing-medium, 12px);
            margin-bottom: var(--wa-spacing-small, 8px);
            background: var(--wa-color-surface-lowered, var(--wa-color-neutral-10));
            border: var(--wa-border-width-s, 1px) solid var(--wa-color-neutral-border-subtle, var(--wa-color-neutral-20));
            border-radius: var(--wa-border-radius-small, 6px);
            cursor: pointer;
            transition: all var(--wa-transition-medium, 0.2s);
        }

        :host-context(.wa-light) .workflow-item {
            background: var(--wa-color-surface-lowered, var(--wa-color-neutral-90));
            border-color: var(--wa-color-neutral-border-subtle, var(--wa-color-neutral-80));
        }

        .workflow-item:hover {
            background: var(--wa-color-mix-hover, var(--wa-color-neutral-15));
            border-color: var(--wa-color-neutral-border-loud, var(--wa-color-neutral-30));
        }

        :host-context(.wa-light) .workflow-item:hover {
            background: var(--wa-color-mix-hover, var(--wa-color-neutral-85));
            border-color: var(--wa-color-neutral-border-loud, var(--wa-color-neutral-70));
        }

        .workflow-info {
            flex: 1;
        }

        .workflow-title {
            font-weight: 600;
            margin-bottom: var(--wa-spacing-x-small, 4px);
            color: var(--wa-color-text-normal, var(--wa-color-neutral-90));
        }

        :host-context(.wa-light) .workflow-title {
            color: var(--wa-color-text-normal, var(--wa-color-neutral-10));
        }

        .workflow-desc {
            font-size: var(--wa-font-size-small, 12px);
            color: var(--wa-color-text-subtle, var(--wa-color-neutral-70));
            margin-bottom: var(--wa-spacing-x-small, 4px);
        }

        :host-context(.wa-light) .workflow-desc {
            color: var(--wa-color-text-subtle, var(--wa-color-neutral-30));
        }

        .workflow-meta {
            font-size: var(--wa-font-size-x-small, 11px);
            color: var(--wa-color-text-quiet, var(--wa-color-neutral-60));
        }

        :host-context(.wa-light) .workflow-meta {
            color: var(--wa-color-text-quiet, var(--wa-color-neutral-40));
        }

        .active-workflow {
            display: flex;
            flex-direction: column;
            gap: var(--wa-spacing-large, 16px);
        }

        .workflow-header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: var(--wa-spacing-medium, 12px);
            margin-bottom: var(--wa-spacing-medium, 12px);
        }

        .workflow-title-section {
            flex: 1;
        }

        .workflow-header h3 {
            margin: 0 0 var(--wa-spacing-small, 8px) 0;
            font-size: var(--wa-font-size-large, 16px);
            font-weight: 600;
            color: var(--wa-color-text-normal, var(--wa-color-neutral-90));
        }

        :host-context(.wa-light) .workflow-header h3 {
            color: var(--wa-color-text-normal, var(--wa-color-neutral-10));
        }

        .workflow-description {
            margin: 0;
            font-size: var(--wa-font-size-medium, 13px);
            color: var(--wa-color-text-subtle, var(--wa-color-neutral-70));
        }

        :host-context(.wa-light) .workflow-description {
            color: var(--wa-color-text-subtle, var(--wa-color-neutral-30));
        }

        .steps-list {
            display: flex;
            flex-direction: column;
            gap: var(--wa-spacing-medium, 12px);
        }

        .step {
            padding: var(--wa-spacing-medium, 12px);
            background: var(--wa-color-surface-lowered, var(--wa-color-neutral-10));
            border: var(--wa-border-width-s, 1px) solid var(--wa-color-neutral-border-subtle, var(--wa-color-neutral-20));
            border-radius: var(--wa-border-radius-small, 6px);
            transition: all var(--wa-transition-medium, 0.2s);
        }

        :host-context(.wa-light) .step {
            background: var(--wa-color-surface-lowered, var(--wa-color-neutral-90));
            border-color: var(--wa-color-neutral-border-subtle, var(--wa-color-neutral-80));
        }

        .step[data-active="true"] {
            border-color: var(--wa-color-primary-50);
            background: var(--wa-color-primary-05);
        }

        :host-context(.wa-light) .step[data-active="true"] {
            background: var(--wa-color-primary-95);
            border-color: var(--wa-color-primary-50);
        }

        .step.completed {
            border-color: var(--wa-color-success-50);
            background: var(--wa-color-success-05);
        }

        :host-context(.wa-light) .step.completed {
            background: var(--wa-color-success-95);
            border-color: var(--wa-color-success-50);
        }

        .step.failed {
            border-color: var(--wa-color-danger-50);
            background: var(--wa-color-danger-05);
        }

        :host-context(.wa-light) .step.failed {
            background: var(--wa-color-danger-95);
            border-color: var(--wa-color-danger-50);
        }

        .step-header {
            display: flex;
            align-items: center;
            gap: var(--wa-spacing-medium, 12px);
            margin-bottom: var(--wa-spacing-small, 8px);
        }

        .step-number {
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--wa-color-surface-lowered, var(--wa-color-neutral-20));
            border-radius: 50%;
            font-size: var(--wa-font-size-small, 12px);
            font-weight: 600;
            color: var(--wa-color-text-normal, var(--wa-color-neutral-80));
        }

        :host-context(.wa-light) .step-number {
            background: var(--wa-color-surface-lowered, var(--wa-color-neutral-80));
            color: var(--wa-color-text-normal, var(--wa-color-neutral-20));
        }

        .step-title {
            flex: 1;
            font-weight: 600;
            color: var(--wa-color-text-normal, var(--wa-color-neutral-90));
        }

        :host-context(.wa-light) .step-title {
            color: var(--wa-color-text-normal, var(--wa-color-neutral-10));
        }

        .step-status {
            display: flex;
            align-items: center;
            gap: var(--wa-spacing-small, 8px);
        }

        .status-icon {
            width: 20px;
            height: 20px;
        }

        .status-icon.completed {
            color: var(--wa-color-success-50);
        }

        .status-icon.failed {
            color: var(--wa-color-danger-50);
        }

        .status-icon.skipped {
            color: var(--wa-color-neutral-50);
        }

        .status-icon.active {
            color: var(--wa-color-primary-50);
        }

        .status-icon.pending {
            color: var(--wa-color-neutral-50);
        }

        .step-description {
            font-size: var(--wa-font-size-medium, 13px);
            color: var(--wa-color-text-subtle, var(--wa-color-neutral-70));
            margin-bottom: var(--wa-spacing-small, 8px);
            line-height: 1.4;
        }

        :host-context(.wa-light) .step-description {
            color: var(--wa-color-text-subtle, var(--wa-color-neutral-30));
        }

        .condition {
            display: flex;
            align-items: center;
            gap: var(--wa-spacing-x-small, 6px);
            font-size: var(--wa-font-size-small, 12px);
            padding: var(--wa-spacing-x-small, 6px) var(--wa-spacing-small, 8px);
            border-radius: var(--wa-border-radius-x-small, 4px);
            margin-bottom: var(--wa-spacing-small, 8px);
        }

        .condition.met {
            background: var(--wa-color-success-10);
            color: var(--wa-color-success-70);
        }

        :host-context(.wa-light) .condition.met {
            background: var(--wa-color-success-90);
            color: var(--wa-color-success-30);
        }

        .condition.not-met {
            background: var(--wa-color-danger-10);
            color: var(--wa-color-danger-70);
        }

        :host-context(.wa-light) .condition.not-met {
            background: var(--wa-color-danger-90);
            color: var(--wa-color-danger-30);
        }

        .step-actions {
            display: flex;
            gap: var(--wa-spacing-small, 8px);
            margin-top: var(--wa-spacing-small, 8px);
        }

        .empty-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: var(--wa-spacing-x-large, 40px) var(--wa-spacing-large, 20px);
            text-align: center;
            color: var(--wa-color-text-subtle, var(--wa-color-neutral-70));
        }

        :host-context(.wa-light) .empty-state {
            color: var(--wa-color-text-subtle, var(--wa-color-neutral-30));
        }

        .empty-state p {
            margin: var(--wa-spacing-small, 8px) 0;
        }
    `;
}

