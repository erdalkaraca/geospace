#!/usr/bin/env node

import { fileURLToPath } from 'url'
import { dirname as pathDirname, resolve, basename, isAbsolute } from 'path'
import { readFileSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = pathDirname(__filename)

// Parse command line arguments
const args = process.argv.slice(2)

if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    console.log(`
Usage: map-builder <map-file> [options]

Build a .geospace project into a deployable PWA.

Arguments:
  <map-file>              Path to the .geospace map file (required)

Options:
  --title <title>         Title for the application (default: map file name)
  --version <version>     Version number (default: 1.0.0)
  --output-dir <dir>      Output directory (default: dist)
  --env-file <file>       Path to .env file (optional)
  --no-clean              Don't clean build directory after build
  --help, -h              Show this help message

Examples:
  map-builder my-map.geospace
  map-builder my-map.geospace --title "My App" --version "1.2.3"
  map-builder my-map.geospace --output-dir build --env-file .env.production
`)
    process.exit(0)
}

// Parse arguments
const mapFile = args[0]
if (!mapFile) {
    console.error('Error: map-file is required')
    process.exit(1)
}

const options = {}
let currentOption = null

for (let i = 1; i < args.length; i++) {
    const arg = args[i]
    
    if (arg === '--title') {
        currentOption = 'title'
    } else if (arg === '--version') {
        currentOption = 'version'
    } else if (arg === '--output-dir') {
        currentOption = 'outputDir'
    } else if (arg === '--env-file') {
        currentOption = 'envFile'
    } else if (arg === '--no-clean') {
        options.cleanAfterBuild = false
        currentOption = null
    } else if (currentOption) {
        options[currentOption] = arg
        currentOption = null
    } else {
        console.error(`Error: Unknown option: ${arg}`)
        process.exit(1)
    }
}

// Resolve the map file path (can be absolute or relative to cwd)
const resolvedMapFile = resolve(process.cwd(), mapFile)

// Use the directory of the .geospace file as the project root
const projectRoot = pathDirname(resolvedMapFile)
const mapFileName = basename(resolvedMapFile)

// Load environment variables if env file is provided
let env = {}
if (options.envFile) {
    try {
        // If env file path is already absolute, use it as-is
        // Otherwise, resolve it relative to projectRoot (the .geospace file's directory)
        const envPath = isAbsolute(options.envFile) 
            ? options.envFile 
            : resolve(projectRoot, options.envFile)
        const envContent = readFileSync(envPath, 'utf-8')
        envContent.split('\n').forEach(line => {
            const trimmed = line.trim()
            if (trimmed && !trimmed.startsWith('#')) {
                const [key, ...valueParts] = trimmed.split('=')
                if (key) {
                    env[key.trim()] = valueParts.join('=').trim()
                }
            }
        })
    } catch (error) {
        console.warn(`Warning: Could not load env file: ${error.message}`)
    }
}

// Progress callback
const progress = (step, message, totalSteps) => {
    if (totalSteps) {
        console.log(`[${step}/${totalSteps}] ${message}`)
    } else {
        console.log(`[${step}] ${message}`)
    }
}

// Main async function
(async () => {
    try {
        // Import buildProject from lib (outside src so Vite doesn't analyze it)
        const { buildProject } = await import('../lib/node-map-builder.ts')

        // Always use the CLI's own package location (parent of bin directory)
        const gsLibPath = resolve(__dirname, '..')

        // Build the project
        // mapFile should be relative to projectRoot (just the filename)
        await buildProject(projectRoot, mapFileName, {
            title: options.title,
            version: options.version || '1.0.0',
            env: env || {},
            gsLibPackagePath: gsLibPath,
            outputDir: options.outputDir || 'dist',
            cleanAfterBuild: options.cleanAfterBuild !== undefined ? options.cleanAfterBuild : true
        }, progress)

        console.log('\n✅ Build completed successfully!')
        process.exit(0)
    } catch (error) {
        console.error('\n❌ Build failed:', error.message)
        if (process.env.DEBUG) {
            console.error(error.stack)
        }
        process.exit(1)
    }
})()
