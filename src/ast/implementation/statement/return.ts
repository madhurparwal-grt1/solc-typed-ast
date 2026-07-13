import { ASTNode } from "../../ast_node";
import { Expression } from "../expression/expression";
import { StructuredDocumentation } from "../meta";
import { ParameterList } from "../meta/parameter_list";
import { Statement } from "./statement";

export class Return extends Statement {
    /**
     * Id of the parameter list that specifies the return parameters
     */
    functionReturnParameters: number;

    /**
     * Expression that is returned (if specified)
     */
    vExpression?: Expression;

    constructor(
        id: number,
        src: string,
        functionReturnParameters: number,
        expression?: Expression,
        documentation?: string | StructuredDocumentation,
        raw?: any
    ) {
        throw new Error("STUB");
    }

    get children(): readonly ASTNode[] {
        throw new Error("STUB");
    }

    /**
     * The parameter list that specifies the return parameters
     */
    get vFunctionReturnParameters(): ParameterList {
        throw new Error("STUB");
    }

    set vFunctionReturnParameters(value: ParameterList) {
        throw new Error("STUB");
    }
}
