import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { FunctionCallKind } from "../constants";
import { Expression } from "../implementation/expression/expression";
import { FunctionCall } from "../implementation/expression/function_call";
import { ModernExpressionProcessor } from "./expression_processor";

export class ModernFunctionCallProcessor extends ModernExpressionProcessor<FunctionCall> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof FunctionCall> {
        throw new Error("STUB");
    }
}
