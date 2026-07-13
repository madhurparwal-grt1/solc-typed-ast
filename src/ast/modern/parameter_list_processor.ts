import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { VariableDeclaration } from "../implementation/declaration/variable_declaration";
import { ParameterList } from "../implementation/meta/parameter_list";
import { ModernNodeProcessor } from "./node_processor";

export class ModernParameterListProcessor extends ModernNodeProcessor<ParameterList> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof ParameterList> {
        throw new Error("STUB");
    }
}
