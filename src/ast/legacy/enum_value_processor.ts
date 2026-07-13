import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { EnumValue } from "../implementation/declaration/enum_value";
import { LegacyNodeProcessor } from "./node_processor";

export class LegacyEnumValueProcessor extends LegacyNodeProcessor<EnumValue> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof EnumValue> {
        throw new Error("STUB");
    }
}
