import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Continue } from "../implementation/statement/continue";
import { ModernNodeProcessor } from "./node_processor";

export class ModernContinueProcessor extends ModernNodeProcessor<Continue> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof Continue> {
        throw new Error("STUB");
    }
}
