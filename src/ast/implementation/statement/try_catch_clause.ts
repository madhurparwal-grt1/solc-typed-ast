import { ASTNode } from "../../ast_node";
import { StructuredDocumentation } from "../meta";
import { ParameterList } from "../meta/parameter_list";
import { Block } from "./block";
import { Statement } from "./statement";

export class TryCatchClause extends Statement {
    /**
     * Error string. Contains empty string if `Error` is not specified.
     */
    errorName: string;

    /**
     * Optional parameters
     */
    vParameters?: ParameterList;

    /**
     * Block of clause
     */
    vBlock: Block;

    constructor(
        id: number,
        src: string,
        errorName: string,
        block: Block,
        parameters?: ParameterList,
        documentation?: string | StructuredDocumentation,
        raw?: any
    ) {
        throw new Error("STUB");
    }

    get children(): readonly ASTNode[] {
        throw new Error("STUB");
    }
}
