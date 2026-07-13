import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { FunctionStateMutability, FunctionVisibility } from "../constants";
import { ParameterList } from "../implementation/meta/parameter_list";
import { FunctionTypeName } from "../implementation/type/function_type_name";
import { LegacyTypeNameProcessor } from "./type_name_processor";

export class LegacyFunctionTypeNameProcessor extends LegacyTypeNameProcessor<FunctionTypeName> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof FunctionTypeName> {
        throw new Error("STUB");
    }

    private detectStateMutability(attributes: any): FunctionStateMutability {
        throw new Error("STUB");
    }
}
