import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { InlineAssembly, YulNode } from "../implementation/statement/inline_assembly";
import { ModernNodeProcessor } from "./node_processor";

export class ModernInlineAssemblyProcessor extends ModernNodeProcessor<InlineAssembly> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof InlineAssembly> {
        throw new Error("STUB");
    }
}
