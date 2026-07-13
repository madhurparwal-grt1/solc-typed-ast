import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Expression } from "../implementation/expression/expression";
import { Return } from "../implementation/statement/return";
import { ModernNodeProcessor } from "./node_processor";

export class ModernReturnProcessor extends ModernNodeProcessor<Return> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof Return> {
        throw new Error("STUB");
    }
}
