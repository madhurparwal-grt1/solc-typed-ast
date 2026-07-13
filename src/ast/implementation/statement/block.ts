import { ASTNode } from "../../ast_node";
import { StructuredDocumentation } from "../meta";
import { Statement, StatementWithChildren } from "./statement";

/**
 * Block is a compound statement and it can hold other statements
 */
export class Block extends StatementWithChildren<
    Statement | StatementWithChildren<ASTNode> | StructuredDocumentation
> {
    constructor(
        id: number,
        src: string,
        statements: Iterable<Statement>,
        documentation?: string | StructuredDocumentation,
        raw?: any
    ) {
        throw new Error("STUB");
    }

    /**
     * An array of the member statements
     */
    get vStatements(): Array<Statement | StatementWithChildren<ASTNode>> {
        throw new Error("STUB");
    }
}
