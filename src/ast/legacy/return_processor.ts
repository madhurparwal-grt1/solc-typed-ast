import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Expression } from "../implementation/expression/expression";
import { Return } from "../implementation/statement/return";
import { LegacyNodeProcessor } from "./node_processor";

export class LegacyReturnProcessor extends LegacyNodeProcessor<Return> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof Return> {
        throw new Error("STUB");
    }
}
