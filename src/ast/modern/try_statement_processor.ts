import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { FunctionCall } from "../implementation/expression/function_call";
import { TryCatchClause } from "../implementation/statement/try_catch_clause";
import { TryStatement } from "../implementation/statement/try_statement";
import { ModernNodeProcessor } from "./node_processor";

export class ModernTryStatementProcessor extends ModernNodeProcessor<TryStatement> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof TryStatement> {
        throw new Error("STUB");
    }
}
