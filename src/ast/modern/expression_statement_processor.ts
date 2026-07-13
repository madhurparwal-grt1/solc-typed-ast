import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Expression } from "../implementation/expression/expression";
import { ExpressionStatement } from "../implementation/statement/expression_statement";
import { ModernNodeProcessor } from "./node_processor";

export class ModernExpressionStatementProcessor extends ModernNodeProcessor<ExpressionStatement> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof ExpressionStatement> {
        throw new Error("STUB");
    }
}
