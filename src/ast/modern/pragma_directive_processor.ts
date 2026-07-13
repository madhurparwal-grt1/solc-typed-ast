import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { PragmaDirective } from "../implementation/meta/pragma_directive";
import { ModernNodeProcessor } from "./node_processor";

export class ModernPragmaDirectiveProcessor extends ModernNodeProcessor<PragmaDirective> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof PragmaDirective> {
        throw new Error("STUB");
    }
}
