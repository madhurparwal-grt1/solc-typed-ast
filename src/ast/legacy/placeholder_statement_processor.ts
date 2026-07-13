import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { PlaceholderStatement } from "../implementation/statement/placeholder_statement";
import { LegacyNodeProcessor } from "./node_processor";

export class LegacyPlaceholderStatementProcessor extends LegacyNodeProcessor<PlaceholderStatement> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof PlaceholderStatement> {
        throw new Error("STUB");
    }
}
