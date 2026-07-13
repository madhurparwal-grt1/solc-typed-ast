import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { InlineAssembly } from "../implementation/statement/inline_assembly";
import { LegacyNodeProcessor } from "./node_processor";

export class LegacyInlineAssemblyProcessor extends LegacyNodeProcessor<InlineAssembly> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof InlineAssembly> {
        throw new Error("STUB");
    }
}
