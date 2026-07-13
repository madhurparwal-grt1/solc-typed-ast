import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Identifier } from "../implementation/expression/identifier";
import { ImportDirective, SymbolAlias } from "../implementation/meta/import_directive";
import { ModernNodeProcessor } from "./node_processor";

export class ModernImportDirectiveProcessor extends ModernNodeProcessor<ImportDirective> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof ImportDirective> {
        throw new Error("STUB");
    }
}
