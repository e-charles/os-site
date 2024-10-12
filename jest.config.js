module.exports = require('next/jest')()({
  moduleDirectories: ['<rootDir>', 'node_modules'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
});
