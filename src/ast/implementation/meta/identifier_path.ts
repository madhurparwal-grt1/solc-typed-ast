import { ASTNode } from "../../ast_node";

export class IdentifierPath extends ASTNode {
    /**
     * A type name
     */
    name: string;

    /**
     * Id of the referenced declaration
     */
    referencedDeclaration: number;

    constructor(id: number, src: string, name: string, referencedDeclaration: number, raw?: any) {
        super(id, src, raw);

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
}
