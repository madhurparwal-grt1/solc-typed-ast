import { ABIEncoderVersion, ABIEncoderVersions } from "../../../types";
import { ASTNode, ASTNodeWithChildren } from "../../ast_node";
import { EventDefinition } from "../declaration";
import { ContractDefinition } from "../declaration/contract_definition";
import { EnumDefinition } from "../declaration/enum_definition";
import { ErrorDefinition } from "../declaration/error_definition";
import { FunctionDefinition } from "../declaration/function_definition";
import { StructDefinition } from "../declaration/struct_definition";
import { UserDefinedValueTypeDefinition } from "../declaration/user_defined_value_type_definition";
import { VariableDeclaration } from "../declaration/variable_declaration";
import { ImportDirective } from "./import_directive";
import { PragmaDirective } from "./pragma_directive";
import { UsingForDirective } from "./using_for_directive";

export type ExportedSymbol =
    | ContractDefinition
    | StructDefinition
    | EnumDefinition
    | ErrorDefinition
    | FunctionDefinition
    | EventDefinition
    | UserDefinedValueTypeDefinition
    | VariableDeclaration
    | ImportDirective;

export class SourceUnit extends ASTNodeWithChildren<ASTNode> {
    /**
     * Original "sources" key, that corresponds to current AST entry.
     */
    sourceEntryKey: string;

    /**
     * Index of the source unit in the "sourceList".
     */
    sourceListIndex: number;

    /**
     * File path to the source file
     */
    absolutePath: string;

    /**
     * Exported symbols dictionary, e.g. `{ "A": 74, "B": 34, ... }`
     */
    exportedSymbols: Map<string, number>;

    /**
     * SPDX license identifier (if provided)
     */
    license?: string;

    constructor(
        id: number,
        src: string,
        sourceEntryKey: string,
        sourceListIndex: number,
        absolutePath: string,
        exportedSymbols: Map<string, number>,
        children?: Iterable<ASTNode>,
        license?: string,
        raw?: any
    ) {
        throw new Error("STUB");
    }

    /**
     * References to pragma directives
     */
    get vPragmaDirectives(): readonly PragmaDirective[] {
        throw new Error("STUB");
    }

    /**
     * References to import directives
     */
    get vImportDirectives(): readonly ImportDirective[] {
        throw new Error("STUB");
    }

    /**
     * References to contract definitions
     */
    get vContracts(): readonly ContractDefinition[] {
        throw new Error("STUB");
    }

    /**
     * References to file-level enum definitions
     */
    get vEnums(): readonly EnumDefinition[] {
        throw new Error("STUB");
    }

    /**
     * References to file-level error definitions
     */
    get vErrors(): readonly ErrorDefinition[] {
        throw new Error("STUB");
    }

    /**
     * References to file-level struct definitions
     */
    get vStructs(): readonly StructDefinition[] {
        throw new Error("STUB");
    }

    /**
     * References to file-level function definitions (free functions)
     */
    get vFunctions(): readonly FunctionDefinition[] {
        throw new Error("STUB");
    }

    /**
     * References to file-level event definitions
     */
    get vEvents(): readonly EventDefinition[] {
        throw new Error("STUB");
    }

    /**
     * References to file-level constant variable definitions
     */
    get vVariables(): readonly VariableDeclaration[] {
        throw new Error("STUB");
    }

    /**
     * References to file-level user-defined value type definitions
     */
    get vUserDefinedValueTypes(): readonly UserDefinedValueTypeDefinition[] {
        throw new Error("STUB");
    }

    /**
     * References to file-level using-for directives
     */
    get vUsingForDirectives(): readonly UsingForDirective[] {
        throw new Error("STUB");
    }

    /**
     * Referenced exported symbols
     */
    get vExportedSymbols(): ReadonlyMap<string, ExportedSymbol> {
        throw new Error("STUB");
    }

    /**
     * Returns user-defined ABI encoder version for the source unit.
     * If there is no encoder version defined in the pragma directives,
     * then returns `undefined`.
     */
    get abiEncoderVersion(): ABIEncoderVersion | undefined {
        throw new Error("STUB");
    }
}
