import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { ContractKind } from "../constants";
import { ContractDefinition } from "../implementation/declaration/contract_definition";
import { StructuredDocumentation } from "../implementation/meta/structured_documentation";
import { LegacyNodeProcessor } from "./node_processor";

export class LegacyContractDefinitionProcessor extends LegacyNodeProcessor<ContractDefinition> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof ContractDefinition> {
        throw new Error("STUB");
    }
}
