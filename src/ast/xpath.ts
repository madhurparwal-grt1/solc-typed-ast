import { ASTNode } from "./ast_node";

const jSel = require("jsel");

/* istanbul ignore next */
jSel.addFunction(null, "is", (...args: any[]) => {
    throw new Error("STUB");
});

interface SchemaInterface {
    nodeName: (node: any) => string;
    childNodes: (node: any) => readonly any[];
    attributes: (node: any) => { [attribute: string]: any };
    nodeValue: (node: any) => any;
}

const SKIP = new Set(["context", "requiredContext", "raw", "children", "ownChildren"]);

const ASTNodeSchema: SchemaInterface = {
    nodeName: (node: ASTNode) => { throw new Error("STUB"); },
    childNodes: (node: ASTNode) => { throw new Error("STUB"); },

    attributes: (node: ASTNode) => {
        throw new Error("STUB");
    },

    nodeValue: () => { throw new Error("STUB"); }
};

export class XPath {
    private dom: any;

    constructor(node: ASTNode) {
        throw new Error("STUB");
    }

    query(path: string): any {
        return this.dom.selectAll(path);
    }
}
