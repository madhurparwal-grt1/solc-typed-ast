import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { ElementaryTypeNameExpression } from "../implementation/expression/elementary_type_name_expression";
import { ElementaryTypeName } from "../implementation/type/elementary_type_name";
import { ModernExpressionProcessor } from "./expression_processor";

export class ModernElementaryTypeNameExpressionProcessor extends ModernExpressionProcessor<ElementaryTypeNameExpression> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof ElementaryTypeNameExpression> {
        throw new Error("STUB");
    }
}
