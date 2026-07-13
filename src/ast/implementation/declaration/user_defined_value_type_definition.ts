import { getFQDefName } from "../../..";
import { ASTNode } from "../../ast_node";
import { SourceUnit } from "../meta/source_unit";
import { ElementaryTypeName } from "../type/elementary_type_name";
import { ContractDefinition } from "./contract_definition";

export class UserDefinedValueTypeDefinition extends ASTNode {
    /**
     * The name of the user-defined value type definition
     */
    name: string;

    /**
     * The source range for name string
     */
    nameLocation?: string;

    /**
     * Aliased value type
     */
    underlyingType: ElementaryTypeName;

    constructor(
        id: number,
        src: string,
        name: string,
        underlyingType: ElementaryTypeName,
        nameLocation?: string,
        raw?: any
    ) {
        throw new Error("STUB");
    }

    get children(): readonly ASTNode[] {
        throw new Error("STUB");
    }

    /**
     * Canonical name (or qualified name), e.g. `DefiningContract.SomeType`
     */
    get canonicalName(): string {
        throw new Error("STUB");
    }

    /**
     * Reference to its scoped contract or source unit
     */
    get vScope(): ContractDefinition | SourceUnit {
        throw new Error("STUB");
    }
}
