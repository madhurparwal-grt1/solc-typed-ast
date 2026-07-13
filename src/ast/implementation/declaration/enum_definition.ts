import {
    enumToIntType,
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
import { EnumValue } from "./enum_value";

export class EnumDefinition extends ASTNodeWithChildren<StructuredDocumentation | EnumValue> {
    docString?: string;
    danglingDocString?: string;

    /**
     * The name of the enum
     */
    name: string;

    /**
     * The source range for name string
     */
    nameLocation?: string;

    constructor(
        id: number,
        src: string,
        name: string,
        members: Iterable<EnumValue>,
        documentation?: string | StructuredDocumentation,
        nameLocation?: string,
        raw?: any
    ) {
        throw new Error("STUB");
    }

    /**
     * Canonical name (or qualified name), e.g. `DefiningContract.SomeEnum`
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
     * Array of the enum values
     */
    get vMembers(): readonly EnumValue[] {
        throw new Error("STUB");
    }

    /**
     * Reference to a scoped contract or source unit
     */
    get vScope(): ContractDefinition | SourceUnit {
        throw new Error("STUB");
    }

    toUintTypeString(): string {
        throw new Error("STUB");
    }
}
