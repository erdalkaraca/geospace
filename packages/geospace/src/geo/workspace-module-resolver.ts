import { File, workspaceService } from "@kispace/appspace/api";

function isAbsoluteResource(url: string): boolean {
    return url.startsWith("blob:") || url.startsWith("http:") || url.startsWith("https:");
}

interface ImportMatch {
    fullMatch: string;
    importPath: string;
    isDynamic: boolean;
    startIndex: number;
    endIndex: number;
}

function resolveWorkspacePath(relativePath: string, basePath: string): string {
    if (relativePath.startsWith('/')) {
        return relativePath.slice(1);
    }

    const baseParts = basePath.split('/').filter(p => p);
    const pathParts = relativePath.split('/').filter(p => p);

    const isRelative = relativePath.startsWith('./') || relativePath.startsWith('../');
    
    if (isRelative || !relativePath.startsWith('/')) {
        const baseDirParts = baseParts.slice(0, -1);
        baseParts.length = 0;
        baseParts.push(...baseDirParts);
    }

    for (const part of pathParts) {
        if (part === '.') {
            continue;
        } else if (part === '..') {
            if (baseParts.length > 0) {
                baseParts.pop();
            }
        } else {
            baseParts.push(part);
        }
    }

    return baseParts.join('/');
}

function findImportStatements(code: string): ImportMatch[] {
    const matches: ImportMatch[] = [];

    const staticImportRegex = /import\s+(?:[\w*{}\s,]+\s+from\s+)?["']([^"']+)["']/g;
    const dynamicImportRegex = /import\s*\(\s*["']([^"']+)["']\s*\)/g;

    let match;
    while ((match = staticImportRegex.exec(code)) !== null) {
        matches.push({
            fullMatch: match[0],
            importPath: match[1],
            isDynamic: false,
            startIndex: match.index,
            endIndex: match.index + match[0].length
        });
    }

    while ((match = dynamicImportRegex.exec(code)) !== null) {
        matches.push({
            fullMatch: match[0],
            importPath: match[1],
            isDynamic: true,
            startIndex: match.index,
            endIndex: match.index + match[0].length
        });
    }

    return matches.sort((a, b) => b.startIndex - a.startIndex);
}

export interface ResolvedModule {
    code: string;
    workspacePath: string;
    blobUrl: string;
}

export class WorkspaceModuleResolver {
    private blobUrlCache = new Map<string, string>();
    private moduleCache = new Map<string, ResolvedModule>();
    private resolvingModules = new Set<string>();

    private async resolveModuleRecursive(resolvedPath: string): Promise<string> {
        const workspace = await workspaceService.getWorkspace();
        if (!workspace) {
            throw new Error('Workspace not available');
        }

        if (this.blobUrlCache.has(resolvedPath)) {
            return this.blobUrlCache.get(resolvedPath)!;
        }

        if (this.resolvingModules.has(resolvedPath)) {
            throw new Error(`Circular dependency detected: ${resolvedPath}`);
        }

        this.resolvingModules.add(resolvedPath);

        try {
            const resource = await workspace.getResource(resolvedPath) as File;
            if (!resource) {
                throw new Error(`Module not found: ${resolvedPath}`);
            }

            let code = await resource.getContents() as string;
            const importMatches = findImportStatements(code);

            for (const match of importMatches) {
                const importPath = match.importPath;

                if (isAbsoluteResource(importPath)) {
                    continue;
                }

                const resolvedImportPath = resolveWorkspacePath(importPath, resolvedPath);
                const importBlobUrl = await this.resolveModuleRecursive(resolvedImportPath);

                const newImport = match.isDynamic
                    ? `import("${importBlobUrl}")`
                    : match.fullMatch.replace(importPath, importBlobUrl);

                code = code.slice(0, match.startIndex) + newImport + code.slice(match.endIndex);
            }

            const blob = new Blob([code], { type: 'application/javascript' });
            const blobUrl = URL.createObjectURL(blob);

            this.blobUrlCache.set(resolvedPath, blobUrl);
            this.moduleCache.set(resolvedPath, {
                code,
                workspacePath: resolvedPath,
                blobUrl
            });

            return blobUrl;
        } finally {
            this.resolvingModules.delete(resolvedPath);
        }
    }

    async resolveWorkspaceModule(
        workspacePath: string,
        basePath?: string
    ): Promise<ResolvedModule> {
        const resolvedPath = basePath
            ? resolveWorkspacePath(workspacePath, basePath)
            : workspacePath;

        if (this.moduleCache.has(resolvedPath)) {
            return this.moduleCache.get(resolvedPath)!;
        }

        await this.resolveModuleRecursive(resolvedPath);
        const module = this.moduleCache.get(resolvedPath);
        
        if (!module) {
            throw new Error(`Failed to resolve module: ${resolvedPath}`);
        }

        return module;
    }

    clear(): void {
        for (const blobUrl of this.blobUrlCache.values()) {
            if (blobUrl.startsWith('blob:')) {
                URL.revokeObjectURL(blobUrl);
            }
        }
        this.blobUrlCache.clear();
        this.moduleCache.clear();
        this.resolvingModules.clear();
    }
}
