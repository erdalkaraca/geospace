import type { ChatHistory, ChatMessage } from "../core/types";

export interface Session {
    id: string;
    history: ChatMessage[];
    title: string;
}

export class SessionManager {
    private sessions = new Map<string, ChatHistory>();
    private sessionTitles = new Map<string, string>();
    private activeSessionId: string = '';

    createSession(): string {
        const sessionId = `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        this.sessions.set(sessionId, { history: [] });
        this.sessionTitles.set(sessionId, 'New Chat');
        this.activeSessionId = sessionId;
        return sessionId;
    }

    deleteSession(sessionId: string): boolean {
        if (this.sessions.size <= 1) {
            return false;
        }
        
        this.sessions.delete(sessionId);
        this.sessionTitles.delete(sessionId);
        
        if (this.activeSessionId === sessionId) {
            const firstSession = Array.from(this.sessions.keys())[0];
            this.activeSessionId = firstSession || '';
        }
        
        return true;
    }

    getSession(sessionId: string): ChatHistory | undefined {
        return this.sessions.get(sessionId);
    }

    setSession(sessionId: string, history: ChatHistory): void {
        this.sessions.set(sessionId, history);
    }

    getActiveSession(): ChatHistory | undefined {
        if (!this.activeSessionId) {
            return undefined;
        }
        return this.sessions.get(this.activeSessionId);
    }

    setActiveSession(sessionId: string): void {
        if (this.sessions.has(sessionId)) {
            this.activeSessionId = sessionId;
        }
    }

    getActiveSessionId(): string {
        return this.activeSessionId;
    }

    getAllSessionIds(): string[] {
        return Array.from(this.sessions.keys());
    }

    getAllSessions(): Session[] {
        return Array.from(this.sessions.entries()).map(([id, history]) => ({
            id,
            history,
            title: this.sessionTitles.get(id) || 'New Chat'
        }));
    }

    getSessionTitle(sessionId: string): string {
        return this.sessionTitles.get(sessionId) || 'New Chat';
    }

    setSessionTitle(sessionId: string, title: string): void {
        this.sessionTitles.set(sessionId, title);
    }

    generateTitle(prompt: string): string {
        const trimmed = prompt.trim();
        if (!trimmed) return 'New Chat';
        
        const maxLength = 30;
        if (trimmed.length <= maxLength) {
            return trimmed;
        }
        
        return trimmed.substring(0, maxLength).trim() + '...';
    }

    addMessage(sessionId: string, message: ChatMessage): void {
        const session = this.sessions.get(sessionId);
        if (session) {
            session.history.push(message);
        }
    }

    getSessionCount(): number {
        return this.sessions.size;
    }
}

