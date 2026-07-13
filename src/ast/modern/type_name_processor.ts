import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { TypeName, TypeNameConstructor } from "../implementation/type/type_name";
import { ModernNodeProcessor } from "./node_processor";

export class ModernTypeNameProcessor<T extends TypeName> extends ModernNodeProcessor<T> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<TypeNameConstructor<T>> {
        throw new Error("STUB");
    }
}
