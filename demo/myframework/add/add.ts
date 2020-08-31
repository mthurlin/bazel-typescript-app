import {encode} from "./base64";

export function add(a: string, b: string): string {
    return a + b;
}

export function add64(a: string, b: string): string {
    return encode(a) + encode(b);
}