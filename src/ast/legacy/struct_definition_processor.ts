import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { VariableDeclaration } from "../implementation/declaration";
import { StructDefinition } from "../implementation/declaration/struct_definition";
import { LegacyNodeProcessor } from "./node_processor";

export class LegacyStructDefinitionProcessor extends LegacyNodeProcessor<StructDefinition> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof StructDefinition> {
        throw new Error("STUB");
    }
}
