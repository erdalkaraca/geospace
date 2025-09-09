#!/usr/bin/env node

/**
 * Generate test statistics for the project
 * This script can be run to get current test counts and coverage information
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getTestStats() {
  try {
    console.log('🧪 Geospace Test Statistics\n');
    
    // Get test file count
    const testDir = path.join(__dirname, '../src/tests');
    const testFiles = fs.readdirSync(testDir)
      .filter(file => file.endsWith('.test.ts'))
      .length;
    
    console.log(`📁 Test Files: ${testFiles}`);
    
    // Run tests to get current status
    console.log('\n📊 Running tests...\n');
    
    try {
      const output = execSync('npm run test:run', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Parse test results from output
      const lines = output.split('\n');
      
      // Find the final test summary line
      const summaryLine = lines.find(line => 
        line.includes('Test Files') && 
        (line.includes('passed') || line.includes('failed'))
      );
      
      if (summaryLine) {
        console.log('✅ Test Results:');
        console.log(`   ${summaryLine.trim()}`);
      }
      
      // Count passing and failing tests
      const passedTests = lines.filter(line => line.includes('✓')).length;
      const failedTests = lines.filter(line => line.includes('×')).length;
      
      if (passedTests > 0 || failedTests > 0) {
        console.log(`\n📊 Test Summary:`);
        console.log(`   ✅ Passing: ${passedTests}`);
        console.log(`   ❌ Failing: ${failedTests}`);
        console.log(`   📈 Success Rate: ${Math.round((passedTests / (passedTests + failedTests)) * 100)}%`);
      }
      
    } catch (error) {
      // The command failed, but we can still parse the output
      const output = error.stdout || '';
      const lines = output.split('\n');
      
      const summaryLine = lines.find(line => 
        line.includes('Test Files') && 
        (line.includes('passed') || line.includes('failed'))
      );
      
      if (summaryLine) {
        console.log('⚠️  Test Results (with failures):');
        console.log(`   ${summaryLine.trim()}`);
      }
      
      const passedTests = lines.filter(line => line.includes('✓')).length;
      const failedTests = lines.filter(line => line.includes('×')).length;
      
      if (passedTests > 0 || failedTests > 0) {
        console.log(`\n📊 Test Summary:`);
        console.log(`   ✅ Passing: ${passedTests}`);
        console.log(`   ❌ Failing: ${failedTests}`);
        console.log(`   📈 Success Rate: ${Math.round((passedTests / (passedTests + failedTests)) * 100)}%`);
      }
    }
    
    console.log('\n💡 To get detailed coverage report, run: npm run test:coverage');
    console.log('💡 To run tests interactively, run: npm run test:ui');
    
  } catch (error) {
    console.error('Error generating test stats:', error.message);
  }
}

// Run the function if this script is executed directly
getTestStats();

export { getTestStats };
