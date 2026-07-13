import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { EtherUnit, LiteralKind, TimeUnit } from "../constants";
import { Literal } from "../implementation/expression/literal";
import { ModernExpressionProcessor } from "./expression_processor";

export class ModernLiteralProcessor extends ModernExpressionProcessor<Literal> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof Literal> {
        throw new Error("STUB");
    }
}
