import { ASTNode } from "../../ast_node";
import { ExternalReferenceType } from "../../constants";
import { PrimaryExpression } from "./primary_expression";

export class Identifier extends PrimaryExpression {
    /**
     * Name of the identifier
     */
    name: string;

    /**
     * Id of the referenced declaration
     */
    referencedDeclaration: number;

    constructor(
        id: number,
        src: string,
        typeString: string,
        typeIdentifier: string | undefined,
        name: string,
        referencedDeclaration: number,
        raw?: any
    ) {
        super(id, src, typeString, typeIdentifier, raw);

        this.name = name;
        this.referencedDeclaration = referencedDeclaration;
    }

    /**
     * Attribute to access the converted referenced declaration.
     *
     * Is `undefined` when this is a Solidity internal identifier.
     */
    get vReferencedDeclaration(): ASTNode | undefined {
        throw new Error("STUB");
    }

    set vReferencedDeclaration(value: ASTNode | undefined) {
        throw new Error("STUB");
    }

    /**
     * Solidity builtin or user-defined reference
     */
    get vIdentifierType(): ExternalReferenceType {
        throw new Error("STUB");
    }
}
