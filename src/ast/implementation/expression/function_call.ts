import { ASTNode } from "../../ast_node";
import { ExternalReferenceType, FunctionCallKind } from "../../constants";
import { ErrorDefinition } from "../declaration/error_definition";
import { EventDefinition } from "../declaration/event_definition";
import { FunctionDefinition } from "../declaration/function_definition";
import { VariableDeclaration } from "../declaration/variable_declaration";
import { ElementaryTypeNameExpression } from "./elementary_type_name_expression";
import { Expression } from "./expression";
import { FunctionCallOptions } from "./function_call_options";
import { Identifier } from "./identifier";
import { MemberAccess } from "./member_access";
import { NewExpression } from "./new_expression";

export type CallableDefinition =
    | FunctionDefinition
    | EventDefinition
    | ErrorDefinition
    | VariableDeclaration;

export class FunctionCall extends Expression {
    /**
     * Type of call: `functionCall`, `typeConversion` or `structConstructorCall`.
     */
    kind: FunctionCallKind;

    /**
     * In the case that this is a struct constructor call,
     * this is the field name corresponding to every argument.
     * The field is `undefined` otherwise.
     */
    fieldNames?: string[];

    /**
     * Expression that defines the callee
     * For example `msg.sender.foo` in `msg.sender.foo()`
     * or `someContract.foo` in `someContract.foo()`.
     */
    vExpression: Expression;

    /**
     * Call arguments, e.g array with `1` and `2` expressions in `foo(1, 2)`
     */
    vArguments: Expression[];

    constructor(
        id: number,
        src: string,
        typeString: string,
        typeIdentifier: string | undefined,
        kind: FunctionCallKind,
        expression: Expression,
        args: Expression[],
        fieldNames?: string[],
        raw?: any
    ) {
        throw new Error("STUB");
    }

    get children(): readonly ASTNode[] {
        throw new Error("STUB");
    }

    /**
     * Identifier of the function name, e.g. `sha3(...)`
     */
    get vIdentifier(): string {
        throw new Error("STUB");
    }

    /**
     * Is either empty and in this case the `Identifier` is the function name
     * or if there is `MemberAccess` then the `memberName` is the second part of the `p1.p2`,
     * e.g. the `memberName` from `someUintArray.push(123)` is `push`.
     */
    get vMemberName(): string | undefined {
        throw new Error("STUB");
    }

    /**
     * Solidity builtin or user-defined function
     */
    get vFunctionCallType(): ExternalReferenceType {
        throw new Error("STUB");
    }

    /**
     * Called function or event definition reference
     */
    get vReferencedDeclaration(): CallableDefinition | undefined {
        throw new Error("STUB");
    }

    /**
     * `identifier.memberName` or if `memberName` is empty it is `identifier`
     */
    get vFunctionName(): string {
        throw new Error("STUB");
    }

    /**
     * When expression is `<actual function>.value(5)(...)`
     * returns `<actual function>` without `gas()`, `value()` call modifiers
     * or `<actual function>{gas: X, value: Y}` options.
     *
     * While loop is here due to `.gas()`, `.value()` modifiers
     * and call options can be nested.
     */
    get vCallee(): Expression {
        throw new Error("STUB");
    }
}
