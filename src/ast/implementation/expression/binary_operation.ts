import { ASTNode } from "../../ast_node";
import { FunctionDefinition } from "../declaration";
import { Expression } from "./expression";

export class BinaryOperation extends Expression {
    /**
     * String representation of the operator, e.g. `+` in `1 + 2`
     */
    operator: string;

    /**
     * Left hand side expression, e.g. `1` in `1 + 2`
     */
    vLeftExpression: Expression;

    /**
     * Right hand side expression, e.g. `2` in `1 + 2`
     */
    vRightExpression: Expression;

    /**
     * Custom defintion that is bound to operator and used instead of default logic.
     *
     * Available since Solidity 0.8.19.
     */
    userFunction?: number;

    constructor(
        id: number,
        src: string,
        typeString: string,
        typeIdentifier: string | undefined,
        operator: string,
        leftExpression: Expression,
        rightExpression: Expression,
        userFunction?: number,
        raw?: any
    ) {
        throw new Error("STUB");
    }

    get children(): readonly ASTNode[] {
        throw new Error("STUB");
    }

    /**
     * Attribute to access the defintion, bound to the operator.
     *
     * Is `undefined` when there is no definition bound to the operator.
     */
    get vUserFunction(): FunctionDefinition | undefined {
        throw new Error("STUB");
    }

    set vUserFunction(value: FunctionDefinition | undefined) {
        throw new Error("STUB");
    }
}
