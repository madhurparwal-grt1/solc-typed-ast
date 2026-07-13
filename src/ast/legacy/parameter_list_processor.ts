import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { VariableDeclaration } from "../implementation/declaration/variable_declaration";
import { ParameterList } from "../implementation/meta/parameter_list";
import { LegacyNodeProcessor } from "./node_processor";

export class LegacyParameterListProcessor extends LegacyNodeProcessor<ParameterList> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof ParameterList> {
        throw new Error("STUB");
    }
}
