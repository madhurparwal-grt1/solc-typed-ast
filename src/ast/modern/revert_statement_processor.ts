import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { FunctionCall } from "../implementation/expression/function_call";
import { RevertStatement } from "../implementation/statement/revert_statement";
import { ModernNodeProcessor } from "./node_processor";

export class ModernRevertStatementProcessor extends ModernNodeProcessor<RevertStatement> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof RevertStatement> {
        throw new Error("STUB");
    }
}
