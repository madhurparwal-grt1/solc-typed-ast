import { ImportDirective } from "../../ast";
import { assert, Range } from "../../misc";
import { TypeNode } from "./type";

/**
 * A utility type for referencing aliased unit member access.
 * It is not directly referenced in typeString parser grammar.
 */
export class ImportRefType extends TypeNode {
    readonly importStmt: ImportDirective;

    constructor(importStmt: ImportDirective, src?: Range) {
        throw new Error("STUB");
    }

    getFields(): any[] {
        return [this.importStmt];
    }

    pp(): string {
        const path = this.importStmt.vSourceUnit.sourceEntryKey;
        const alias = this.importStmt.unitAlias;

        return `<import ${path} as ${alias}>`;
    }
}
