import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { IdentifierPath } from "../implementation/meta/identifier_path";
import { ModernNodeProcessor } from "./node_processor";

export class ModernIdentifierPathProcessor extends ModernNodeProcessor<IdentifierPath> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof IdentifierPath> {
        throw new Error("STUB");
    }
}
