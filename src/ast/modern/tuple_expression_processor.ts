import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Expression } from "../implementation/expression/expression";
import { TupleExpression } from "../implementation/expression/tuple_expression";
import { ModernExpressionProcessor } from "./expression_processor";

export class ModernTupleExpressionProcessor extends ModernExpressionProcessor<TupleExpression> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof TupleExpression> {
        throw new Error("STUB");
    }

    private extractComponents(
        components: any[],
        reader: ASTReader,
        config: ASTReaderConfiguration
    ): Array<Expression | null> {
        throw new Error("STUB");
    }
}
