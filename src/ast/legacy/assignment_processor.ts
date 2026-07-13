import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Assignment } from "../implementation/expression/assignment";
import { Expression } from "../implementation/expression/expression";
import { LegacyExpressionProcessor } from "./expression_processor";

export class LegacyAssignmentProcessor extends LegacyExpressionProcessor<Assignment> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof Assignment> {
        throw new Error("STUB");
    }
}
