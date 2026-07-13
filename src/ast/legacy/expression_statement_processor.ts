import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Expression } from "../implementation/expression/expression";
import { ExpressionStatement } from "../implementation/statement/expression_statement";
import { LegacyNodeProcessor } from "./node_processor";

export class LegacyExpressionStatementProcessor extends LegacyNodeProcessor<ExpressionStatement> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof ExpressionStatement> {
        throw new Error("STUB");
    }
}
