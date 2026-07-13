import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Expression } from "../implementation/expression/expression";
import { FunctionCallOptions } from "../implementation/expression/function_call_options";
import { ModernExpressionProcessor } from "./expression_processor";

export class ModernFunctionCallOptionsProcessor extends ModernExpressionProcessor<FunctionCallOptions> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof FunctionCallOptions> {
        throw new Error("STUB");
    }
}
