export function removeDuplicates(array) {
    return [...new Set(array)];
}

export function getFirst(array) {
    return array[0];
}

export function getLast(array) {
    return array[array.length - 1];
}