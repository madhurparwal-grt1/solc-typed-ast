import { ASTNode } from "../../ast_node";
import { IdentifierPath } from "../meta/identifier_path";
import { TypeName } from "./type_name";

export class UserDefinedTypeName extends TypeName {
    /**
     * Name of the defined type
     */
    name?: string;

    /**
     * Id of the referenced declaration node
     */
    referencedDeclaration: number;

    /**
     * An identifier path (since Solidity 0.8.0)
     */
    path?: IdentifierPath;

    constructor(
        id: number,
        src: string,
        typeString: string,
        typeIdentifier: string | undefined,
        name: string | undefined,
        referencedDeclaration: number,
        path?: IdentifierPath,
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
    get vReferencedDeclaration(): ASTNode {
        throw new Error("STUB");
    }

    set vReferencedDeclaration(value: ASTNode) {
        throw new Error("STUB");
    }
}
