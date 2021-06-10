module.exports = {
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },

  // A list of reporter names that Jest uses when writing coverage reports
  // coverageReporters: [
  //   'text',
  // "lcov",
  // ],

  // A set of global variables that need to be available in all test environments
  globals: {},

  // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
  maxWorkers: '100%',

  // The root directory that Jest should scan for tests and modules within
  rootDir: 'src/',

  // The number of seconds after which a test is considered as slow and reported as such in the results.
  slowTestThreshold: 5,

  // The test environment that will be used for testing, need jsdom for enzume mounting a component
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/?(*.)test.[tj]s?(x)',
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    '/node_modules/',
  ],

  // The regexp pattern or array of patterns that Jest uses to detect test files
  // testRegex: [],

  // Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
  timers: 'real',

  // Indicates whether each individual test should be reported during the run
  verbose: true,

  // this is needed so we can import scss from jsx
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },

  // required to work with React 16
  setupFiles: [
    '<rootDir>/test/jest-setup.js',
  ],
};
