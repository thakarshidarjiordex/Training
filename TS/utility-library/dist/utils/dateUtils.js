"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentYear = getCurrentYear;
exports.getCurrentDate = getCurrentDate;
function getCurrentYear() {
    return new Date().getFullYear();
}
function getCurrentDate() {
    return new Date().toLocaleDateString();
}
