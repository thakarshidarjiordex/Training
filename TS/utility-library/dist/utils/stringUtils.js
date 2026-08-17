"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = capitalize;
exports.reverse = reverse;
exports.countCharacters = countCharacters;
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
function reverse(text) {
    return text.split("").reverse().join("");
}
function countCharacters(text) {
    return text.length;
}
