import { ASTNode } from "../../ast_node";
import { Expression } from "./expression";

export class TupleExpression extends Expression {
    /**
     * Indicate if tuple is an inline array definition.
     */
    isInlineArray: boolean;

    /**
     * An array of referenced nodes, preserving evaluation order.
     *
     * The `null` value is used to represent empty spots.
     */
    vOriginalComponents: Array<Expression | null>;

    constructor(
        id: number,
        src: string,
        typeString: string,
        typeIdentifier: string | undefined,
        isInlineArray: boolean,
        components: Array<Expression | null>,
        raw?: any
    ) {
        throw new Error("STUB");
    }

    get children(): readonly ASTNode[] {
        throw new Error("STUB");
    }

    /**
     * An array of referenced node IDs, preserving evaluation order.
     *
     * The `null` value is used to represent empty spots.
     */
    get components(): ReadonlyArray<number | null> {
        throw new Error("STUB");
    }

    /**
     * An array of non-`null` components
     */
    get vComponents(): readonly Expression[] {
        throw new Error("STUB");
    }
}
