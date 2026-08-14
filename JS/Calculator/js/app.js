import { add } from "./addition.js";
import { subtract } from "./subtraction.js";


const result = document.getElementById("result");

const a = 10;
const b = 5;


result.textContent = `
Addition: ${add(a, b)}
Subtraction: ${subtract(a, b)}
`;