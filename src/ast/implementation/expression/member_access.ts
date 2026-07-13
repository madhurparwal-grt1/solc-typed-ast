import { ASTNode } from "../../ast_node";
import { Expression } from "./expression";

export class MemberAccess extends Expression {
    /**
     * The name of the member, e.g. `push` in `someArray.push(1)`
     */
    memberName: string;

    /**
     * Id of the referenced declaration
     */
    referencedDeclaration: number;

    /**
     * The expression that is accessed e.g. `someArray` in `someArray.push(1)`
     */
    vExpression: Expression;

    constructor(
        id: number,
        src: string,
        typeString: string,
        typeIdentifier: string | undefined,
        expression: Expression,
        memberName: string,
        referencedDeclaration: number,
        raw?: any
    ) {
        throw new Error("STUB");
    }

    get children(): readonly ASTNode[] {
        throw new Error("STUB");
    }

    /**
     * Reference to the declaration
     */
    get vReferencedDeclaration(): ASTNode | undefined {
        throw new Error("STUB");
    }

    set vReferencedDeclaration(value: ASTNode | undefined) {
        throw new Error("STUB");
    }
}
