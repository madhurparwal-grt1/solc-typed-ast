import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { EnumDefinition } from "../implementation/declaration/enum_definition";
import { EnumValue } from "../implementation/declaration/enum_value";
import { LegacyNodeProcessor } from "./node_processor";

export class LegacyEnumDefinitionProcessor extends LegacyNodeProcessor<EnumDefinition> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof EnumDefinition> {
        throw new Error("STUB");
    }
}
