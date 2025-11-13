import type { ChatHistory, ChatMessage } from "../core/types";

export interface Session {
    id: string;
    history: ChatMessage[];
    title: string;
}

export interface PersistedSession {
    id: string;
    history: ChatMessage[];
    title: string;
    createdAt: number;
    updatedAt: number;
}

export class SessionManager {
    private sessions = new Map<string, ChatHistory>();
    private sessionTitles = new Map<string, string>();
    private sessionTimestamps = new Map<string, { createdAt: number; updatedAt: number }>();
    private activeSessionId: string = '';
    private archivedSessions = new Map<string, PersistedSession>();
    private saveCallback?: () => Promise<void>;

    setSaveCallback(callback: () => Promise<void>): void {
        this.saveCallback = callback;
    }

    private async save(): Promise<void> {
        if (this.saveCallback) {
            await this.saveCallback();
        }
    }

    async loadSessions(): Promise<void> {
        const { appSettings } = await import("../../../core/settingsservice");
        const saved = await appSettings.get('aiChatSessions');
        
        if (saved && Array.isArray(saved.active)) {
            for (const session of saved.active) {
                if (session.id && session.history && Array.isArray(session.history)) {
                    this.sessions.set(session.id, { history: session.history });
                    this.sessionTitles.set(session.id, session.title || 'New Chat');
                    this.sessionTimestamps.set(session.id, {
                        createdAt: session.createdAt || Date.now(),
                        updatedAt: session.updatedAt || Date.now()
                    });
                }
            }
            if (saved.active.length > 0 && saved.activeSessionId) {
                if (this.sessions.has(saved.activeSessionId)) {
                    this.activeSessionId = saved.activeSessionId;
                } else {
                    this.activeSessionId = saved.active[0].id;
                }
            }
        }

        if (saved && Array.isArray(saved.archived)) {
            for (const session of saved.archived) {
                if (session.id && session.history && Array.isArray(session.history)) {
                    this.archivedSessions.set(session.id, {
                        id: session.id,
                        history: session.history,
                        title: session.title || 'New Chat',
                        createdAt: session.createdAt || Date.now(),
                        updatedAt: session.updatedAt || Date.now()
                    });
                }
            }
        }
    }

    async persistSessions(): Promise<void> {
        const active: PersistedSession[] = Array.from(this.sessions.entries()).map(([id, history]) => {
            const timestamps = this.sessionTimestamps.get(id) || { createdAt: Date.now(), updatedAt: Date.now() };
            return {
                id,
                history: history.history,
                title: this.sessionTitles.get(id) || 'New Chat',
                createdAt: timestamps.createdAt,
                updatedAt: timestamps.updatedAt
            };
        });

        const archived = Array.from(this.archivedSessions.values());

        const { appSettings } = await import("../../../core/settingsservice");
        await appSettings.set('aiChatSessions', {
            active,
            archived,
            activeSessionId: this.activeSessionId
        });
    }

    createSession(): string {
        const sessionId = `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        this.sessions.set(sessionId, { history: [] });
        this.sessionTitles.set(sessionId, 'New Chat');
        this.sessionTimestamps.set(sessionId, { createdAt: Date.now(), updatedAt: Date.now() });
        this.activeSessionId = sessionId;
        this.save();
        return sessionId;
    }

    async deleteSession(sessionId: string): Promise<boolean> {
        if (this.sessions.size <= 1) {
            return false;
        }
        
        const session = this.sessions.get(sessionId);
        const title = this.sessionTitles.get(sessionId);
        const timestamps = this.sessionTimestamps.get(sessionId);
        
        if (session && title) {
            this.archivedSessions.set(sessionId, {
                id: sessionId,
                history: session.history,
                title,
                createdAt: timestamps?.createdAt || Date.now(),
                updatedAt: Date.now()
            });
        }
        
        this.sessions.delete(sessionId);
        this.sessionTitles.delete(sessionId);
        this.sessionTimestamps.delete(sessionId);
        
        if (this.activeSessionId === sessionId) {
            const firstSession = Array.from(this.sessions.keys())[0];
            this.activeSessionId = firstSession || '';
        }
        
        await this.save();
        return true;
    }

    async restoreSession(sessionId: string): Promise<boolean> {
        const archived = this.archivedSessions.get(sessionId);
        if (!archived) {
            return false;
        }

        this.sessions.set(sessionId, { history: archived.history });
        this.sessionTitles.set(sessionId, archived.title);
        this.sessionTimestamps.set(sessionId, {
            createdAt: archived.createdAt,
            updatedAt: Date.now()
        });
        this.archivedSessions.delete(sessionId);
        this.activeSessionId = sessionId;
        await this.save();
        return true;
    }

    async permanentlyDeleteSession(sessionId: string): Promise<boolean> {
        if (this.sessions.has(sessionId)) {
            return false;
        }
        
        this.archivedSessions.delete(sessionId);
        await this.save();
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
            history: history.history,
            title: this.sessionTitles.get(id) || 'New Chat'
        }));
    }

    getSessionTitle(sessionId: string): string {
        return this.sessionTitles.get(sessionId) || this.archivedSessions.get(sessionId)?.title || 'New Chat';
    }

    setSessionTitle(sessionId: string, title: string): void {
        if (this.sessions.has(sessionId)) {
            this.sessionTitles.set(sessionId, title);
            const timestamps = this.sessionTimestamps.get(sessionId);
            if (timestamps) {
                timestamps.updatedAt = Date.now();
            }
            this.save();
        }
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
            const timestamps = this.sessionTimestamps.get(sessionId);
            if (timestamps) {
                timestamps.updatedAt = Date.now();
            }
            this.save();
        }
    }

    getSessionCount(): number {
        return this.sessions.size;
    }

    getArchivedSessions(): PersistedSession[] {
        return Array.from(this.archivedSessions.values())
            .sort((a, b) => b.updatedAt - a.updatedAt);
    }

    getArchivedSessionCount(): number {
        return this.archivedSessions.size;
    }
}

