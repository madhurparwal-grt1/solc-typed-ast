import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { FunctionCall } from "../implementation/expression/function_call";
import { EmitStatement } from "../implementation/statement/emit_statement";
import { LegacyNodeProcessor } from "./node_processor";

export class LegacyEmitStatementProcessor extends LegacyNodeProcessor<EmitStatement> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof EmitStatement> {
        throw new Error("STUB");
    }
}
