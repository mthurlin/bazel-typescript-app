import {add, add64} from "../add/add";

export function doubleString(s: string): string {
    return add(s, s);
}

export function doubleString64(s: string): string {
    return add64(s, s);
}