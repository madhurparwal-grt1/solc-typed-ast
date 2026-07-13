import { ASTNode } from "../../ast_node";
import { SourceUnit } from "../meta";
import { ParameterList } from "../meta/parameter_list";
import { StructuredDocumentation } from "../meta/structured_documentation";
import { ContractDefinition } from "./contract_definition";

export class ErrorDefinition extends ASTNode {
    /**
     * The name of the error
     */
    name: string;

    /**
     * The source range for name string
     */
    nameLocation?: string;

    /**
     * Optional documentation appearing above the error definition:
     * - Is `undefined` when not specified.
     * - Is type of `string` for compatibility reasons (for and instance, during node creation).
     * - Is instance of `StructuredDocumentation` in other cases.
     */
    documentation?: string | StructuredDocumentation;

    /**
     * A list of values that is passed on to the EVM logging facility
     */
    vParameters: ParameterList;

    constructor(
        id: number,
        src: string,
        name: string,
        parameters: ParameterList,
        documentation?: string | StructuredDocumentation,
        nameLocation?: string,
        raw?: any
    ) {
        throw new Error("STUB");
    }

    get children(): readonly ASTNode[] {
        throw new Error("STUB");
    }

    /**
     * Reference to a scoped `ContractDefinition` if event is declared in contract.
     * Reference to a scoped `SourceUnit` if event is declared on file level.
     */
    get vScope(): ContractDefinition | SourceUnit {
        throw new Error("STUB");
    }
}
