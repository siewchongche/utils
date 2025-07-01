import { greet } from "./greeting";
import { Calculator } from "./calculator";

console.log("🚀 TypeScript project is running!");

// Example usage of the greeting utility
const message = greet("World");
console.log(message);

// Example usage of the calculator
const calc = new Calculator();
console.log(`2 + 3 = ${calc.add(2, 3)}`);
console.log(`10 - 4 = ${calc.subtract(10, 4)}`);
console.log(`5 * 6 = ${calc.multiply(5, 6)}`);
console.log(`15 / 3 = ${calc.divide(15, 3)}`);

export { greet, Calculator };
