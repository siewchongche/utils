import { Calculator } from "../calculator";

describe("Calculator", () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("add", () => {
    it("should add two positive numbers correctly", () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    it("should handle negative numbers", () => {
      expect(calculator.add(-1, 5)).toBe(4);
    });

    it("should handle zero", () => {
      expect(calculator.add(0, 7)).toBe(7);
    });
  });

  describe("subtract", () => {
    it("should subtract two numbers correctly", () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    it("should handle negative results", () => {
      expect(calculator.subtract(3, 8)).toBe(-5);
    });
  });

  describe("multiply", () => {
    it("should multiply two numbers correctly", () => {
      expect(calculator.multiply(5, 6)).toBe(30);
    });

    it("should handle zero", () => {
      expect(calculator.multiply(0, 10)).toBe(0);
    });
  });

  describe("divide", () => {
    it("should divide two numbers correctly", () => {
      expect(calculator.divide(15, 3)).toBe(5);
    });

    it("should throw error when dividing by zero", () => {
      expect(() => calculator.divide(10, 0)).toThrow(
        "Division by zero is not allowed"
      );
    });

    it("should handle decimal results", () => {
      expect(calculator.divide(7, 2)).toBe(3.5);
    });
  });

  describe("power", () => {
    it("should calculate power correctly", () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    it("should handle zero exponent", () => {
      expect(calculator.power(5, 0)).toBe(1);
    });

    it("should handle negative exponent", () => {
      expect(calculator.power(2, -2)).toBe(0.25);
    });
  });
});
