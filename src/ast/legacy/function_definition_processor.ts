import { ASTNode } from "../ast_node";
import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { FunctionStateMutability, FunctionVisibility } from "../constants";
import { FunctionDefinition } from "../implementation/declaration/function_definition";
import { ModifierInvocation } from "../implementation/meta/modifier_invocation";
import { OverrideSpecifier } from "../implementation/meta/override_specifier";
import { ParameterList } from "../implementation/meta/parameter_list";
import { StructuredDocumentation } from "../implementation/meta/structured_documentation";
import { Block } from "../implementation/statement/block";
import { detectFunctionKind } from "../utils";
import { LegacyNodeProcessor } from "./node_processor";

export class LegacyFunctionDefinitionProcessor extends LegacyNodeProcessor<FunctionDefinition> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof FunctionDefinition> {
        throw new Error("STUB");
    }

    private detectStateMutability(attributes: any): FunctionStateMutability {
        throw new Error("STUB");
    }

    private extract(
        children: ASTNode[]
    ): [
        StructuredDocumentation | undefined,
        OverrideSpecifier | undefined,
        ParameterList,
        ParameterList,
        ModifierInvocation[],
        Block | undefined
    ] {
        throw new Error("STUB");
    }
}
