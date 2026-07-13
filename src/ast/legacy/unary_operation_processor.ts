import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Expression } from "../implementation/expression/expression";
import { UnaryOperation } from "../implementation/expression/unary_operation";
import { LegacyExpressionProcessor } from "./expression_processor";

export class LegacyUnaryOperationProcessor extends LegacyExpressionProcessor<UnaryOperation> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof UnaryOperation> {
        throw new Error("STUB");
    }
}
