import { ASTReader, ASTReaderConfiguration } from "../ast_reader";
import { DataLocation, Mutability, StateVariableVisibility } from "../constants";
import { VariableDeclaration } from "../implementation/declaration/variable_declaration";
import { Expression } from "../implementation/expression/expression";
import { OverrideSpecifier } from "../implementation/meta/override_specifier";
import { StructuredDocumentation } from "../implementation/meta/structured_documentation";
import { TypeName } from "../implementation/type/type_name";
import { ModernNodeProcessor } from "./node_processor";

export class ModernVariableDeclarationProcessor extends ModernNodeProcessor<VariableDeclaration> {
    process(
        reader: ASTReader,
        config: ASTReaderConfiguration,
        raw: any
    ): ConstructorParameters<typeof VariableDeclaration> {
        throw new Error("STUB");
    }
}
