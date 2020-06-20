const { resolve } = require('path')
const { compilerOptions } = require('./tsconfig.json')
const { pathsToModuleNameMapper } = require('ts-jest/utils')

module.exports = {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: resolve(__dirname, '__tests__', 'coverage'),
  testEnvironment: 'node',
  preset: 'ts-jest',
  testMatch: [
    '**/__tests__/**/*.(spec|test).[jt]s'
  ],
  moduleNameMapper: pathsToModuleNameMapper(
    compilerOptions.paths,
    { prefix: '<rootDir>' }
  )
}
