import {
    getDanglingDocumentation,
    getDocumentation,
    getFQDefName,
    setDanglingDocumentation,
    setDocumentation
} from "../../..";
import { ASTNodeWithChildren } from "../../ast_node";
import { SourceUnit } from "../meta/source_unit";
import { StructuredDocumentation } from "../meta/structured_documentation";
import { ContractDefinition } from "./contract_definition";
import { VariableDeclaration } from "./variable_declaration";

export class StructDefinition extends ASTNodeWithChildren<
    StructuredDocumentation | VariableDeclaration
> {
    docString?: string;
    danglingDocString?: string;

    /**
     * The name of the struct
     */
    name: string;

    /**
     * The source range for name string
     */
    nameLocation?: string;

    /**
     * Node id of scoped contract or source unit
     */
    scope: number;

    /**
     * Struct visibility
     */
    visibility: string;

    constructor(
        id: number,
        src: string,
        name: string,
        scope: number,
        visibility: string,
        members: Iterable<VariableDeclaration>,
        documentation?: string | StructuredDocumentation,
        nameLocation?: string,
        raw?: any
    ) {
        throw new Error("STUB");
    }

    /**
     * Canonical name (or qualified name), e.g. `DefiningContract.SomeStruct`
     */
    get canonicalName(): string {
        throw new Error("STUB");
    }

    /**
     * Optional documentation appearing above the contract definition:
     * - Is `undefined` when not specified.
     * - Is type of `string` when specified and compiler version is older than `0.6.3`.
     * - Is instance of `StructuredDocumentation` when specified and compiler version is `0.6.3` or newer.
     */
    get documentation(): string | StructuredDocumentation | undefined {
        throw new Error("STUB");
    }

    set documentation(value: string | StructuredDocumentation | undefined) {
        throw new Error("STUB");
    }

    /**
     * Optional documentation that is dangling in the source fragment,
     * that is after end of last child and before the end of the current node.
     *
     * It is:
     * - Is `undefined` when not detected.
     * - Is type of `string` for compatibility reasons.
     */
    get danglingDocumentation(): string | StructuredDocumentation | undefined {
        throw new Error("STUB");
    }

    set danglingDocumentation(value: string | StructuredDocumentation | undefined) {
        throw new Error("STUB");
    }

    /**
     * Members of the struct
     */
    get vMembers(): readonly VariableDeclaration[] {
        throw new Error("STUB");
    }

    /**
     * Reference to its scoped contract or source unit
     */
    get vScope(): ContractDefinition | SourceUnit {
        throw new Error("STUB");
    }

    set vScope(value: ContractDefinition | SourceUnit) {
        throw new Error("STUB");
    }
}
