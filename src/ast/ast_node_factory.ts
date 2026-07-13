import { ASTNode, ASTNodeConstructor } from "./ast_node";
import { ASTContext, ASTPostprocessor } from "./ast_reader";
import { FunctionStateMutability, FunctionVisibility } from "./constants";
import { ContractDefinition } from "./implementation/declaration/contract_definition";
import { EnumDefinition } from "./implementation/declaration/enum_definition";
import { EnumValue } from "./implementation/declaration/enum_value";
import { ErrorDefinition } from "./implementation/declaration/error_definition";
import { EventDefinition } from "./implementation/declaration/event_definition";
import { FunctionDefinition } from "./implementation/declaration/function_definition";
import { ModifierDefinition } from "./implementation/declaration/modifier_definition";
import { StructDefinition } from "./implementation/declaration/struct_definition";
import { UserDefinedValueTypeDefinition } from "./implementation/declaration/user_defined_value_type_definition";
import { VariableDeclaration } from "./implementation/declaration/variable_declaration";
import { Assignment } from "./implementation/expression/assignment";
import { BinaryOperation } from "./implementation/expression/binary_operation";
import { Conditional } from "./implementation/expression/conditional";
import { ElementaryTypeNameExpression } from "./implementation/expression/elementary_type_name_expression";
import { FunctionCall } from "./implementation/expression/function_call";
import { FunctionCallOptions } from "./implementation/expression/function_call_options";
import { Identifier } from "./implementation/expression/identifier";
import { IndexAccess } from "./implementation/expression/index_access";
import { IndexRangeAccess } from "./implementation/expression/index_range_access";
import { Literal } from "./implementation/expression/literal";
import { MemberAccess } from "./implementation/expression/member_access";
import { NewExpression } from "./implementation/expression/new_expression";
import { PrimaryExpression } from "./implementation/expression/primary_expression";
import { TupleExpression } from "./implementation/expression/tuple_expression";
import { UnaryOperation } from "./implementation/expression/unary_operation";
import { IdentifierPath } from "./implementation/meta/identifier_path";
import { ImportDirective } from "./implementation/meta/import_directive";
import { InheritanceSpecifier } from "./implementation/meta/inheritance_specifier";
import { ModifierInvocation } from "./implementation/meta/modifier_invocation";
import { OverrideSpecifier } from "./implementation/meta/override_specifier";
import { ParameterList } from "./implementation/meta/parameter_list";
import { PragmaDirective } from "./implementation/meta/pragma_directive";
import { SourceUnit } from "./implementation/meta/source_unit";
import { StructuredDocumentation } from "./implementation/meta/structured_documentation";
import { UsingForDirective } from "./implementation/meta/using_for_directive";
import { Block } from "./implementation/statement/block";
import { Break } from "./implementation/statement/break";
import { Continue } from "./implementation/statement/continue";
import { DoWhileStatement } from "./implementation/statement/do_while_statement";
import { EmitStatement } from "./implementation/statement/emit_statement";
import { ExpressionStatement } from "./implementation/statement/expression_statement";
import { ForStatement } from "./implementation/statement/for_statement";
import { IfStatement } from "./implementation/statement/if_statement";
import { InlineAssembly } from "./implementation/statement/inline_assembly";
import { PlaceholderStatement } from "./implementation/statement/placeholder_statement";
import { Return } from "./implementation/statement/return";
import { RevertStatement } from "./implementation/statement/revert_statement";
import { Throw } from "./implementation/statement/throw";
import { TryCatchClause } from "./implementation/statement/try_catch_clause";
import { TryStatement } from "./implementation/statement/try_statement";
import { UncheckedBlock } from "./implementation/statement/unchecked_block";
import { VariableDeclarationStatement } from "./implementation/statement/variable_declaration_statement";
import { WhileStatement } from "./implementation/statement/while_statement";
import { ArrayTypeName } from "./implementation/type/array_type_name";
import { ElementaryTypeName } from "./implementation/type/elementary_type_name";
import { FunctionTypeName } from "./implementation/type/function_type_name";
import { Mapping } from "./implementation/type/mapping";
import { UserDefinedTypeName } from "./implementation/type/user_defined_type_name";

/**
 * When applied to following tuple type:
 * ```
 * [id: number, src: string, type: string, rest: any]
 * ```
 * Skips first three arguments (`id`, `src` and `type`) and infers only `rest`.
 *
 * This will further be applied to constructor argument tuple types, like
 * `ConstructorParameters<typeof VariableDeclaration>` (for example)
 * to infer only `VariableDeclaration`-specific arguments as the necessary.
 * The leading `id`, `src` and `type` will be generated by `ASTNodeFactory`.
 */
type Specific<Args extends any[]> = Args["length"] extends 0
    ? undefined
    : ((...args: Args) => void) extends (id: number, src: string, ...rest: infer Rest) => void
      ? Rest
      : [];

export type IDMap = Map<number, number>;

const argExtractionMapping = new Map<ASTNodeConstructor<ASTNode>, (node: any) => any[]>([
    [ASTNode, (node: ASTNode): Specific<ConstructorParameters<typeof ASTNode>> => { throw new Error("STUB"); }],
    [
        ContractDefinition,
        (node: ContractDefinition): Specific<ConstructorParameters<typeof ContractDefinition>> => { throw new Error("STUB"); }
    ],
    [
        EnumDefinition,
        (node: EnumDefinition): Specific<ConstructorParameters<typeof EnumDefinition>> => { throw new Error("STUB"); }
    ],
    [
        EnumValue,
        (node: EnumValue): Specific<ConstructorParameters<typeof EnumValue>> => { throw new Error("STUB"); }
    ],
    [
        ErrorDefinition,
        (node: ErrorDefinition): Specific<ConstructorParameters<typeof ErrorDefinition>> => { throw new Error("STUB"); }
    ],
    [
        EventDefinition,
        (node: EventDefinition): Specific<ConstructorParameters<typeof EventDefinition>> => { throw new Error("STUB"); }
    ],
    [
        FunctionDefinition,
        (node: FunctionDefinition): Specific<ConstructorParameters<typeof FunctionDefinition>> => { throw new Error("STUB"); }
    ],
    [
        ModifierDefinition,
        (node: ModifierDefinition): Specific<ConstructorParameters<typeof ModifierDefinition>> => { throw new Error("STUB"); }
    ],
    [
        StructDefinition,
        (node: StructDefinition): Specific<ConstructorParameters<typeof StructDefinition>> => { throw new Error("STUB"); }
    ],
    [
        UserDefinedValueTypeDefinition,
        (
            node: UserDefinedValueTypeDefinition
        ): Specific<ConstructorParameters<typeof UserDefinedValueTypeDefinition>> => { throw new Error("STUB"); }
    ],
    [
        VariableDeclaration,
        (
            node: VariableDeclaration
        ): Specific<ConstructorParameters<typeof VariableDeclaration>> => { throw new Error("STUB"); }
    ],
    [
        Assignment,
        (node: Assignment): Specific<ConstructorParameters<typeof Assignment>> => { throw new Error("STUB"); }
    ],
    [
        BinaryOperation,
        (node: BinaryOperation): Specific<ConstructorParameters<typeof BinaryOperation>> => { throw new Error("STUB"); }
    ],
    [
        Conditional,
        (node: Conditional): Specific<ConstructorParameters<typeof Conditional>> => { throw new Error("STUB"); }
    ],
    [
        ElementaryTypeNameExpression,
        (
            node: ElementaryTypeNameExpression
        ): Specific<ConstructorParameters<typeof ElementaryTypeNameExpression>> => { throw new Error("STUB"); }
    ],
    [
        FunctionCallOptions,
        (
            node: FunctionCallOptions
        ): Specific<ConstructorParameters<typeof FunctionCallOptions>> => { throw new Error("STUB"); }
    ],
    [
        FunctionCall,
        (node: FunctionCall): Specific<ConstructorParameters<typeof FunctionCall>> => { throw new Error("STUB"); }
    ],
    [
        Identifier,
        (node: Identifier): Specific<ConstructorParameters<typeof Identifier>> => { throw new Error("STUB"); }
    ],
    [
        IdentifierPath,
        (node: IdentifierPath): Specific<ConstructorParameters<typeof IdentifierPath>> => { throw new Error("STUB"); }
    ],
    [
        IndexAccess,
        (node: IndexAccess): Specific<ConstructorParameters<typeof IndexAccess>> => { throw new Error("STUB"); }
    ],
    [
        IndexRangeAccess,
        (node: IndexRangeAccess): Specific<ConstructorParameters<typeof IndexRangeAccess>> => { throw new Error("STUB"); }
    ],
    [
        Literal,
        (node: Literal): Specific<ConstructorParameters<typeof Literal>> => { throw new Error("STUB"); }
    ],
    [
        MemberAccess,
        (node: MemberAccess): Specific<ConstructorParameters<typeof MemberAccess>> => { throw new Error("STUB"); }
    ],
    [
        NewExpression,
        (node: NewExpression): Specific<ConstructorParameters<typeof NewExpression>> => { throw new Error("STUB"); }
    ],
    [
        TupleExpression,
        (node: TupleExpression): Specific<ConstructorParameters<typeof TupleExpression>> => { throw new Error("STUB"); }
    ],
    [
        UnaryOperation,
        (node: UnaryOperation): Specific<ConstructorParameters<typeof UnaryOperation>> => { throw new Error("STUB"); }
    ],
    [
        ImportDirective,
        (node: ImportDirective): Specific<ConstructorParameters<typeof ImportDirective>> => { throw new Error("STUB"); }
    ],
    [
        InheritanceSpecifier,
        (
            node: InheritanceSpecifier
        ): Specific<ConstructorParameters<typeof InheritanceSpecifier>> => { throw new Error("STUB"); }
    ],
    [
        ModifierInvocation,
        (node: ModifierInvocation): Specific<ConstructorParameters<typeof ModifierInvocation>> => { throw new Error("STUB"); }
    ],
    [
        OverrideSpecifier,
        (node: OverrideSpecifier): Specific<ConstructorParameters<typeof OverrideSpecifier>> => { throw new Error("STUB"); }
    ],
    [
        ParameterList,
        (node: ParameterList): Specific<ConstructorParameters<typeof ParameterList>> => { throw new Error("STUB"); }
    ],
    [
        PragmaDirective,
        (node: PragmaDirective): Specific<ConstructorParameters<typeof PragmaDirective>> => { throw new Error("STUB"); }
    ],
    [
        SourceUnit,
        (node: SourceUnit): Specific<ConstructorParameters<typeof SourceUnit>> => { throw new Error("STUB"); }
    ],
    [
        StructuredDocumentation,
        (
            node: StructuredDocumentation
        ): Specific<ConstructorParameters<typeof StructuredDocumentation>> => { throw new Error("STUB"); }
    ],
    [
        UsingForDirective,
        (node: UsingForDirective): Specific<ConstructorParameters<typeof UsingForDirective>> => { throw new Error("STUB"); }
    ],
    [
        Block,
        (node: Block): Specific<ConstructorParameters<typeof Block>> => { throw new Error("STUB"); }
    ],
    [
        UncheckedBlock,
        (node: UncheckedBlock): Specific<ConstructorParameters<typeof UncheckedBlock>> => { throw new Error("STUB"); }
    ],
    [
        Break,
        (node: Break): Specific<ConstructorParameters<typeof Break>> => { throw new Error("STUB"); }
    ],
    [
        Continue,
        (node: Continue): Specific<ConstructorParameters<typeof Continue>> => { throw new Error("STUB"); }
    ],
    [
        DoWhileStatement,
        (node: DoWhileStatement): Specific<ConstructorParameters<typeof DoWhileStatement>> => { throw new Error("STUB"); }
    ],
    [
        EmitStatement,
        (node: EmitStatement): Specific<ConstructorParameters<typeof EmitStatement>> => { throw new Error("STUB"); }
    ],
    [
        ExpressionStatement,
        (
            node: ExpressionStatement
        ): Specific<ConstructorParameters<typeof ExpressionStatement>> => { throw new Error("STUB"); }
    ],
    [
        ForStatement,
        (node: ForStatement): Specific<ConstructorParameters<typeof ForStatement>> => { throw new Error("STUB"); }
    ],
    [
        IfStatement,
        (node: IfStatement): Specific<ConstructorParameters<typeof IfStatement>> => { throw new Error("STUB"); }
    ],
    [
        InlineAssembly,
        (node: InlineAssembly): Specific<ConstructorParameters<typeof InlineAssembly>> => { throw new Error("STUB"); }
    ],
    [
        PlaceholderStatement,
        (
            node: PlaceholderStatement
        ): Specific<ConstructorParameters<typeof PlaceholderStatement>> => { throw new Error("STUB"); }
    ],
    [
        Return,
        (node: Return): Specific<ConstructorParameters<typeof Return>> => { throw new Error("STUB"); }
    ],
    [
        RevertStatement,
        (node: RevertStatement): Specific<ConstructorParameters<typeof RevertStatement>> => { throw new Error("STUB"); }
    ],
    [
        Throw,
        (node: Throw): Specific<ConstructorParameters<typeof Throw>> => { throw new Error("STUB"); }
    ],
    [
        TryCatchClause,
        (node: TryCatchClause): Specific<ConstructorParameters<typeof TryCatchClause>> => { throw new Error("STUB"); }
    ],
    [
        TryStatement,
        (node: TryStatement): Specific<ConstructorParameters<typeof TryStatement>> => { throw new Error("STUB"); }
    ],
    [
        VariableDeclarationStatement,
        (
            node: VariableDeclarationStatement
        ): Specific<ConstructorParameters<typeof VariableDeclarationStatement>> => { throw new Error("STUB"); }
    ],
    [
        WhileStatement,
        (node: WhileStatement): Specific<ConstructorParameters<typeof WhileStatement>> => { throw new Error("STUB"); }
    ],
    [
        ArrayTypeName,
        (node: ArrayTypeName): Specific<ConstructorParameters<typeof ArrayTypeName>> => { throw new Error("STUB"); }
    ],
    [
        ElementaryTypeName,
        (node: ElementaryTypeName): Specific<ConstructorParameters<typeof ElementaryTypeName>> => { throw new Error("STUB"); }
    ],
    [
        FunctionTypeName,
        (node: FunctionTypeName): Specific<ConstructorParameters<typeof FunctionTypeName>> => { throw new Error("STUB"); }
    ],
    [
        Mapping,
        (node: Mapping): Specific<ConstructorParameters<typeof Mapping>> => { throw new Error("STUB"); }
    ],
    [
        UserDefinedTypeName,
        (
            node: UserDefinedTypeName
        ): Specific<ConstructorParameters<typeof UserDefinedTypeName>> => { throw new Error("STUB"); }
    ]
]);

export class ASTNodeFactory {
    context: ASTContext;
    postprocessor: ASTPostprocessor;

    private lastId: number;

    constructor(context = new ASTContext(), postprocessor = new ASTPostprocessor()) {
        this.context = context;
        this.postprocessor = postprocessor;

        this.lastId = context.lastId;
    }

    makeContractDefinition(
        ...args: Specific<ConstructorParameters<typeof ContractDefinition>>
    ): ContractDefinition {
        throw new Error("STUB");
    }

    makeEnumDefinition(
        ...args: Specific<ConstructorParameters<typeof EnumDefinition>>
    ): EnumDefinition {
        throw new Error("STUB");
    }

    makeEnumValue(...args: Specific<ConstructorParameters<typeof EnumValue>>): EnumValue {
        throw new Error("STUB");
    }

    makeErrorDefinition(
        ...args: Specific<ConstructorParameters<typeof ErrorDefinition>>
    ): ErrorDefinition {
        throw new Error("STUB");
    }

    makeEventDefinition(
        ...args: Specific<ConstructorParameters<typeof EventDefinition>>
    ): EventDefinition {
        throw new Error("STUB");
    }

    makeFunctionDefinition(
        ...args: Specific<ConstructorParameters<typeof FunctionDefinition>>
    ): FunctionDefinition {
        throw new Error("STUB");
    }

    makeModifierDefinition(
        ...args: Specific<ConstructorParameters<typeof ModifierDefinition>>
    ): ModifierDefinition {
        throw new Error("STUB");
    }

    makeStructDefinition(
        ...args: Specific<ConstructorParameters<typeof StructDefinition>>
    ): StructDefinition {
        throw new Error("STUB");
    }

    makeUserDefinedValueTypeDefinition(
        ...args: Specific<ConstructorParameters<typeof UserDefinedValueTypeDefinition>>
    ): UserDefinedValueTypeDefinition {
        throw new Error("STUB");
    }

    makeVariableDeclaration(
        ...args: Specific<ConstructorParameters<typeof VariableDeclaration>>
    ): VariableDeclaration {
        throw new Error("STUB");
    }

    makeAssignment(...args: Specific<ConstructorParameters<typeof Assignment>>): Assignment {
        throw new Error("STUB");
    }

    makeBinaryOperation(
        ...args: Specific<ConstructorParameters<typeof BinaryOperation>>
    ): BinaryOperation {
        throw new Error("STUB");
    }

    makeConditional(...args: Specific<ConstructorParameters<typeof Conditional>>): Conditional {
        throw new Error("STUB");
    }

    makeElementaryTypeNameExpression(
        ...args: Specific<ConstructorParameters<typeof ElementaryTypeNameExpression>>
    ): ElementaryTypeNameExpression {
        throw new Error("STUB");
    }

    makeFunctionCallOptions(
        ...args: Specific<ConstructorParameters<typeof FunctionCallOptions>>
    ): FunctionCallOptions {
        throw new Error("STUB");
    }

    makeFunctionCall(...args: Specific<ConstructorParameters<typeof FunctionCall>>): FunctionCall {
        throw new Error("STUB");
    }

    makeIdentifier(...args: Specific<ConstructorParameters<typeof Identifier>>): Identifier {
        throw new Error("STUB");
    }

    makeIdentifierPath(
        ...args: Specific<ConstructorParameters<typeof IdentifierPath>>
    ): IdentifierPath {
        throw new Error("STUB");
    }

    makeIndexAccess(...args: Specific<ConstructorParameters<typeof IndexAccess>>): IndexAccess {
        throw new Error("STUB");
    }

    makeIndexRangeAccess(
        ...args: Specific<ConstructorParameters<typeof IndexRangeAccess>>
    ): IndexRangeAccess {
        throw new Error("STUB");
    }

    makeLiteral(...args: Specific<ConstructorParameters<typeof Literal>>): Literal {
        throw new Error("STUB");
    }

    makeMemberAccess(...args: Specific<ConstructorParameters<typeof MemberAccess>>): MemberAccess {
        throw new Error("STUB");
    }

    makeNewExpression(
        ...args: Specific<ConstructorParameters<typeof NewExpression>>
    ): NewExpression {
        throw new Error("STUB");
    }

    makePrimaryExpression(
        ...args: Specific<ConstructorParameters<typeof PrimaryExpression>>
    ): PrimaryExpression {
        throw new Error("STUB");
    }

    makeTupleExpression(
        ...args: Specific<ConstructorParameters<typeof TupleExpression>>
    ): TupleExpression {
        throw new Error("STUB");
    }

    makeUnaryOperation(
        ...args: Specific<ConstructorParameters<typeof UnaryOperation>>
    ): UnaryOperation {
        throw new Error("STUB");
    }

    makeImportDirective(
        ...args: Specific<ConstructorParameters<typeof ImportDirective>>
    ): ImportDirective {
        throw new Error("STUB");
    }

    makeInheritanceSpecifier(
        ...args: Specific<ConstructorParameters<typeof InheritanceSpecifier>>
    ): InheritanceSpecifier {
        throw new Error("STUB");
    }

    makeModifierInvocation(
        ...args: Specific<ConstructorParameters<typeof ModifierInvocation>>
    ): ModifierInvocation {
        throw new Error("STUB");
    }

    makeOverrideSpecifier(
        ...args: Specific<ConstructorParameters<typeof OverrideSpecifier>>
    ): OverrideSpecifier {
        throw new Error("STUB");
    }

    makeParameterList(
        ...args: Specific<ConstructorParameters<typeof ParameterList>>
    ): ParameterList {
        throw new Error("STUB");
    }

    makePragmaDirective(
        ...args: Specific<ConstructorParameters<typeof PragmaDirective>>
    ): PragmaDirective {
        throw new Error("STUB");
    }

    makeSourceUnit(...args: Specific<ConstructorParameters<typeof SourceUnit>>): SourceUnit {
        throw new Error("STUB");
    }

    makeStructuredDocumentation(
        ...args: Specific<ConstructorParameters<typeof StructuredDocumentation>>
    ): StructuredDocumentation {
        throw new Error("STUB");
    }

    makeUsingForDirective(
        ...args: Specific<ConstructorParameters<typeof UsingForDirective>>
    ): UsingForDirective {
        throw new Error("STUB");
    }

    makeBlock(...args: Specific<ConstructorParameters<typeof Block>>): Block {
        throw new Error("STUB");
    }

    makeUncheckedBlock(
        ...args: Specific<ConstructorParameters<typeof UncheckedBlock>>
    ): UncheckedBlock {
        throw new Error("STUB");
    }

    makeBreak(...args: Specific<ConstructorParameters<typeof Break>>): Break {
        throw new Error("STUB");
    }

    makeContinue(...args: Specific<ConstructorParameters<typeof Continue>>): Continue {
        throw new Error("STUB");
    }

    makeDoWhileStatement(
        ...args: Specific<ConstructorParameters<typeof DoWhileStatement>>
    ): DoWhileStatement {
        throw new Error("STUB");
    }

    makeEmitStatement(
        ...args: Specific<ConstructorParameters<typeof EmitStatement>>
    ): EmitStatement {
        throw new Error("STUB");
    }

    makeExpressionStatement(
        ...args: Specific<ConstructorParameters<typeof ExpressionStatement>>
    ): ExpressionStatement {
        throw new Error("STUB");
    }

    makeForStatement(...args: Specific<ConstructorParameters<typeof ForStatement>>): ForStatement {
        throw new Error("STUB");
    }

    makeIfStatement(...args: Specific<ConstructorParameters<typeof IfStatement>>): IfStatement {
        throw new Error("STUB");
    }

    makeInlineAssembly(
        ...args: Specific<ConstructorParameters<typeof InlineAssembly>>
    ): InlineAssembly {
        throw new Error("STUB");
    }

    makePlaceholderStatement(
        ...args: Specific<ConstructorParameters<typeof PlaceholderStatement>>
    ): PlaceholderStatement {
        throw new Error("STUB");
    }

    makeReturn(...args: Specific<ConstructorParameters<typeof Return>>): Return {
        throw new Error("STUB");
    }

    makeRevertStatement(
        ...args: Specific<ConstructorParameters<typeof RevertStatement>>
    ): RevertStatement {
        throw new Error("STUB");
    }

    makeThrow(...args: Specific<ConstructorParameters<typeof Throw>>): Throw {
        throw new Error("STUB");
    }

    makeTryCatchClause(
        ...args: Specific<ConstructorParameters<typeof TryCatchClause>>
    ): TryCatchClause {
        throw new Error("STUB");
    }

    makeTryStatement(...args: Specific<ConstructorParameters<typeof TryStatement>>): TryStatement {
        throw new Error("STUB");
    }

    makeVariableDeclarationStatement(
        ...args: Specific<ConstructorParameters<typeof VariableDeclarationStatement>>
    ): VariableDeclarationStatement {
        throw new Error("STUB");
    }

    makeWhileStatement(
        ...args: Specific<ConstructorParameters<typeof WhileStatement>>
    ): WhileStatement {
        throw new Error("STUB");
    }

    makeArrayTypeName(
        ...args: Specific<ConstructorParameters<typeof ArrayTypeName>>
    ): ArrayTypeName {
        throw new Error("STUB");
    }

    makeElementaryTypeName(
        ...args: Specific<ConstructorParameters<typeof ElementaryTypeName>>
    ): ElementaryTypeName {
        throw new Error("STUB");
    }

    makeFunctionTypeName(
        ...args: Specific<ConstructorParameters<typeof FunctionTypeName>>
    ): FunctionTypeName {
        throw new Error("STUB");
    }

    makeMapping(...args: Specific<ConstructorParameters<typeof Mapping>>): Mapping {
        throw new Error("STUB");
    }

    makeUserDefinedTypeName(
        ...args: Specific<ConstructorParameters<typeof UserDefinedTypeName>>
    ): UserDefinedTypeName {
        throw new Error("STUB");
    }

    makeIdentifierFor(
        target:
            | VariableDeclaration
            | ContractDefinition
            | FunctionDefinition
            | StructDefinition
            | ErrorDefinition
            | EventDefinition
            | EnumDefinition
            | UserDefinedValueTypeDefinition
            | ImportDirective
    ): Identifier {
        throw new Error("STUB");
    }

    makeUnfinalized<T extends ASTNode>(
        type: ASTNodeConstructor<T>,
        ...args: Specific<ConstructorParameters<typeof type>>
    ): T {
        throw new Error("STUB");
    }

    make<T extends ASTNode>(
        type: ASTNodeConstructor<T>,
        ...args: Specific<ConstructorParameters<typeof type>>
    ): T {
        throw new Error("STUB");
    }

    /**
     * Return a copy of the given `node`, along with all its children.
     * Optionally pass in a `remapping` from ids in the old context, to ids of
     * the old context of any sibling nodes that may be referred in node (e.g.
     * by `referencedDeclaration` fields).
     */
    copy<T extends ASTNode>(node: T, remappings?: IDMap): T {
        throw new Error("STUB");
    }

    /**
     * Return a tuple containing a copy of the given `node` and all its
     * children, and a mapping of ids between the old nodes and the new nodes.
     *
     * Optionally pass in a `remapping` from ids in the old context, to ids of
     * the old context of any sibling nodes that may be referred in node (e.g.
     * by `referencedDeclaration` fields).
     */
    copyWithMapping<T extends ASTNode>(node: T, remappings?: IDMap): [T, IDMap] {
        throw new Error("STUB");
    }

    private patchIds(node: ASTNode, cache: IDMap): void {
        throw new Error("STUB");
    }

    private copyHelper<T extends ASTNode>(node: T, cache: IDMap): T {
        throw new Error("STUB");
    }

    /**
     * Return the list of arguments (after `id` and `src`) that need to be
     * passed to `node`'s constructor to recreate `node`.
     */
    getNodeConstructorArgs<T extends ASTNode>(node: T): any[] {
        throw new Error("STUB");
    }

    private copyValue(value: any, cache: IDMap): any {
        throw new Error("STUB");
    }

    private typeExtractor(arg: VariableDeclaration): string {
        throw new Error("STUB");
    }
}
