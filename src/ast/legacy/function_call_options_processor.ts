import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Expression } from "../implementation/expression/expression";
import { FunctionCallOptions } from "../implementation/expression/function_call_options";
import { LegacyExpressionProcessor } from "./expression_processor";

export class LegacyFunctionCallOptionsProcessor extends LegacyExpressionProcessor<FunctionCallOptions> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof FunctionCallOptions> {
        throw new Error("STUB");
    }
}
