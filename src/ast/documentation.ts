import { ASTNode, ASTNodeWithChildren } from "./ast_node";
import { StructuredDocumentation } from "./implementation/meta";

export interface WithPrecedingDocs {
    documentation?: string | StructuredDocumentation;

    /**
     * This field is used as a storage field for string,
     * if string is set as value for `documentation`.
     */
    docString?: string;
}

export interface WithDanglingDocs {
    danglingDocumentation?: string | StructuredDocumentation;

    /**
     * This field is used as a storage field for string,
     * if string is set as value for `danglingDocumentation`.
     */
    danglingDocString?: string;
}

export function getDocumentation(
    node: WithPrecedingDocs & ASTNodeWithChildren<ASTNode>
): string | StructuredDocumentation | undefined {
    throw new Error("STUB");
}

export function setDocumentation(
    node: WithPrecedingDocs & ASTNodeWithChildren<ASTNode>,
    value: string | StructuredDocumentation | undefined
): void {
    throw new Error("STUB");
}

export function getDanglingDocumentation(
    node: WithDanglingDocs & ASTNodeWithChildren<ASTNode>
): string | StructuredDocumentation | undefined {
    throw new Error("STUB");
}

export function setDanglingDocumentation(
    node: WithDanglingDocs & ASTNodeWithChildren<ASTNode>,
    value: string | StructuredDocumentation | undefined
): void {
    throw new Error("STUB");
}
