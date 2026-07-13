import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { ErrorDefinition } from "../implementation/declaration/error_definition";
import { ParameterList } from "../implementation/meta/parameter_list";
import { StructuredDocumentation } from "../implementation/meta/structured_documentation";
import { ModernNodeProcessor } from "./node_processor";

export class ModernErrorDefinitionProcessor extends ModernNodeProcessor<ErrorDefinition> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof ErrorDefinition> {
        throw new Error("STUB");
    }
}
