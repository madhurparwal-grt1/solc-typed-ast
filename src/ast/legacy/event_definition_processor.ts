import { ASTNode } from "../ast_node";
import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { EventDefinition } from "../implementation/declaration/event_definition";
import { ParameterList } from "../implementation/meta/parameter_list";
import { StructuredDocumentation } from "../implementation/meta/structured_documentation";
import { LegacyNodeProcessor } from "./node_processor";

export class LegacyEventDefinitionProcessor extends LegacyNodeProcessor<EventDefinition> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof EventDefinition> {
        throw new Error("STUB");
    }

    private extract(children: ASTNode[]): [StructuredDocumentation | undefined, ParameterList] {
        throw new Error("STUB");
    }
}
