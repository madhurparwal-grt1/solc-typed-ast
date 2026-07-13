import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { FunctionCallKind } from "../constants";
import { Expression } from "../implementation/expression/expression";
import { FunctionCall } from "../implementation/expression/function_call";
import { LegacyExpressionProcessor } from "./expression_processor";

export class LegacyFunctionCallProcessor extends LegacyExpressionProcessor<FunctionCall> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof FunctionCall> {
        throw new Error("STUB");
    }

    private detectKind(attributes: any): FunctionCallKind {
        throw new Error("STUB");
    }

    private detectFieldNames(attributes: any): string[] | undefined {
        throw new Error("STUB");
    }
}
