import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Expression } from "../implementation/expression/expression";
import { DoWhileStatement } from "../implementation/statement/do_while_statement";
import { Statement } from "../implementation/statement/statement";
import { LegacyNodeProcessor } from "./node_processor";

export class LegacyDoWhileStatementProcessor extends LegacyNodeProcessor<DoWhileStatement> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof DoWhileStatement> {
        throw new Error("STUB");
    }
}
