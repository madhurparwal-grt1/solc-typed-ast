import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { Expression, ExpressionConstructor } from "../implementation/expression/expression";
import { ModernNodeProcessor } from "./node_processor";

export class ModernExpressionProcessor<T extends Expression> extends ModernNodeProcessor<T> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<ExpressionConstructor<T>> {
        throw new Error("STUB");
    }
}
