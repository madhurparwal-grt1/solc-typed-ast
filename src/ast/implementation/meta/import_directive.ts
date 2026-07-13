import { ASTNode } from "../../ast_node";
import { Identifier } from "../expression/identifier";
import { ExportedSymbol, SourceUnit } from "./source_unit";

export interface SymbolAlias {
    foreign: number | Identifier;
    local: string | null;
}

export type SymbolOrigin = ExportedSymbol;

export type ResolvedSymbolAlias = [SymbolOrigin, string | undefined];

export class ImportDirective extends ASTNode {
    /**
     * File path to the imported source file
     */
    file: string;

    /**
     * Resolved absolute file path to the imported source file
     */
    absolutePath: string;

    /**
     * An alias symbol what will be used as the reference to access exports
     * of the imported source unit
     */
    unitAlias: string;

    /**
     * An array of locally aliased symbols, that are imported from unit.
     */
    symbolAliases: SymbolAlias[];

    /**
     * Id of the scoped source unit
     */
    scope: number;

    /**
     * Id of the imported source unit
     */
    sourceUnit: number;

    constructor(
        id: number,
        src: string,
        file: string,
        absolutePath: string,
        unitAlias: string,
        symbolAliases: SymbolAlias[],
        scope: number,
        sourceUnit: number,
        raw?: any
    ) {
        throw new Error("STUB");
    }

    get children(): readonly ASTNode[] {
        throw new Error("STUB");
    }

    /**
     * Reference to its scoped source unit
     */
    get vScope(): SourceUnit {
        throw new Error("STUB");
    }

    set vScope(value: SourceUnit) {
        throw new Error("STUB");
    }

    /**
     * Reference to the imported source unit
     */
    get vSourceUnit(): SourceUnit {
        throw new Error("STUB");
    }

    set vSourceUnit(value: SourceUnit) {
        throw new Error("STUB");
    }

    /**
     * Symbol aliases, resolved to their original declarations.
     */
    get vSymbolAliases(): ResolvedSymbolAlias[] {
        throw new Error("STUB");
    }
}
