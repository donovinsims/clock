# clockout-interface-audit

A static analysis tool that evaluates the Clock website against 24 interface quality principles from **make-interfaces-feel-better** and **warm-modern** design aesthetics.

## Overview

This tool analyzes React/TypeScript/TSX files, evaluates Tailwind CSS classes, and generates actionable markdown reports with before/after recommendations across five key areas:

- **Typography**: Text wrapping, font smoothing, tabular numbers
- **Surfaces**: Concentric radius, optical alignment, shadows, image outlines, hit areas
- **Animations**: Interruptible animations, enter/exit patterns, contextual icons, scale-on-press
- **Performance**: Transition specificity, will-change usage
- **Design Style**: Warm-modern colors, contrast, typography hierarchy

## Project Structure

```
audit-tool/
├── src/
│   ├── cli/              # CLI entry point and argument parsing
│   ├── discovery/        # Route and component discovery
│   ├── parser/           # AST parsing and JSX extraction
│   ├── analyzer/         # 24 principle analyzers
│   ├── reporter/         # Markdown report generation
│   ├── fixer/            # Auto-fix implementation
│   ├── audit/            # Re-audit and diff generation
│   └── types.ts          # Core TypeScript interfaces
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

```bash
cd audit-tool
npm install
```

## Usage

### Build the Project

```bash
npm run build
```

### Run the Audit

```bash
# Basic audit with default settings
npm run audit

# Dry-run mode (report only, no file changes)
npm run audit -- --dry-run

# Auto-fix safe violations
npm run audit -- --auto-fix

# Verbose logging
npm run audit -- --verbose

# Custom output path
npm run audit -- --output custom-report.md

# Combine options
npm run audit -- --auto-fix --verbose
```

### Development Mode

```bash
# Watch mode for development
npm run dev
```

## Configuration

Create `audit.config.json` in the project root to customize the audit:

```json
{
  "routeFilter": ["/", "/about", "/services/*"],
  "componentFilter": ["Button", "Card"],
  "principleFilter": [
    "text-wrap-balance",
    "concentric-radius",
    "tabular-numbers"
  ],
  "dryRun": false,
  "autoFix": true,
  "verbose": true,
  "outputPath": ".kiro/specs/clockout-interface-audit/audit-report.md",
  "format": "markdown"
}
```

### Configuration Options

| Option | Type | Description |
|--------|------|-------------|
| `routeFilter` | `string[]` | Filter specific routes (supports wildcards) |
| `componentFilter` | `string[]` | Filter specific components |
| `principleFilter` | `string[]` | Filter specific principles to audit |
| `dryRun` | `boolean` | Report violations without modifying files |
| `autoFix` | `boolean` | Apply safe automatic fixes |
| `verbose` | `boolean` | Enable detailed logging |
| `previousReportPath` | `string` | Path to previous report for diff generation |
| `outputPath` | `string` | Where to write the audit report |
| `format` | `string` | Report format: `markdown`, `json`, or `html` |

## Principles Audited

### Typography (4 principles)
- `text-wrap-balance` - Headings should have balanced line breaks
- `text-wrap-pretty` - Paragraphs should avoid orphaned words
- `font-smoothing` - Text should render crisp on macOS
- `tabular-numbers` - Dynamic numbers should maintain consistent width

### Surfaces (5 principles)
- `concentric-radius` - Nested rounded elements should use mathematically correct radii
- `optical-alignment` - Buttons with icons should be visually balanced
- `shadows-not-borders` - Cards/buttons should use layered shadows instead of borders
- `image-outlines` - Images should have consistent depth with pure black/white outlines
- `minimum-hit-area` - Interactive elements should have sufficient hit area (40×40px)

### Animations (6 principles)
- `interruptible-animations` - Animations should respond immediately to user actions
- `enter-animations` - Content should appear smoothly in staggered stages
- `exit-animations` - Dismissing content should fade away subtly
- `contextual-icon-animations` - Icons should transition smoothly with opacity, scale, blur
- `scale-on-press` - Buttons should have tactile feedback (scale: 0.96)
- `skip-animation-page-load` - Default-state elements should not animate on initial render

### Performance (2 principles)
- `transition-specificity` - Transitions should specify exact properties (never "all")
- `will-change-usage` - GPU hints should apply only to compositable properties

### Design Style (3 principles)
- `warm-modern-colors` - Color palette should use oklch format with warm tones
- `warm-modern-contrast` - Text should have sufficient contrast (WCAG AA)
- `warm-modern-typography` - Typography should use sans-serif body and serif display

## Auto-Fixable Violations

The following violations can be automatically fixed with `--auto-fix`:

- Adding `text-balance` to headings
- Adding `text-pretty` to paragraphs
- Adding `tabular-nums` to dynamic numbers
- Adding font-smoothing to root styles
- Fixing image outlines
- Adjusting concentric border radii
- Replacing `transition` class with specific properties
- Adding `scale-on-press` to buttons

## Output Report

The audit generates a markdown report with:

- **Summary**: Total violations by category and severity
- **Violations by Principle**: Tables with Before/After code snippets
- **Prioritized Fix List**: High/medium/low impact violations
- **Code Examples**: Correct patterns for each principle

Example report structure:

```markdown
# Interface Audit Report

## Summary
- **Total Violations**: 42
- **High Priority**: 8
- **Medium Priority**: 24
- **Low Priority**: 10

## Violations by Principle

### Typography: Text Wrapping
| Before | After |
| --- | --- |
| `<h1 className="...">` | `<h1 className="text-balance ...">` |
| File: src/routes/about.tsx:15 | Add `text-balance` class |
```

## Development

### Type Definitions

All core types are defined in `src/types.ts`, including:

- `RouteInventory`, `ComponentInventory` - Discovery results
- `ParsedFile`, `JSXElement` - AST parsing structures
- `Violation`, `ViolationReport` - Analysis results
- `AuditConfig` - Configuration schema

### Adding New Analyzers

To add a new principle analyzer:

1. Define the principle name in `PrincipleName` type in `src/types.ts`
2. Create analyzer function in `src/analyzer/<category>/<principle-name>.ts`
3. Implement the `PrincipleAnalyzer` interface
4. Register the analyzer in `ViolationDetector`

### Testing

```bash
npm test
```

Property-based tests validate:
- Parse-serialize round trip integrity
- Code location resolution accuracy
- Tailwind class transformation validity
- Violation count consistency

## Architecture

The system follows a 5-phase pipeline:

1. **Discovery**: Scan routes and components
2. **Parsing**: Extract JSX, imports, CSS using TypeScript Compiler API
3. **Analysis**: Run 24 principle analyzers
4. **Reporting**: Generate markdown with before/after tables
5. **Re-Audit**: Track fixes and detect regressions

## Requirements

- Node.js >= 20
- TypeScript >= 5.3.3
- The Clock website codebase at `/Users/forex/clock`

## License

MIT
