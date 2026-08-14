import {
    capitalize,
    reverseString,
    randomNumber,
    sum,
    isEmail
} from "./utils/index.js";


console.log(capitalize("javascript"));

console.log(reverseString("hello"));

console.log(
    isEmail("test@gmail.com")
);

console.log(
    randomNumber(1, 100)
);

console.log(
    sum([10, 20, 30])
);