import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Block } from "../implementation/statement/block";
import { Statement } from "../implementation/statement/statement";
import { ModernNodeProcessor } from "./node_processor";

export class ModernBlockProcessor extends ModernNodeProcessor<Block> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof Block> {
        throw new Error("STUB");
    }
}
