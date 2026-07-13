import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { ContractKind } from "../constants";
import { ContractDefinition } from "../implementation/declaration/contract_definition";
import { Expression } from "../implementation/expression";
import { StructuredDocumentation } from "../implementation/meta";
import { ModernNodeProcessor } from "./node_processor";

export class ModernContractDefinitionProcessor extends ModernNodeProcessor<ContractDefinition> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof ContractDefinition> {
        throw new Error("STUB");
    }
}
