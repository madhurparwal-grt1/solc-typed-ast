import { ASTNode } from "../ast_node";
import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { DataLocation, Mutability, StateVariableVisibility } from "../constants";
import { VariableDeclaration } from "../implementation/declaration/variable_declaration";
import { Expression } from "../implementation/expression/expression";
import { OverrideSpecifier } from "../implementation/meta/override_specifier";
import { StructuredDocumentation } from "../implementation/meta/structured_documentation";
import { TypeName } from "../implementation/type/type_name";
import { LegacyNodeProcessor } from "./node_processor";

export class LegacyVariableDeclarationProcessor extends LegacyNodeProcessor<VariableDeclaration> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof VariableDeclaration> {
        throw new Error("STUB");
    }

    private extract(
        children: ASTNode[]
    ): [
        TypeName | undefined,
        OverrideSpecifier | undefined,
        Expression | undefined,
        StructuredDocumentation | undefined
    ] {
        throw new Error("STUB");
    }
}
