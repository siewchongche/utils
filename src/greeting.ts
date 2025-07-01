/**
 * Greets a person with a friendly message
 * @param name - The name of the person to greet
 * @returns A greeting message
 */
export function greet(name: string): string {
  return `Hello, ${name}! Welcome to TypeScript!`;
}

/**
 * Greets multiple people
 * @param names - Array of names to greet
 * @returns Array of greeting messages
 */
export function greetMultiple(names: string[]): string[] {
  return names.map((name) => greet(name));
}
