import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Expression } from "../implementation/expression/expression";
import { IndexRangeAccess } from "../implementation/expression/index_range_access";
import { ModernExpressionProcessor } from "./expression_processor";

export class ModernIndexRangeAccessProcessor extends ModernExpressionProcessor<IndexRangeAccess> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof IndexRangeAccess> {
        throw new Error("STUB");
    }
}
