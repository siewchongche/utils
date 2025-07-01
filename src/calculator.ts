/**
 * A simple calculator class with basic arithmetic operations
 */
export class Calculator {
  /**
   * Adds two numbers
   * @param a - First number
   * @param b - Second number
   * @returns The sum of a and b
   */
  add(a: number, b: number): number {
    return a + b;
  }

  /**
   * Subtracts the second number from the first
   * @param a - First number
   * @param b - Second number
   * @returns The difference of a and b
   */
  subtract(a: number, b: number): number {
    return a - b;
  }

  /**
   * Multiplies two numbers
   * @param a - First number
   * @param b - Second number
   * @returns The product of a and b
   */
  multiply(a: number, b: number): number {
    return a * b;
  }

  /**
   * Divides the first number by the second
   * @param a - First number (dividend)
   * @param b - Second number (divisor)
   * @returns The quotient of a divided by b
   * @throws Error when b is zero
   */
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }

  /**
   * Calculates the power of a number
   * @param base - The base number
   * @param exponent - The exponent
   * @returns base raised to the power of exponent
   */
  power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }
}
