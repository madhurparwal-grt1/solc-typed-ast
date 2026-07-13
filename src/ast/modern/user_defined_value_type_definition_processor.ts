import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { UserDefinedValueTypeDefinition } from "../implementation/declaration/user_defined_value_type_definition";
import { ElementaryTypeName } from "../implementation/type/elementary_type_name";
import { ModernNodeProcessor } from "./node_processor";

export class ModernUserDefinedValueTypeDefinitionProcessor extends ModernNodeProcessor<UserDefinedValueTypeDefinition> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof UserDefinedValueTypeDefinition> {
        throw new Error("STUB");
    }
}
