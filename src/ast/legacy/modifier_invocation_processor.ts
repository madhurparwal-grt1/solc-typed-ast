import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Expression } from "../implementation/expression/expression";
import { Identifier } from "../implementation/expression/identifier";
import { ModifierInvocation } from "../implementation/meta/modifier_invocation";
import { LegacyNodeProcessor } from "./node_processor";

export class LegacyModifierInvocationProcessor extends LegacyNodeProcessor<ModifierInvocation> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof ModifierInvocation> {
        throw new Error("STUB");
    }
}
