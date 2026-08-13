export function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function reverseString(text) {
    return text.split("").reverse().join("");
}