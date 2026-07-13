import { ASTNode } from "../ast/ast_node";
import { SourceUnit } from "../ast/implementation/meta/source_unit";

const SrcLocation = require("src-location");

export interface Point {
    line: number;
    column: number;
}

export interface Coordinates {
    start: Point;
    end: Point;
}

export class Location {
    fileName: string;
    src: string;

    constructor(fileName: string, src: string) {
        this.fileName = fileName;
        this.src = src;
    }

    static createForNode(node: ASTNode): Location {
        throw new Error("STUB");
    }

    getCoordinates(content?: string): Coordinates {
        throw new Error("STUB");
    }
}
