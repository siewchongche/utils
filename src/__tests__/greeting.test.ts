import { greet, greetMultiple } from "../greeting";

describe("Greeting Utils", () => {
  describe("greet", () => {
    it("should greet a person with their name", () => {
      const result = greet("Alice");
      expect(result).toBe("Hello, Alice! Welcome to TypeScript!");
    });

    it("should handle empty string", () => {
      const result = greet("");
      expect(result).toBe("Hello, ! Welcome to TypeScript!");
    });

    it("should handle special characters", () => {
      const result = greet("John-Doe");
      expect(result).toBe("Hello, John-Doe! Welcome to TypeScript!");
    });
  });

  describe("greetMultiple", () => {
    it("should greet multiple people", () => {
      const names = ["Alice", "Bob", "Charlie"];
      const result = greetMultiple(names);
      expect(result).toEqual([
        "Hello, Alice! Welcome to TypeScript!",
        "Hello, Bob! Welcome to TypeScript!",
        "Hello, Charlie! Welcome to TypeScript!",
      ]);
    });

    it("should handle empty array", () => {
      const result = greetMultiple([]);
      expect(result).toEqual([]);
    });

    it("should handle single name", () => {
      const result = greetMultiple(["Single"]);
      expect(result).toEqual(["Hello, Single! Welcome to TypeScript!"]);
    });
  });
});
