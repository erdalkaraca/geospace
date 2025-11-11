import { workspaceService, Directory } from '../../../core/filesys';
import { createLogger } from '../../../core/logger';

const logger = createLogger('WorkspaceUtils');

export interface WorkspacePathResult {
    workspace: Directory;
    workspacePath: string;
}

export async function getWorkspacePath(
    providedPath?: string
): Promise<WorkspacePathResult | null> {
    const workspace = await workspaceService.getWorkspace();
    
    if (!workspace) {
        logger.warn('No workspace connected');
        return null;
    }

    const workspacePath = providedPath || workspace.getName();
    
    if (!workspacePath) {
        logger.warn('No workspace path available');
        return null;
    }

    return { workspace, workspacePath };
}

export async function requireWorkspacePath(
    providedPath?: string
): Promise<WorkspacePathResult> {
    const result = await getWorkspacePath(providedPath);
    if (!result) {
        throw new Error('Workspace not available');
    }
    return result;
}

