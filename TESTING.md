# Testing Guide for Geospace Project

## Quick Start

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch

# Interactive test UI
npm run test:ui
```

## Test Organization

All tests are located in `/src/tests/` for better organization and maintainability.

**Current test statistics can be viewed by running:**
```bash
npm run test:stats
```

**For detailed coverage information:**
```bash
npm run test:coverage
```

## Testing Framework

- **Vitest** - Fast unit testing framework
- **jsdom** - DOM environment for component testing
- **@testing-library/jest-dom** - Additional matchers

## Key Testing Patterns

### Mocking Strategy
- **Lit Components**: Mocked to avoid DOM registration issues
- **External Dependencies**: Comprehensive mocking of OpenLayers, signals, etc.
- **Browser APIs**: Full mock coverage for consistent testing

### Test Structure
- Tests are organized by feature/component
- Each test file focuses on a single module
- Mock isolation ensures tests don't interfere with each other

## Writing Tests

### Adding New Tests
1. Create test files in `/src/tests/`
2. Follow the naming pattern: `*.test.ts`
3. Use descriptive test names and organize with `describe` blocks
4. Mock external dependencies appropriately

### Test Configuration
- **Setup**: `src/tests/setup.ts` - Global mocks and browser API setup
- **Config**: `vitest.config.ts` - Test environment and coverage settings

## Best Practices

1. **Isolation**: Each test should be independent
2. **Mocking**: Mock external dependencies to avoid side effects
3. **Descriptive Names**: Use clear, descriptive test names
4. **Coverage**: Aim for good coverage of critical business logic
5. **Maintainability**: Keep tests readable and maintainable

## Troubleshooting

### Common Issues
- **ES Module Errors**: Ensure mocks are defined before imports
- **DOM Registration**: Use mock components instead of real Lit components
- **Async Operations**: Use proper async/await patterns

### Getting Help
- Run `npm run test:ui` for interactive debugging
- Check test output for specific error messages
- Review existing tests for patterns and examples
