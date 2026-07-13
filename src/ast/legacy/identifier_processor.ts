import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Identifier } from "../implementation/expression/identifier";
import { LegacyExpressionProcessor } from "./expression_processor";

export class LegacyIdentifierProcessor extends LegacyExpressionProcessor<Identifier> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof Identifier> {
        throw new Error("STUB");
    }
}
