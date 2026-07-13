import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { EnumDefinition } from "../implementation/declaration/enum_definition";
import { EnumValue } from "../implementation/declaration/enum_value";
import { StructuredDocumentation } from "../implementation/meta/structured_documentation";
import { ModernNodeProcessor } from "./node_processor";

export class ModernEnumDefinitionProcessor extends ModernNodeProcessor<EnumDefinition> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof EnumDefinition> {
        throw new Error("STUB");
    }
}
