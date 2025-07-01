# TypeScript Project

A modern TypeScript project with comprehensive tooling including ESLint, Jest testing, and proper build configuration.

## Features

- ✅ TypeScript 5.3+ with strict configuration
- ✅ ESLint with TypeScript rules
- ✅ Jest testing framework with ts-jest
- ✅ Source maps and declaration files
- ✅ Modern ES2022 target
- ✅ Comprehensive .gitignore
- ✅ Example utilities and tests

## Project Structure

```
├── src/
│   ├── index.ts              # Main entry point
│   └── utils/
│       ├── greeting.ts       # Greeting utility functions
│       ├── calculator.ts     # Calculator class
│       └── __tests__/        # Test files
│           ├── greeting.test.ts
│           └── calculator.test.ts
├── dist/                     # Compiled JavaScript (generated)
├── package.json              # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── .eslintrc.js             # ESLint configuration
├── jest.config.js           # Jest configuration
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Build the project:

```bash
npm run build
```

3. Run the application:

```bash
npm start
```

## Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run start` - Run the compiled JavaScript
- `npm run dev` - Run TypeScript directly with ts-node
- `npm run watch` - Watch for changes and recompile
- `npm run test` - Run tests with Jest
- `npm run lint` - Check code with ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run clean` - Remove compiled files

## Development

### Running in Development Mode

For development, you can run the TypeScript code directly without compilation:

```bash
npm run dev
```

### Testing

Run the test suite:

```bash
npm test
```

Run tests in watch mode:

```bash
npm test -- --watch
```

### Code Quality

Check for linting issues:

```bash
npm run lint
```

Automatically fix linting issues:

```bash
npm run lint:fix
```

## Example Usage

The project includes example utilities:

### Greeting Utility

```typescript
import { greet, greetMultiple } from './src/utils/greeting';

console.log(greet('World')); // "Hello, World! Welcome to TypeScript!"
console.log(greetMultiple(['Alice', 'Bob'])); // Array of greetings
```

### Calculator Class

```typescript
import { Calculator } from './src/utils/calculator';

const calc = new Calculator();
console.log(calc.add(2, 3));      // 5
console.log(calc.multiply(4, 5)); // 20
console.log(calc.power(2, 3));    // 8
```

## Configuration

### TypeScript Configuration

The `tsconfig.json` includes:

- Strict type checking
- ES2022 target
- Source maps and declaration files
- Modern module resolution

### ESLint Configuration

The `.eslintrc.js` includes:

- TypeScript-specific rules
- Recommended configurations
- Custom rule adjustments

### Jest Configuration

The `jest.config.js` includes:

- TypeScript support with ts-jest
- Coverage reporting
- Test file patterns

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## License

MIT License - see the LICENSE file for details.
