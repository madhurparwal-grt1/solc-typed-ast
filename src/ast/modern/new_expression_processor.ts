import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { NewExpression } from "../implementation/expression/new_expression";
import { TypeName } from "../implementation/type/type_name";
import { ModernExpressionProcessor } from "./expression_processor";

export class ModernNewExpressionProcessor extends ModernExpressionProcessor<NewExpression> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof NewExpression> {
        throw new Error("STUB");
    }
}
