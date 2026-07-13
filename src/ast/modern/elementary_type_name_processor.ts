import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { ElementaryTypeName } from "../implementation/type/elementary_type_name";
import { ModernTypeNameProcessor } from "./type_name_processor";

export class ModernElementaryTypeNameProcessor extends ModernTypeNameProcessor<ElementaryTypeName> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof ElementaryTypeName> {
        throw new Error("STUB");
    }
}
