import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { VariableDeclaration } from "../implementation/declaration/variable_declaration";
import { Expression } from "../implementation/expression/expression";
import { VariableDeclarationStatement } from "../implementation/statement/variable_declaration_statement";
import { ModernNodeProcessor } from "./node_processor";

const declarationsFilterFn = (declaration: unknown | null) => { throw new Error("STUB"); };

export class ModernVariableDeclarationStatementProcessor extends ModernNodeProcessor<VariableDeclarationStatement> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof VariableDeclarationStatement> {
        throw new Error("STUB");
    }
}
