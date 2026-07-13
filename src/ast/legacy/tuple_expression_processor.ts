import { ASTNode } from "../ast_node";
import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Expression } from "../implementation/expression/expression";
import { TupleExpression } from "../implementation/expression/tuple_expression";
import { split } from "../utils";
import { LegacyExpressionProcessor } from "./expression_processor";

export class LegacyTupleExpressionProcessor extends LegacyExpressionProcessor<TupleExpression> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof TupleExpression> {
        throw new Error("STUB");
    }

    private extractComponentsFromRaw(
        components: any[],
        reader: ASTReader,
        config: ASTReaderConfiguration
    ): Array<Expression | null> {
        throw new Error("STUB");
    }

    private extractComponentsFromTypeString(
        typeString: string,
        children: ASTNode[] | undefined
    ): Array<Expression | null> {
        throw new Error("STUB");
    }
}
