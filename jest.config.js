// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "node",
  collectCoverageFrom: [
    'src/**/*.js',
    "!src/.next/**",
    "!**/node_modules/**",
  ],
  // testMatch: ["**/__tests__/**/?(*.)+(spec|test).js?(x)"],
  testMatch: null,
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  coveragePathIgnorePatterns: [
    "/node_modules/",
  ],
  reporters: ["jest-spec-reporter"],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  verbose: true,
  bail: false,
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
}

