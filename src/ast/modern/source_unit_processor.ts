import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { SourceUnit } from "../implementation/meta/source_unit";
import { ModernNodeProcessor } from "./node_processor";

export class ModernSourceUnitProcessor extends ModernNodeProcessor<SourceUnit> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof SourceUnit> {
        throw new Error("STUB");
    }
}
