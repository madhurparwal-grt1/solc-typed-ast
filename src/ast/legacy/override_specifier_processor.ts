import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { OverrideSpecifier } from "../implementation/meta/override_specifier";
import { UserDefinedTypeName } from "../implementation/type/user_defined_type_name";
import { LegacyNodeProcessor } from "./node_processor";

export class LegacyOverrideSpecifierProcessor extends LegacyNodeProcessor<OverrideSpecifier> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof OverrideSpecifier> {
        throw new Error("STUB");
    }
}
