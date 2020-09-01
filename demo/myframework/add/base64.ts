import b64 from "base-64";

export function encode(s: string): string {
    return b64.encode(s);
}