import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { BinaryOperation } from "../implementation/expression/binary_operation";
import { Expression } from "../implementation/expression/expression";
import { ModernExpressionProcessor } from "./expression_processor";

export class ModernBinaryOperationProcessor extends ModernExpressionProcessor<BinaryOperation> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof BinaryOperation> {
        throw new Error("STUB");
    }
}
