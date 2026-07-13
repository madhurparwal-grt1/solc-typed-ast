import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Expression } from "../implementation/expression/expression";
import { IndexAccess } from "../implementation/expression/index_access";
import { ModernExpressionProcessor } from "./expression_processor";

export class ModernIndexAccessProcessor extends ModernExpressionProcessor<IndexAccess> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof IndexAccess> {
        throw new Error("STUB");
    }
}
