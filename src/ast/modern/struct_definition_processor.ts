import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { StructDefinition } from "../implementation/declaration/struct_definition";
import { VariableDeclaration } from "../implementation/declaration/variable_declaration";
import { StructuredDocumentation } from "../implementation/meta/structured_documentation";
import { ModernNodeProcessor } from "./node_processor";

export class ModernStructDefinitionProcessor extends ModernNodeProcessor<StructDefinition> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof StructDefinition> {
        throw new Error("STUB");
    }
}
