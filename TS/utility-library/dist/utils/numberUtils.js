"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.square = square;
exports.isEven = isEven;
exports.findMax = findMax;
function square(num) {
    return num * num;
}
function isEven(num) {
    return num % 2 === 0;
}
function findMax(a, b) {
    return Math.max(a, b);
}
