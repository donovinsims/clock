/**
 * Core TypeScript interfaces for clockout-interface-audit
 * Defines data structures for parsing, analysis, and reporting
 */

import type * as ts from 'typescript';

// ============================================================================
// Code Location and Position
// ============================================================================

export interface CodeLocation {
  filePath: string;
  line: number;
  column: number;
  endLine: number;
  endColumn: number;
}

// ============================================================================
// File Discovery Types
// ============================================================================

export type RouteCategory = 'public' | 'services' | 'legal' | 'blog';
export type ComponentType = 'site' | 'radix-ui' | 'utility';

export interface RouteEntry {
  filePath: string;
  routePattern: string;  // e.g., "/about", "/services/:id"
  component: string;      // Component name or "inline"
  category: RouteCategory;
}

export interface RouteInventory {
  routes: RouteEntry[];
  totalCount: number;
  categoriesByType: Map<RouteCategory, RouteEntry[]>;
  routesByComponent: Map<string, RouteEntry[]>;
}

export interface ComponentEntry {
  filePath: string;
  componentName: string;
  type: ComponentType;
  hasInteractiveElements: boolean;
  imports: ImportDeclaration[];
}

export interface ComponentInventory {
  components: ComponentEntry[];
  totalCount: number;
  componentsByType: Map<ComponentType, ComponentEntry[]>;
  componentUsage: Map<string, string[]>; // componentName -> routePaths
  interactiveComponents: ComponentEntry[];
}

export interface RouteFilter {
  patterns?: string[];  // e.g., ["/about", "/services/*"]
}

export interface ComponentFilter {
  names?: string[];  // e.g., ["Button", "Card"]
}

// ============================================================================
// AST Parsing Types
// ============================================================================

export interface ParsedFile {
  filePath: string;
  ast: ts.SourceFile;
  jsxElements: JSXElement[];
  imports: ImportDeclaration[];
  cssClasses: Set<string>;
}

export interface ParseError {
  filePath: string;
  error: string;
  line?: number;
  column?: number;
}

export type PropValueType = 'string' | 'expression' | 'spread';

export interface PropValue {
  type: PropValueType;
  value: string;
  raw: string; // Original text from source
}

export interface JSXElement {
  tagName: string;
  props: Map<string, PropValue>;
  children: JSXElement[] | string;
  location: CodeLocation;
  className: string[];
  inlineStyles: Map<string, string>;
}

export interface ImportDeclaration {
  moduleSpecifier: string;  // e.g., 'lucide-react', '@radix-ui/react-button'
  namedImports: string[];   // e.g., ['Button', 'ButtonProps']
  defaultImport?: string;   // e.g., 'React'
  namespaceImport?: string; // e.g., 'RadixUI' from 'import * as RadixUI'
  location: CodeLocation;
}

// ============================================================================
// CSS Parsing Types
// ============================================================================

export interface ParsedStylesheet {
  filePath: string;
  rules: CSSRule[];
  customProperties: Map<string, string>; // --var-name -> value
  rootProperties: Map<string, string>;   // Properties on :root or body
}

export interface CSSRule {
  selector: string;
  declarations: Map<string, string>;
  location: CodeLocation;
}

// ============================================================================
// Tailwind Analysis Types
// ============================================================================

export interface RadiusAnalysis {
  outerRadius: number;
  innerRadius: number;
  padding: number;
  expected: number; // outerRadius = innerRadius + padding
  actual: number;
  isValid: boolean; // within 1px tolerance
}

// ============================================================================
// Violation Detection Types
// ============================================================================

export type PrincipleName = 
  | 'text-wrap-balance'
  | 'text-wrap-pretty'
  | 'font-smoothing'
  | 'tabular-numbers'
  | 'concentric-radius'
  | 'optical-alignment'
  | 'shadows-not-borders'
  | 'image-outlines'
  | 'minimum-hit-area'
  | 'interruptible-animations'
  | 'enter-animations'
  | 'exit-animations'
  | 'contextual-icon-animations'
  | 'scale-on-press'
  | 'skip-animation-page-load'
  | 'transition-specificity'
  | 'will-change-usage'
  | 'warm-modern-colors'
  | 'warm-modern-contrast'
  | 'warm-modern-typography';

export type Severity = 'high' | 'medium' | 'low';

export interface ViolationMetadata {
  [key: string]: any;
}

export interface Violation {
  id: string;
  principle: PrincipleName;
  severity: Severity;
  location: CodeLocation;
  currentCode: string;
  suggestedFix: string;
  explanation: string;
  autoFixable: boolean;
  metadata?: ViolationMetadata;
}

export interface ReportSummary {
  totalViolations: number;
  byPrinciple: Map<PrincipleName, number>;
  bySeverity: Map<Severity, number>;
  autoFixableCount: number;
}

export interface ViolationReport {
  violations: Violation[];
  violationsByPrinciple: Map<PrincipleName, Violation[]>;
  violationsBySeverity: Map<Severity, Violation[]>;
  totalCount: number;
  summary: ReportSummary;
}

// ============================================================================
// Analysis Context
// ============================================================================

export interface AnalysisContext {
  allFiles: ParsedFile[];
  cssFiles: ParsedStylesheet[];
  config: AuditConfig;
  tailwindAnalyzer: TailwindAnalyzer;
}

export interface TailwindAnalyzer {
  extractPixelValue(className: string): number | null;
  analyzeNestedRadii(
    outerElement: JSXElement,
    innerElement: JSXElement
  ): RadiusAnalysis;
}

export type PrincipleAnalyzer = (
  parsedFile: ParsedFile,
  context: AnalysisContext
) => Violation[];

// ============================================================================
// Configuration Types
// ============================================================================

export type ReportFormat = 'markdown' | 'json' | 'html';

export interface AuditConfig {
  // Filters
  routeFilter?: string[];
  componentFilter?: string[];
  principleFilter?: PrincipleName[];
  
  // Modes
  dryRun: boolean;
  autoFix: boolean;
  verbose: boolean;
  
  // Re-audit
  previousReportPath?: string;
  
  // Output
  outputPath: string;
  format: ReportFormat;
}

// ============================================================================
// Re-Audit and Diff Types
// ============================================================================

export interface AuditHistory {
  timestamp: string;
  violations: Violation[];
  summary: ReportSummary;
}

export interface DiffReport {
  fixed: Violation[];
  new: Violation[];
  unchanged: Violation[];
  summary: DiffSummary;
}

export interface DiffSummary {
  totalFixed: number;
  totalNew: number;
  totalUnchanged: number;
  percentImprovement: number;
}

// ============================================================================
// File Discovery Interfaces
// ============================================================================

export interface FileDiscovery {
  discoverRoutes(rootDir: string, filters?: RouteFilter): Promise<RouteInventory>;
  discoverComponents(rootDir: string, filters?: ComponentFilter): Promise<ComponentInventory>;
}

// ============================================================================
// Parser Interfaces
// ============================================================================

export interface ASTParser {
  parseFile(filePath: string): Promise<ParsedFile | ParseError>;
  extractJSXElements(ast: ts.SourceFile): JSXElement[];
  extractImports(ast: ts.SourceFile): ImportDeclaration[];
  findNodeAtPosition(ast: ts.SourceFile, line: number, column: number): ts.Node | null;
}

export interface CSSParser {
  parseStylesheet(filePath: string): Promise<ParsedStylesheet | ParseError>;
  extractRootProperties(parsed: ParsedStylesheet): Map<string, string>;
  extractCustomProperties(parsed: ParsedStylesheet): Map<string, string>;
}

// ============================================================================
// Violation Detector Interface
// ============================================================================

export interface ViolationDetector {
  detectAll(
    parsedFiles: ParsedFile[],
    cssFiles: ParsedStylesheet[],
    config: AuditConfig
  ): Promise<ViolationReport>;
  
  detectByPrinciple(
    principle: PrincipleName,
    parsedFiles: ParsedFile[],
    context: AnalysisContext
  ): Promise<Violation[]>;
}

// ============================================================================
// Report Generator Interface
// ============================================================================

export interface ReportGenerator {
  generateMarkdownReport(report: ViolationReport): string;
  generateDiffReport(current: ViolationReport, previous: AuditHistory): string;
  formatViolationTable(violations: Violation[]): string;
}

// ============================================================================
// Auto-Fixer Interface
// ============================================================================

export interface AutoFixer {
  applyFix(violation: Violation, sourceFile: ts.SourceFile): ts.SourceFile;
  canAutoFix(violation: Violation): boolean;
}

// ============================================================================
// Component Dependency Graph
// ============================================================================

export interface ComponentNode {
  componentName: string;
  filePath: string;
  usedBy: Set<string>; // route file paths
}

export interface DependencyGraph {
  nodes: Map<string, ComponentNode>;
  edges: Map<string, Set<string>>; // component -> dependencies
}
