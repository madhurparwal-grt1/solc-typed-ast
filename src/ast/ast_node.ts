import { ASTNodeFormatter } from "./ast_node_formatter";
import { ASTContext } from "./ast_reader";
import { SourceLocation, parseSourceLocation } from "./utils";

export type ASTNodeCallback = (node: ASTNode) => void;
export type ASTNodeSelector = (node: ASTNode) => boolean;

const formatter = new ASTNodeFormatter();

export class ASTNode {
    /**
     * Current tree context of the node
     */
    context?: ASTContext;

    /**
     * Unique identifier number for the node in the tree context
     */
    id: number;

    /**
     * Source mapping data corresponting to the AST node.
     *
     * The value has format `start:length:sourceIndex`:
     * - `start` is the starting index of the corresponding
     *   code fragment substring in the source string;
     * - `length` is the length of corresponding code fragment substring;
     * - `sourceIndex` is the index number of the source unit (file),
     *   that contains the AST node.
     *
     * To get parsed values, use `sourceInfo` accessor.
     */
    src: string;

    /**
     * Raw original Solc AST node that was used to create current node.
     */
    raw?: any;

    /**
     * The AST node that is containing current node
     */
    parent?: ASTNode;

    constructor(id: number, src: string, raw?: any) {
        this.id = id;
        this.src = src;
        this.raw = raw;
    }

    protected pickNodes(...args: Array<any | Iterable<any>>): ASTNode[] {
        throw new Error("STUB");
    }

    /**
     * Sets `parent` to the current node for each of the accessible children node.
     */
    acceptChildren(): void {
        throw new Error("STUB");
    }

    /**
     * Type of the AST node
     */
    get type(): string {
        throw new Error("STUB");
    }

    /**
     * Returns current node AST context. Throws an error if no context is set.
     */
    get requiredContext(): ASTContext {
        throw new Error("STUB");
    }

    /**
     * Returns children nodes of the current node
     */
    get children(): readonly ASTNode[] {
        throw new Error("STUB");
    }

    /**
     * Returns the first immediate child of the node,
     * or `undefined` if the node has no children.
     */
    get firstChild(): ASTNode | undefined {
        throw new Error("STUB");
    }

    /**
     * Returns the last immediate child of the node,
     * or `undefined` if the node has no children.
     */
    get lastChild(): ASTNode | undefined {
        throw new Error("STUB");
    }

    /**
     * Returns the node immediately preceding the current one
     * in its `parent`'s `children`.
     *
     * Returns `undefined` if the current node is the first child
     * in its `parent`'s children.
     */
    get previousSibling(): ASTNode | undefined {
        throw new Error("STUB");
    }

    /**
     * Returns the node immediately following the current one
     * in its `parent`'s children.
     *
     * Returns `undefined` if the current node is the last child
     * in its `parent`'s children.
     */
    get nextSibling(): ASTNode | undefined {
        throw new Error("STUB");
    }

    /**
     * Returns most parent node in tree hierarchy
     */
    get root(): ASTNode {
        throw new Error("STUB");
    }

    /**
     * Returns parsed parts of the `src` property value
     */
    get sourceInfo(): SourceLocation {
        throw new Error("STUB");
    }

    walk(callback: ASTNodeCallback): void {
        const walker = this.createWalker(callback);

        walker(this);
    }

    walkChildren(callback: ASTNodeCallback): void {
        const walker = this.createWalker(callback);

        for (const node of this.children) {
            walker(node);
        }
    }

    walkParents(callback: ASTNodeCallback): void {
        let node: ASTNode | undefined = this.parent;

        while (node) {
            callback(node);

            node = node.parent;
        }
    }

    getChildren(inclusive = false): ASTNode[] {
        const nodes: ASTNode[] = [];
        const callback: ASTNodeCallback = (node) => {
            nodes.push(node);
        };

        if (inclusive) {
            this.walk(callback);
        } else {
            this.walkChildren(callback);
        }

        return nodes;
    }

    getChildrenBySelector<T extends ASTNode>(selector: ASTNodeSelector, inclusive = true): T[] {
        const nodes: T[] = [];
        const callback: ASTNodeCallback = (node) => {
            if (selector(node)) {
                nodes.push(node as T);
            }
        };

        if (inclusive) {
            this.walk(callback);
        } else {
            this.walkChildren(callback);
        }

        return nodes;
    }

    getChildrenByType<T extends ASTNode>(type: ASTNodeConstructor<T>, inclusive = false): T[] {
        return this.getChildrenBySelector((node) => { throw new Error("STUB"); }, inclusive);
    }

    getChildrenByTypeString<T extends ASTNode>(typeString: string, inclusive = false): T[] {
        throw new Error("STUB");
    }

    getParents(): ASTNode[] {
        const nodes: ASTNode[] = [];

        this.walkParents((node) => {
            throw new Error("STUB");
        });

        return nodes;
    }

    getClosestParentBySelector<T extends ASTNode>(selector: ASTNodeSelector): T | undefined {
        let node = this.parent as T | undefined;

        while (node) {
            if (selector(node)) {
                return node;
            }

            node = node.parent as T | undefined;
        }

        return undefined;
    }

    getClosestParentByType<T extends ASTNode>(type: ASTNodeConstructor<T>): T | undefined {
        return this.getClosestParentBySelector((node) => { throw new Error("STUB"); });
    }

    getClosestParentByTypeString<T extends ASTNode>(typeString: string): T | undefined {
        throw new Error("STUB");
    }

    getParentsBySelector<T extends ASTNode>(selector: ASTNodeSelector): T[] {
        throw new Error("STUB");
    }

    /**
     * Returns string representation of the node properties.

     * @param depth The number of children node levels to output
     */
    print(depth = 0): string {
        return formatter.format(this, depth);
    }

    getFieldValues(): Map<string, any> {
        return new Map(Object.entries(this));
    }

    getGettersValues(): Map<string, any> {
        const getters: string[] = [];

        let proto = Object.getPrototypeOf(this);

        while (proto) {
            for (const name of Object.getOwnPropertyNames(proto)) {
                if (name === "__proto__") {
                    continue;
                }

                const descriptor = Object.getOwnPropertyDescriptor(proto, name);

                if (descriptor && typeof descriptor.get === "function" && !getters.includes(name)) {
                    getters.push(name);
                }
            }

            proto = Object.getPrototypeOf(proto);
        }

        const result = new Map<string, any>();

        for (const g of getters) {
            result.set(g, this[g as keyof this]);
        }

        return result;
    }

    /**
     * Extracts and returns substring from `source`,
     * that corresponds to `src` property value of the current node.
     *
     * In other words, returns corresponding code fragment substring.
     */
    extractSourceFragment(source: Uint8Array): Uint8Array {
        throw new Error("STUB");
    }

    private createWalker(callback: ASTNodeCallback): ASTNodeCallback {
        const walker: ASTNodeCallback = (node) => {
            callback(node);

            for (const child of node.children) {
                walker(child);
            }
        };

        return walker;
    }
}

export class ASTNodeWithChildren<T extends ASTNode> extends ASTNode {
    protected ownChildren: T[] = [];

    get children(): readonly T[] {
        throw new Error("STUB");
    }

    removeChild(node: T): T {
        throw new Error("STUB");
    }

    appendChild(node: T): T {
        throw new Error("STUB");
    }

    insertBefore(node: T, referenceNode: T): T {
        throw new Error("STUB");
    }

    insertAfter(node: T, referenceNode: T): T {
        throw new Error("STUB");
    }

    insertAtBeginning(node: T): T {
        throw new Error("STUB");
    }

    replaceChild(newNode: T, oldNode: T): T {
        throw new Error("STUB");
    }
}

export type ASTNodeConstructor<T extends ASTNode> = new (
    id: number,
    src: string,
    ...args: any[]
) => T;

/**
 * Replace the node `oldNode` in the tree with `newNode`.
 *
 * If `p` is the parent of `oldNode`, this function needs to find a property
 * `propName` of `p` such that `p[propName] === oldNode`.
 *
 * Once found, it re-assigns `p[propName] = newNode` and sets
 * `newNode.parent=p` using `acceptChildren`. Since `children` is a getter
 * there is nothing further to do.
 */
export function replaceNode(oldNode: ASTNode, newNode: ASTNode): void {
    throw new Error("STUB");
}
