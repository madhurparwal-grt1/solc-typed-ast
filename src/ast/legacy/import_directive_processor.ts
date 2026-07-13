import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Identifier } from "../implementation/expression/identifier";
import { ImportDirective, SymbolAlias } from "../implementation/meta/import_directive";
import { LegacyNodeProcessor } from "./node_processor";

const aliasesFilterFn = (alias: SymbolAlias | null) => { throw new Error("STUB"); };

export class LegacyImportDirectiveProcessor extends LegacyNodeProcessor<ImportDirective> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof ImportDirective> {
        throw new Error("STUB");
    }
}
