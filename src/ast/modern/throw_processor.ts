import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Throw } from "../implementation/statement/throw";
import { ModernNodeProcessor } from "./node_processor";

export class ModernThrowProcessor extends ModernNodeProcessor<Throw> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof Throw> {
        throw new Error("STUB");
    }
}
