import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, extname, relative } from 'path';

function fixImportsInFile(filePath) {
    const content = readFileSync(filePath, 'utf-8');
    let fixed = content;
    
    // Pattern 1: from "./file.ts" or from '../file.ts' or from 'path/to/file.ts'
    // Don't match if it has query params like ?raw
    fixed = fixed.replace(/from\s+['"]([^'"?]+)\.ts['"]/g, (match, path) => {
        // Don't change external imports (node_modules, http, etc.)
        if (path.startsWith('http://') || path.startsWith('https://') || path.includes('node_modules')) {
            return match;
        }
        return `from '${path}'`;
    });
    
    // Pattern 2: import "./file.ts" or import '../file.ts'
    // Don't match if it has query params like ?raw
    fixed = fixed.replace(/import\s+['"]([^'"?]+)\.ts['"]/g, (match, path) => {
        // Don't change external imports
        if (path.startsWith('http://') || path.startsWith('https://') || path.includes('node_modules')) {
            return match;
        }
        return `import '${path}'`;
    });
    
    // Pattern 3: import("./file.ts") - dynamic imports
    fixed = fixed.replace(/import\(['"]([^'"?]+)\.ts['"]\)/g, (match, path) => {
        // Don't change external imports
        if (path.startsWith('http://') || path.startsWith('https://') || path.includes('node_modules')) {
            return match;
        }
        return `import('${path}')`;
    });
    
    if (fixed !== content) {
        writeFileSync(filePath, fixed, 'utf-8');
        return true;
    }
    return false;
}

function fixImportsInDirectory(dirPath) {
    const entries = readdirSync(dirPath, { withFileTypes: true });
    let fixedCount = 0;
    
    for (const entry of entries) {
        const fullPath = join(dirPath, entry.name);
        
        if (entry.isDirectory()) {
            if (!entry.name.startsWith('.') && entry.name !== 'node_modules' && entry.name !== 'dist') {
                fixedCount += fixImportsInDirectory(fullPath);
            }
        } else if (entry.isFile() && extname(entry.name) === '.ts') {
            if (fixImportsInFile(fullPath)) {
                fixedCount++;
                const relPath = relative(process.cwd(), fullPath);
                console.log(`Fixed: ${relPath}`);
            }
        }
    }
    
    return fixedCount;
}

const srcDir = join(process.cwd(), 'src');
console.log('Fixing .ts extensions in imports...\n');
const fixed = fixImportsInDirectory(srcDir);
console.log(`\n✅ Fixed ${fixed} files`);

