import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Expression } from "../implementation/expression/expression";
import { ExpressionStatement } from "../implementation/statement/expression_statement";
import { ForStatement } from "../implementation/statement/for_statement";
import { Statement } from "../implementation/statement/statement";
import { VariableDeclarationStatement } from "../implementation/statement/variable_declaration_statement";
import { ModernNodeProcessor } from "./node_processor";

export class ModernForStatementProcessor extends ModernNodeProcessor<ForStatement> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof ForStatement> {
        throw new Error("STUB");
    }
}
