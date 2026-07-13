import { CommentLoc, RawComment } from "./comment";
import { RawCommentKind } from "../constants";

function mkLoc(raw: any): CommentLoc {
    throw new Error("STUB");
}

export function parseComments(contents: string): (RawComment | string)[] {
    throw new Error("STUB");
}
