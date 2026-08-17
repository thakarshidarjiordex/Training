"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtils = exports.NumberUtils = exports.StringUtils = void 0;
var StringUtils;
(function (StringUtils) {
    function capitalize(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    StringUtils.capitalize = capitalize;
    function reverse(text) {
        return text.split("").reverse().join("");
    }
    StringUtils.reverse = reverse;
})(StringUtils || (exports.StringUtils = StringUtils = {}));
var NumberUtils;
(function (NumberUtils) {
    function square(num) {
        return num * num;
    }
    NumberUtils.square = square;
    function isEven(num) {
        return num % 2 === 0;
    }
    NumberUtils.isEven = isEven;
})(NumberUtils || (exports.NumberUtils = NumberUtils = {}));
var DateUtils;
(function (DateUtils) {
    function getYear() {
        return new Date().getFullYear();
    }
    DateUtils.getYear = getYear;
    function getDate() {
        return new Date().toLocaleDateString();
    }
    DateUtils.getDate = getDate;
})(DateUtils || (exports.DateUtils = DateUtils = {}));
