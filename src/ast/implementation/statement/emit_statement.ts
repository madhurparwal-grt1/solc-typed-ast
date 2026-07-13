import { ASTNode } from "../../ast_node";
import { FunctionCall } from "../expression/function_call";
import { StructuredDocumentation } from "../meta";
import { Statement } from "./statement";

export class EmitStatement extends Statement {
    /**
     * A function call to the event definition
     */
    vEventCall: FunctionCall;

    constructor(
        id: number,
        src: string,
        eventCall: FunctionCall,
        documentation?: string | StructuredDocumentation,
        raw?: any
    ) {
        throw new Error("STUB");
    }

    get children(): readonly ASTNode[] {
        throw new Error("STUB");
    }
}
