import { ASTNode } from "../ast_node";
import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { ModifierDefinition } from "../implementation/declaration/modifier_definition";
import { OverrideSpecifier } from "../implementation/meta/override_specifier";
import { ParameterList } from "../implementation/meta/parameter_list";
import { StructuredDocumentation } from "../implementation/meta/structured_documentation";
import { Block } from "../implementation/statement/block";
import { LegacyNodeProcessor } from "./node_processor";

export class LegacyModifierDefinitionProcessor extends LegacyNodeProcessor<ModifierDefinition> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof ModifierDefinition> {
        throw new Error("STUB");
    }

    private extract(
        children: ASTNode[]
    ): [
        StructuredDocumentation | undefined,
        OverrideSpecifier | undefined,
        ParameterList,
        Block | undefined
    ] {
        throw new Error("STUB");
    }
}
