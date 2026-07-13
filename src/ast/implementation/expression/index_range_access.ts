import { ASTNode } from "../../ast_node";
import { Expression } from "./expression";

export class IndexRangeAccess extends Expression {
    /**
     * The expression that is accessed e.g. `data` in `data[2:4]`
     */
    vBaseExpression: Expression;

    /**
     * Start index of the range, e.g. `2` in `data[2:4]`.
     * Is `undefined` when omitted.
     */
    vStartExpression?: Expression;

    /**
     * End index of the range, e.g. `4` in `data[2:4]`.
     * Is `undefined` when omitted.
     */
    vEndExpression?: Expression;

    constructor(
        id: number,
        src: string,
        typeString: string,
        typeIdentifier: string | undefined,
        baseExpression: Expression,
        startExpression?: Expression,
        endExpression?: Expression,
        raw?: any
    ) {
        throw new Error("STUB");
    }

    get children(): readonly ASTNode[] {
        throw new Error("STUB");
    }
}
