import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { ModifierDefinition } from "../implementation/declaration/modifier_definition";
import { ParameterList } from "../implementation/meta/parameter_list";
import { StructuredDocumentation } from "../implementation/meta/structured_documentation";
import { Block } from "../implementation/statement/block";
import { ModernNodeProcessor } from "./node_processor";
import { OverrideSpecifier } from "../implementation/meta/override_specifier";

export class ModernModifierDefinitionProcessor extends ModernNodeProcessor<ModifierDefinition> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof ModifierDefinition> {
        throw new Error("STUB");
    }
}
