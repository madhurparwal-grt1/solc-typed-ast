import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Expression } from "../implementation/expression/expression";
import { IfStatement } from "../implementation/statement/if_statement";
import { Statement } from "../implementation/statement/statement";
import { LegacyNodeProcessor } from "./node_processor";

export class LegacyIfStatementProcessor extends LegacyNodeProcessor<IfStatement> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof IfStatement> {
        throw new Error("STUB");
    }
}
