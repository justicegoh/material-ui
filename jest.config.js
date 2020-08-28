module.exports = {
  collectCoverageFrom: ['packages/*/src/*.{js,ts,tsx}'],
  coverageReporters: ['html', 'lcovonly', 'text-summary'],
  moduleNameMapper: {
    '^material-ui([^/]*)(.*)$': '<rootDir>/packages/material-ui$1/src$2'
  },
  preset: 'ts-jest',
  setupFiles: ['./scripts/build.js'],
  testPathIgnorePatterns: ['/node_modules/', '/_[^/]*$', '\\.d\\.ts$']
};
