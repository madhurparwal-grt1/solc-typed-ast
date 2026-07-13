import { parseTypeIdentifier, TypeTypeId } from "../../typeIdentifiers";
import { ASTNode } from "../ast_node";
import { ASTNodePostprocessor } from "../ast_reader";
import { VariableDeclaration } from "../implementation/declaration";
import { ElementaryTypeNameExpression, Expression, Identifier } from "../implementation/expression";
import { ImportDirective } from "../implementation/meta";
import { TypeName } from "../implementation/type";

type SupportedNode = Expression | VariableDeclaration | TypeName;

export class TypeIdentifierNormalizer implements ASTNodePostprocessor<SupportedNode> {
    process(node: SupportedNode): void {
        throw new Error("STUB");
    }

    isSupportedNode(node: ASTNode): node is SupportedNode {
        return (
            node instanceof Expression ||
            node instanceof VariableDeclaration ||
            node instanceof TypeName
        );
    }
}
