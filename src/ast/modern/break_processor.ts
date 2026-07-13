import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Break } from "../implementation/statement/break";
import { ModernNodeProcessor } from "./node_processor";

export class ModernBreakProcessor extends ModernNodeProcessor<Break> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof Break> {
        throw new Error("STUB");
    }
}
