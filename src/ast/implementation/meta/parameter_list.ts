import { ASTNodeWithChildren } from "../../ast_node";
import { VariableDeclaration } from "../declaration/variable_declaration";

export class ParameterList extends ASTNodeWithChildren<VariableDeclaration> {
    constructor(id: number, src: string, parameters: Iterable<VariableDeclaration>, raw?: any) {
        throw new Error("STUB");
    }

    /**
     * An array of declared variables
     */
    get vParameters(): VariableDeclaration[] {
        throw new Error("STUB");
    }
}
