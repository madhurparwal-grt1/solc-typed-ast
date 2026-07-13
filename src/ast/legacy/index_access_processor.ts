import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Expression } from "../implementation/expression/expression";
import { IndexAccess } from "../implementation/expression/index_access";
import { LegacyExpressionProcessor } from "./expression_processor";

export class LegacyIndexAccessProcessor extends LegacyExpressionProcessor<IndexAccess> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof IndexAccess> {
        throw new Error("STUB");
    }
}
