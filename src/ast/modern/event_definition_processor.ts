import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { EventDefinition } from "../implementation/declaration/event_definition";
import { ParameterList } from "../implementation/meta/parameter_list";
import { StructuredDocumentation } from "../implementation/meta/structured_documentation";
import { ModernNodeProcessor } from "./node_processor";

export class ModernEventDefinitionProcessor extends ModernNodeProcessor<EventDefinition> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof EventDefinition> {
        throw new Error("STUB");
    }
}
