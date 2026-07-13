import { ASTNode } from "../../ast_node";
import { FunctionCall } from "../expression/function_call";
import { StructuredDocumentation } from "../meta";
import { Statement } from "./statement";

export class RevertStatement extends Statement {
    /**
     * A function call to the error definition
     */
    errorCall: FunctionCall;

    constructor(
        id: number,
        src: string,
        errorCall: FunctionCall,
        documentation?: string | StructuredDocumentation,
        raw?: any
    ) {
        throw new Error("STUB");
    }

    get children(): readonly ASTNode[] {
        throw new Error("STUB");
    }
}
