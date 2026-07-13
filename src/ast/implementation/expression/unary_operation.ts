import { ASTNode } from "../../ast_node";
import { FunctionDefinition } from "../declaration";
import { Expression } from "./expression";

export class UnaryOperation extends Expression {
    /**
     * Indicates that operator is used as prefix `++x` (`true`)
     * or suffix `x++` (`false`)
     */
    prefix: boolean;

    /**
     * String representation of the operator.
     *
     * Note that `delete` is also an unary operation.
     */
    operator: string;

    /**
     * The expressions that the unary operation is applied to,
     * e.g. `1` for `-1` or `someArray.length` for `someArray.length--`.
     */
    vSubExpression!: Expression;

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
        prefix: boolean,
        operator: string,
        subExpression: Expression,
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
