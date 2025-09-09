#!/usr/bin/env node

/**
 * Validate CI/CD setup locally
 * This script runs the same checks that the CI pipeline will run
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function runCommand(command, description) {
  console.log(`\n🔍 ${description}...`);
  try {
    const output = execSync(command, { 
      encoding: 'utf8',
      stdio: 'pipe'
    });
    console.log(`✅ ${description} - PASSED`);
    return { success: true, output };
  } catch (error) {
    console.log(`❌ ${description} - FAILED`);
    console.log(`Error: ${error.message}`);
    return { success: false, error: error.message };
  }
}

function validateCISetup() {
  console.log('🚀 Validating CI/CD Setup for Geospace\n');
  
  const checks = [
    {
      command: 'npm run build-gslib',
      description: 'Runtime library build'
    },
    {
      command: 'npm run build',
      description: 'Application build'
    }
  ];
  
  // Optional checks that don't fail the CI
  const optionalChecks = [
    {
      command: 'npm run type-check',
      description: 'TypeScript type checking'
    },
    {
      command: 'npm run test:run',
      description: 'Unit tests (core functionality)'
    }
  ];
  
  let passed = 0;
  let failed = 0;
  
  // Run required checks
  for (const check of checks) {
    const result = runCommand(check.command, check.description);
    if (result.success) {
      passed++;
    } else {
      failed++;
    }
  }
  
  // Run optional checks
  let optionalPassed = 0;
  let optionalFailed = 0;
  
  console.log('\n🔍 Running optional checks...');
  for (const check of optionalChecks) {
    const result = runCommand(check.command, check.description);
    if (result.success) {
      optionalPassed++;
    } else {
      optionalFailed++;
    }
  }
  
  console.log('\n📊 Validation Summary:');
  console.log(`✅ Required checks passed: ${passed}`);
  console.log(`❌ Required checks failed: ${failed}`);
  console.log(`✅ Optional checks passed: ${optionalPassed}`);
  console.log(`⚠️  Optional checks failed: ${optionalFailed}`);
  
  if (failed === 0) {
    console.log('\n🎉 All required CI checks passed! Your code is ready for the pipeline.');
    if (optionalFailed > 0) {
      console.log('⚠️  Some optional checks failed, but this won\'t block the CI pipeline.');
    }
  } else {
    console.log('\n❌ Required CI checks failed. Please fix the issues before pushing.');
    process.exit(1);
  }
}

// Check if required files exist
function checkRequiredFiles() {
  console.log('📁 Checking required files...');
  
  const requiredFiles = [
    '.github/workflows/ci.yml',
    '.github/workflows/build-and-deploy.yml',
    '.github/workflows/pr-validation.yml',
    'vitest.config.ts',
    'src/tests/setup.ts'
  ];
  
  let allFilesExist = true;
  
  for (const file of requiredFiles) {
    const filePath = path.join(__dirname, '..', file);
    if (fs.existsSync(filePath)) {
      console.log(`✅ ${file}`);
    } else {
      console.log(`❌ ${file} - MISSING`);
      allFilesExist = false;
    }
  }
  
  if (!allFilesExist) {
    console.log('\n⚠️  Some required files are missing. Please ensure all CI files are in place.');
    process.exit(1);
  }
  
  console.log('✅ All required files present');
}

// Run validation
try {
  checkRequiredFiles();
  validateCISetup();
} catch (error) {
  console.error('❌ Validation failed:', error.message);
  process.exit(1);
}
