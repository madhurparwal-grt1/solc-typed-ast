import { TypeIdentifier } from "./type_identifier";

export function ppTypeIdentifierList(ts: Array<TypeIdentifier | null>): string {
    return `$_${ts.map((t) => { throw new Error("STUB"); }).join("_$_")}_$`;
}

export function bigintAbs(a: bigint): bigint {
    return a < 0n ? -a : a;
}
