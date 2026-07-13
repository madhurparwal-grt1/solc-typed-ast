import { bytesToString, strUTF8Len } from "../../misc";
import { ASTNode } from "../ast_node";
import { ASTContext, ASTNodePostprocessor, FileMap } from "../ast_reader";
import { RawComment, parseComments } from "../comments";
import { RawCommentKind } from "../constants";
import {
    ContractDefinition,
    EnumDefinition,
    ErrorDefinition,
    EventDefinition,
    FunctionDefinition,
    ModifierDefinition,
    StructDefinition,
    VariableDeclaration
} from "../implementation/declaration";
import { SourceUnit } from "../implementation/meta/source_unit";
import { StructuredDocumentation } from "../implementation/meta/structured_documentation";
import { Statement, StatementWithChildren } from "../implementation/statement/statement";

type FragmentCoordinates = [number, number, number];

export class StructuredDocumentationReconstructor {
    /**
     * Extracts fragment at provided source location,
     * then tries to find documentation and construct dummy `StructuredDocumentation`.
     * Returns produced `StructuredDocumentation` on success or `undefined`
     * if documentation was not detected in extracted fragment.
     */
    fragmentCoordsToStructDoc(
        coords: FragmentCoordinates,
        source: Uint8Array
    ): StructuredDocumentation | undefined {
        throw new Error("STUB");
    }

    getPrecedingGapCoordinates(node: ASTNode): FragmentCoordinates {
        throw new Error("STUB");
    }

    getDanglingGapCoordinates(node: ASTNode): FragmentCoordinates {
        throw new Error("STUB");
    }
}

type SupportedNode =
    | FunctionDefinition
    | ContractDefinition
    | VariableDeclaration
    | ErrorDefinition
    | EventDefinition
    | EnumDefinition
    | StructDefinition
    | ModifierDefinition
    | Statement
    | StatementWithChildren<ASTNode>;

export class StructuredDocumentationReconstructingPostprocessor
    implements ASTNodePostprocessor<SupportedNode>
{
    private reconstructor = new StructuredDocumentationReconstructor();

    process(node: SupportedNode, context: ASTContext, sources?: FileMap): void {
        throw new Error("STUB");
    }

    isSupportedNode(node: ASTNode): node is SupportedNode {
        return (
            node instanceof FunctionDefinition ||
            node instanceof ContractDefinition ||
            node instanceof EnumDefinition ||
            node instanceof StructDefinition ||
            node instanceof ErrorDefinition ||
            node instanceof EventDefinition ||
            node instanceof ModifierDefinition ||
            (node instanceof VariableDeclaration &&
                (node.parent instanceof ContractDefinition ||
                    node.parent instanceof SourceUnit ||
                    node.parent instanceof StructDefinition)) ||
            node instanceof Statement ||
            node instanceof StatementWithChildren
        );
    }
}
