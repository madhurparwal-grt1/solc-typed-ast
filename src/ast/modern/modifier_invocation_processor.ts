import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { ModifierInvocationKind } from "../constants";
import { Expression } from "../implementation/expression/expression";
import { Identifier } from "../implementation/expression/identifier";
import { ModifierInvocation } from "../implementation/meta/modifier_invocation";
import { ModernNodeProcessor } from "./node_processor";

export class ModernModifierInvocationProcessor extends ModernNodeProcessor<ModifierInvocation> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof ModifierInvocation> {
        throw new Error("STUB");
    }
}
