import type { ChatMessage } from "../core/types";

export interface StreamingMessage {
    message: ChatMessage;
    isStreaming: boolean;
    timestamp: Date;
    sessionId?: string;
}

export class StreamManager {
    private streamingMessages = new Map<number, StreamingMessage>();
    private currentStreamingIndex: number = -1;
    private updateAnimationFrame?: number;
    private pendingUpdate = false;
    private onUpdate?: () => void;

    constructor(onUpdate?: () => void) {
        this.onUpdate = onUpdate;
    }

    createStreamingMessage(role: string, sessionId?: string): number {
        const index = ++this.currentStreamingIndex;
        this.streamingMessages.set(index, {
            message: {
                role,
                content: ''
            },
            isStreaming: true,
            timestamp: new Date(),
            sessionId
        });
        return index;
    }

    getStreamingMessage(index: number): StreamingMessage | undefined {
        return this.streamingMessages.get(index);
    }

    updateStreamingMessage(index: number, token: string): void {
        const msg = this.streamingMessages.get(index);
        if (msg) {
            msg.message.content += token;
            this.scheduleUpdate();
        }
    }

    completeStreamingMessage(index: number, message: ChatMessage): void {
        const msg = this.streamingMessages.get(index);
        if (msg) {
            msg.message = message;
            msg.isStreaming = false;
        }
    }

    removeStreamingMessage(index: number): void {
        this.streamingMessages.delete(index);
    }

    getAllStreamingMessages(): StreamingMessage[] {
        return Array.from(this.streamingMessages.values());
    }

    getAllStreamingMessagesByRole(role: string): StreamingMessage[] {
        return Array.from(this.streamingMessages.values())
            .filter(msg => msg.message.role === role);
    }

    findStreamingMessage(role: string): ChatMessage | undefined {
        const msg = Array.from(this.streamingMessages.values())
            .find(m => m.message.role === role);
        return msg?.message;
    }

    scheduleUpdate(): void {
        if (!this.pendingUpdate) {
            this.pendingUpdate = true;
            this.updateAnimationFrame = requestAnimationFrame(() => {
                this.pendingUpdate = false;
                this.onUpdate?.();
            });
        }
    }

    cancelUpdates(): void {
        if (this.updateAnimationFrame) {
            cancelAnimationFrame(this.updateAnimationFrame);
            this.updateAnimationFrame = undefined;
            this.pendingUpdate = false;
        }
    }

    clearAll(): void {
        for (const [index, msg] of this.streamingMessages.entries()) {
            if (msg.isStreaming) {
                msg.isStreaming = false;
            }
        }
        this.streamingMessages.clear();
        this.cancelUpdates();
    }

    clearForSession(sessionId: string): void {
        const toRemove: number[] = [];
        for (const [index, msg] of this.streamingMessages.entries()) {
            if (msg.sessionId === sessionId) {
                if (msg.isStreaming) {
                    msg.isStreaming = false;
                }
                toRemove.push(index);
            }
        }
        toRemove.forEach(index => this.streamingMessages.delete(index));
        if (toRemove.length > 0) {
            this.scheduleUpdate();
        }
    }

    reset(): void {
        this.clearAll();
        this.currentStreamingIndex = -1;
    }
}

