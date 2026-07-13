import { ASTNode } from "../../ast_node";
import { Expression } from "./expression";

export class FunctionCallOptions extends Expression {
    /**
     * Function expression. For following example:
     * ```
     * foreign.buy{gas: 2000, value: 1 gwei}(1000);
     * ```
     * Will contain `foreign.buy` member access.
     */
    vExpression: Expression;

    /**
     * Option name/value pairs, respecting order.
     */
    vOptionsMap: Map<string, Expression>;

    constructor(
        id: number,
        src: string,
        typeString: string,
        typeIdentifier: string | undefined,
        expression: Expression,
        options: Map<string, Expression>,
        raw?: any
    ) {
        throw new Error("STUB");
    }

    get children(): readonly ASTNode[] {
        throw new Error("STUB");
    }

    /**
     * Specified option names, respecting order. For following example:
     * ```
     * foreign.buy{gas: 2000, value: 1 gwei}(1000);
     * ```
     * Will contain `["gas", "value"]`.
     */
    get names(): Iterable<string> {
        throw new Error("STUB");
    }

    /**
     * Specified option values, respecting order. For following example:
     * ```
     * foreign.buy{gas: 2000, value: 1 gwei}(1000);
     * ```
     * Will contain `[2000, 1 gwei]` literal expressions.
     */
    get vOptions(): Iterable<Expression> {
        throw new Error("STUB");
    }
}
