import { ASTNode } from "../../ast_node";
import { TypeName } from "../type/type_name";
import { Expression } from "./expression";

export class NewExpression extends Expression {
    /**
     * Type name of the new value
     */
    vTypeName: TypeName;

    constructor(
        id: number,
        src: string,
        typeString: string,
        typeIdentifier: string | undefined,
        typeName: TypeName,
        raw?: any
    ) {
        throw new Error("STUB");
    }

    get children(): readonly ASTNode[] {
        throw new Error("STUB");
    }
}
