import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { ElementaryTypeName } from "../implementation/type/elementary_type_name";
import { LegacyTypeNameProcessor } from "./type_name_processor";

export class LegacyElementaryTypeNameProcessor extends LegacyTypeNameProcessor<ElementaryTypeName> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof ElementaryTypeName> {
        throw new Error("STUB");
    }
}
