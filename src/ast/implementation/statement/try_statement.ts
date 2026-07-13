import { ASTNode } from "../../ast_node";
import { FunctionCall } from "../expression/function_call";
import { StructuredDocumentation } from "../meta";
import { Statement } from "./statement";
import { TryCatchClause } from "./try_catch_clause";

export class TryStatement extends Statement {
    /**
     * Contract creation call expression or external function call expression
     */
    vExternalCall: FunctionCall;

    /**
     * An array of defined `catch` clauses
     */
    vClauses: TryCatchClause[];

    constructor(
        id: number,
        src: string,
        externalCall: FunctionCall,
        clauses: TryCatchClause[],
        documentation?: string | StructuredDocumentation,
        raw?: any
    ) {
        throw new Error("STUB");
    }

    get children(): readonly ASTNode[] {
        throw new Error("STUB");
    }
}
