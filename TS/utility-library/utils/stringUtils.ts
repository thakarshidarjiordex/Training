export function capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function reverse(text: string): string {
    return text.split("").reverse().join("");
}

export function countCharacters(text: string): number {
    return text.length;
}