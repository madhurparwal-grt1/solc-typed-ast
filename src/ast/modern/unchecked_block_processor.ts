import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { UncheckedBlock } from "../implementation/statement/unchecked_block";
import { Statement } from "../implementation/statement/statement";
import { ModernNodeProcessor } from "./node_processor";

export class ModernUncheckedBlockProcessor extends ModernNodeProcessor<UncheckedBlock> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof UncheckedBlock> {
        throw new Error("STUB");
    }
}
