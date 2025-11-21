/**
 * Tree-sitter MCP - Code parsing/analysis
 */
export { registerProject, listProjects, removeProject } from './projects.js';
export { listFiles, getFile, getFileMetadata } from './files.js';
export { getAst, getSymbols, getNodeAtPosition } from './ast.js';
export { findText, runQuery, findUsage, findSimilarCode } from './search.js';
export { analyzeProject, analyzeComplexity, getDependencies } from './analysis.js';
