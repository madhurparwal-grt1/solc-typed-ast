import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Expression } from "../implementation/expression/expression";
import { MemberAccess } from "../implementation/expression/member_access";
import { ModernExpressionProcessor } from "./expression_processor";

export class ModernMemberAccessProcessor extends ModernExpressionProcessor<MemberAccess> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof MemberAccess> {
        throw new Error("STUB");
    }
}
