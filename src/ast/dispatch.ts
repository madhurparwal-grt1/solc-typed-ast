import { bytesToHex, equalsBytes } from "ethereum-cryptography/utils";
import { signatureHash } from "../typeIdentifiers";
import { ASTNodeConstructor } from "./ast_node";
import { StateVariableVisibility } from "./constants";
import { ContractDefinition } from "./implementation/declaration/contract_definition";
import { EventDefinition } from "./implementation/declaration/event_definition";
import { FunctionDefinition } from "./implementation/declaration/function_definition";
import { ModifierDefinition } from "./implementation/declaration/modifier_definition";
import { VariableDeclaration } from "./implementation/declaration/variable_declaration";
import { FunctionCall } from "./implementation/expression/function_call";
import { Identifier } from "./implementation/expression/identifier";
import { MemberAccess } from "./implementation/expression/member_access";
import { EmitStatement } from "./implementation/statement/emit_statement";

type FunctionLikeResolvable = FunctionDefinition | ModifierDefinition | EventDefinition;
type Resolvable = FunctionLikeResolvable | VariableDeclaration;

function getResolvableCollection(
    contract: ContractDefinition,
    target: ASTNodeConstructor<Resolvable>
): readonly Resolvable[] {
    if (target === FunctionDefinition) {
        return contract.vFunctions;
    }

    if (target === ModifierDefinition) {
        return contract.vModifiers;
    }

    if (target === EventDefinition) {
        return contract.vEvents;
    }

    if (target === VariableDeclaration) {
        return contract.vStateVariables;
    }

    throw new Error("Unable to select resolvable collection for target " + target.name);
}

export function resolve<T extends Resolvable>(
    scope: ContractDefinition,
    target: T,
    onlyParents = false
): T | undefined {
    let finder: (candidate: Resolvable) => boolean;

    if (target instanceof VariableDeclaration) {
        finder = (candidate) => { throw new Error("STUB"); };
    } else {
        const hash = signatureHash(target);

        finder = (candidate) => { throw new Error("STUB"); };
    }

    for (const base of scope.vLinearizedBaseContracts) {
        if (onlyParents && base === scope) {
            continue;
        }

        const collection = getResolvableCollection(
            base,
            target.constructor as ASTNodeConstructor<T>
        );

        const result = collection.find(finder);

        if (result) {
            return result as T;
        }
    }

    return undefined;
}

/**
 * Resolve an inheritable contract property following the standard C3 linearization order.
 *
 * @param constructor The class constructor of the type of contract
 *   property we are resolving. One of `FunctionDefinition`,
 *   `ModifierDefinition`, `EventDefinition` or `VariableDeclaration`
 * @param name Name of the property we are attempting to resolve. Note that
 *   if we are resolving functions or events there may be multiple results as
 *   functions/events can have the same name and different arguments
 * @param onlyParents boolean flag specifing that we want to only look through the bases of the contract.
 */
export function resolveByName<T extends Resolvable>(
    scope: ContractDefinition,
    constructor: ASTNodeConstructor<T>,
    name: string,
    onlyParents = false
): T[] {
    throw new Error("STUB");
}

function isExplicitlyBound(call: FunctionCall): boolean {
    throw new Error("STUB");
}

export function resolveEvent(
    scope: ContractDefinition,
    statement: EmitStatement
): EventDefinition | undefined {
    throw new Error("STUB");
}

export function resolveCallable(
    scope: ContractDefinition,
    definition: FunctionDefinition | VariableDeclaration,
    onlyParents = false
): FunctionDefinition | VariableDeclaration | undefined {
    throw new Error("STUB");
}
