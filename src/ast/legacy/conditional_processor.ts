import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Conditional } from "../implementation/expression/conditional";
import { Expression } from "../implementation/expression/expression";
import { LegacyExpressionProcessor } from "./expression_processor";

export class LegacyConditionalProcessor extends LegacyExpressionProcessor<Conditional> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof Conditional> {
        throw new Error("STUB");
    }
}
