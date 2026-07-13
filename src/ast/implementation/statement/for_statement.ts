import { ASTNode } from "../../ast_node";
import { Expression } from "../expression/expression";
import { StructuredDocumentation } from "../meta";
import { ExpressionStatement } from "./expression_statement";
import { Statement } from "./statement";
import { VariableDeclarationStatement } from "./variable_declaration_statement";

export class ForStatement extends Statement {
    /**
     * Variable declaration and initialization `uint x = 1`.
     * Also accepts other expression statements.
     */
    vInitializationExpression?: VariableDeclarationStatement | ExpressionStatement;

    /**
     * Continuation condition, e.g. `x < 10`
     */
    vCondition?: Expression;

    /**
     * Loop expression, e.g. `x++`
     */
    vLoopExpression?: ExpressionStatement;

    /**
     * Statement that gets executed if the condition is evaluated to `true`
     */
    vBody: Statement;

    constructor(
        id: number,
        src: string,
        body: Statement,
        initializationExpression?: VariableDeclarationStatement | ExpressionStatement,
        condition?: Expression,
        loopExpression?: ExpressionStatement,
        documentation?: string | StructuredDocumentation,
        raw?: any
    ) {
        throw new Error("STUB");
    }

    get children(): readonly ASTNode[] {
        throw new Error("STUB");
    }
}
