module.exports = {
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  setupFilesAfterEnv: ['<rootDir>/src/lib/jest/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/src/lib/jest/cssTransform.js',
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Components
    '@/common/(.*)': '<rootDir>/src/components/common/$1',
    '@/page/(.*)': '<rootDir>/src/components/page/$1',

    // Layouts
    '@/layout/*': '<rootDir>/src/layout/*',

    // Config
    '@/apis': '<rootDir>/src/config/apis',
    '@/constants': '<rootDir>/src/config/constants',

    // Hooks
    '@/hooks/(.*)': '<rootDir>/src/hooks/$1',

    // Lib
    '@/redux/(.*)': '<rootDir>/src/lib/redux/$1',
    '@/firebase': '<rootDir>/src/lib/firebase',
    '@/bugsnag': '<rootDir>/src/lib/bugsnag',

    // Styles
    '@/globalStyle/(.*)': '<rootDir>/src/styles/global/$1',
    '@/override/(.*)': '<rootDir>/src/styles/override/$1',

    // Utils
    '@/helpers': '<rootDir>/src/utils/helpers',
    '@/tracker': '<rootDir>/src/utils/tracker',
    '@/lstorage': '<rootDir>/src/utils/lstorage',
    '@/request': '<rootDir>/src/utils/request',

    // Node modules
    '@/node-modules': '<rootDir>/node_modules',
  },
};
