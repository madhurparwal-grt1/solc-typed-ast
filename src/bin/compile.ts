#!/usr/bin/env node
import { Command } from "commander";
import fse from "fs-extra";
import {
    ASTKind,
    ASTNode,
    ASTNodeFormatter,
    ASTReader,
    ASTWriter,
    bytesToString,
    CACHE_DIR,
    CompilationOutput,
    CompileFailedError,
    compileJson,
    compileJsonData,
    CompileResult,
    CompilerKind,
    CompilerVersions,
    compileSol,
    compileSourceString,
    ContractDefinition,
    DefaultASTWriterMapping,
    downloadSupportedCompilers,
    ErrorDefinition,
    EventDefinition,
    FunctionDefinition,
    FunctionVisibility,
    InferType,
    isCustom,
    isExact,
    LatestCompilerVersion,
    PathOptions,
    PossibleCompilerKinds,
    PrettyFormatter,
    SourceUnit,
    StateVariableVisibility,
    VariableDeclaration,
    XPath
} from "..";

enum CompileMode {
    Auto = "auto",
    Sol = "sol",
    Json = "json"
}

const compileModes = Object.values(CompileMode);

function terminate(message?: string, exitCode = 0): never {
    if (message !== undefined) {
        if (exitCode === 0) {
            console.log(message);
        } else {
            console.error(message);
        }
    }

    process.exit(exitCode);
}

function error(message: string): never {
    terminate(message, 1);
}

(async () => {
    throw new Error("STUB");
})().catch((e) => {
    throw new Error("STUB");
});
