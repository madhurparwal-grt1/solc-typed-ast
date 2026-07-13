import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { PlaceholderStatement } from "../implementation/statement/placeholder_statement";
import { ModernNodeProcessor } from "./node_processor";

export class ModernPlaceholderStatementProcessor extends ModernNodeProcessor<PlaceholderStatement> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof PlaceholderStatement> {
        throw new Error("STUB");
    }
}
