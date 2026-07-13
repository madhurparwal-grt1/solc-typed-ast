import { PPAble } from "./pretty_printing";
import { StructEqualityComparable } from "./struct_equality";
import { assert } from "./utils";

export type Position = { offset: number; line: number; column: number };
export type Range = { start: Position; end: Position };

let nNodes = 0;

/**
 * Generic tree node with pretty-printer, optional source tripple information
 * and structural equality comparison. Useful for building ASTs.
 */
export abstract class Node implements StructEqualityComparable, PPAble {
    readonly id: number;
    readonly src?: Range;

    constructor(src?: Range) {
        this.id = nNodes++;
        this.src = src;
    }

    abstract pp(): string;
    abstract getFields(): any[];

    getChildren(): Node[] {
        return this.getFields().filter((field) => { throw new Error("STUB"); });
    }

    walk(cb: (node: Node) => void): void {
        cb(this);

        for (const child of this.getChildren()) {
            child.walk(cb);
        }
    }

    get requiredSrc(): Range {
        throw new Error("STUB");
    }

    getSourceFragment(src: string): string {
        throw new Error("STUB");
    }
}
