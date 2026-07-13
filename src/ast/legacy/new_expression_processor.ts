import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { NewExpression } from "../implementation/expression/new_expression";
import { TypeName } from "../implementation/type/type_name";
import { LegacyExpressionProcessor } from "./expression_processor";

export class LegacyNewExpressionProcessor extends LegacyExpressionProcessor<NewExpression> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof NewExpression> {
        throw new Error("STUB");
    }
}
