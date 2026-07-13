import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { SourceUnit } from "../implementation/meta/source_unit";
import { LegacyNodeProcessor } from "./node_processor";

export class LegacySourceUnitProcessor extends LegacyNodeProcessor<SourceUnit> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof SourceUnit> {
        throw new Error("STUB");
    }
}
