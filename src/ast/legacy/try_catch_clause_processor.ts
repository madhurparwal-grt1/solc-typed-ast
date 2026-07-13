import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { ParameterList } from "../implementation/meta/parameter_list";
import { Block } from "../implementation/statement/block";
import { TryCatchClause } from "../implementation/statement/try_catch_clause";
import { LegacyNodeProcessor } from "./node_processor";

export class LegacyTryCatchClauseProcessor extends LegacyNodeProcessor<TryCatchClause> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof TryCatchClause> {
        throw new Error("STUB");
    }
}
