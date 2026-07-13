import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { VariableDeclaration } from "../implementation/declaration/variable_declaration";
import { Expression } from "../implementation/expression/expression";
import { VariableDeclarationStatement } from "../implementation/statement/variable_declaration_statement";
import { LegacyNodeProcessor } from "./node_processor";

export class LegacyVariableDeclarationStatementProcessor extends LegacyNodeProcessor<VariableDeclarationStatement> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof VariableDeclarationStatement> {
        throw new Error("STUB");
    }
}
