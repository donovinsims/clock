#!/usr/bin/env node

/**
 * CLI Entry Point for clockout-interface-audit
 * 
 * This tool analyzes the Clock website against 24 interface quality principles
 * from make-interfaces-feel-better and warm-modern design aesthetics.
 * 
 * Usage:
 *   npm run audit
 *   node dist/cli/index.js [options]
 */

import { readFile } from 'fs/promises';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import type { AuditConfig } from '../types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Default configuration for the audit tool
 */
const DEFAULT_CONFIG: AuditConfig = {
  dryRun: false,
  autoFix: false,
  verbose: false,
  outputPath: '.kiro/specs/clockout-interface-audit/audit-report.md',
  format: 'markdown'
};

/**
 * Load configuration from audit.config.json or use defaults
 */
async function loadConfig(): Promise<AuditConfig> {
  try {
    const configPath = resolve(process.cwd(), 'audit.config.json');
    const configData = await readFile(configPath, 'utf-8');
    const userConfig = JSON.parse(configData);
    
    return {
      ...DEFAULT_CONFIG,
      ...userConfig
    };
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      console.log('ℹ️  No audit.config.json found, using default configuration');
    } else {
      console.warn('⚠️  Error loading configuration, using defaults:', error);
    }
    return DEFAULT_CONFIG;
  }
}

/**
 * Parse command-line arguments
 */
function parseArguments(): Partial<AuditConfig> {
  const args = process.argv.slice(2);
  const config: Partial<AuditConfig> = {};
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    switch (arg) {
      case '--dry-run':
        config.dryRun = true;
        break;
      case '--auto-fix':
        config.autoFix = true;
        break;
      case '--verbose':
      case '-v':
        config.verbose = true;
        break;
      case '--output':
      case '-o':
        config.outputPath = args[++i];
        break;
      case '--format':
      case '-f':
        config.format = args[++i] as 'markdown' | 'json' | 'html';
        break;
      case '--help':
      case '-h':
        printHelp();
        process.exit(0);
        break;
      default:
        if (arg.startsWith('--')) {
          console.warn(`⚠️  Unknown option: ${arg}`);
        }
    }
  }
  
  return config;
}

/**
 * Print help message
 */
function printHelp(): void {
  console.log(`
clockout-interface-audit - Interface Quality Audit Tool

Usage:
  npm run audit [options]
  node dist/cli/index.js [options]

Options:
  --dry-run           Report violations without modifying files
  --auto-fix          Apply safe automatic fixes
  --verbose, -v       Enable detailed logging
  --output, -o PATH   Specify output report path
  --format, -f FORMAT Report format (markdown, json, html)
  --help, -h          Show this help message

Examples:
  npm run audit --dry-run
  npm run audit --auto-fix --verbose
  npm run audit --output custom-report.md

Configuration:
  Create audit.config.json in the project root to configure:
  - routeFilter: Filter specific routes
  - componentFilter: Filter specific components
  - principleFilter: Filter specific principles
  - previousReportPath: Enable diff generation

For more information, see README.md
`);
}

/**
 * Main execution function
 */
async function main(): Promise<void> {
  console.log('🔍 clockout-interface-audit\n');
  
  try {
    // Load configuration
    const fileConfig = await loadConfig();
    const cliConfig = parseArguments();
    const config: AuditConfig = { ...fileConfig, ...cliConfig };
    
    if (config.verbose) {
      console.log('📋 Configuration:', JSON.stringify(config, null, 2));
    }
    
    // TODO: Implement the full audit pipeline
    // Phase 1: Discovery
    // Phase 2: Parsing
    // Phase 3: Analysis
    // Phase 4: Reporting
    // Phase 5: Re-audit (if applicable)
    
    console.log('⚠️  Audit implementation in progress...');
    console.log('✅ Core infrastructure set up successfully!');
    console.log(`📁 Project structure created in: ${resolve(__dirname, '..')}`);
    
  } catch (error) {
    console.error('❌ Audit failed:', error);
    process.exit(1);
  }
}

// Run the CLI
main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
