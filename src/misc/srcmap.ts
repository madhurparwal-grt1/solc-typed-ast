export type DecodedBytecodeSourceMapEntry = {
    start: number;
    length: number;
    sourceIndex: number;
    jump: "i" | "o" | "-" | undefined;
};

export function fastParseBytecodeSourceMapping(sourceMap: string): DecodedBytecodeSourceMapEntry[] {
    throw new Error("STUB");
}

/**
 * @see https://ethereum.stackexchange.com/a/26216 for the original implementation
 */
export function parseBytecodeSourceMapping(sourceMap: string): DecodedBytecodeSourceMapEntry[] {
    throw new Error("STUB");
}
