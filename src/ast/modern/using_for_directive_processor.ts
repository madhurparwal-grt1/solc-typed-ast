import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { IdentifierPath } from "../implementation/meta";
import {
    UsingCustomizedOperator,
    UsingForDirective
} from "../implementation/meta/using_for_directive";
import { TypeName } from "../implementation/type/type_name";
import { UserDefinedTypeName } from "../implementation/type/user_defined_type_name";
import { ModernNodeProcessor } from "./node_processor";

export class ModernUsingForDirectiveProcessor extends ModernNodeProcessor<UsingForDirective> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof UsingForDirective> {
        throw new Error("STUB");
    }
}
