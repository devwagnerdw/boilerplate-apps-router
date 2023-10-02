module.exports = {
  // Define o ambiente de teste como jsdom, que simula o ambiente do navegador.
  testEnvironment: 'jsdom',

  // Ignora os diretórios '/node_modules/' e '/.next/' ao buscar por arquivos de teste.
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],

  // Habilita a cobertura de código durante os testes.
  collectCoverage: true,

  // Especifica os padrões de arquivos a serem incluídos na cobertura de código.
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/app/***',
    '!src/lib/registry.tsx',
    '!src/types/**',
    '!src/styles/**'
  ],

  // Configuração para arquivos de configuração do ambiente de teste.
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],

  // Define os caminhos dos módulos para serem usados nos testes.
  modulePaths: ['<rootDir>/src/'],

  // Configura a transformação de arquivos JavaScript e TypeScript usando o Babel com presets específicos.
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  // https://github.com/styled-components/styled-components/issues/4081
  // v6 of styled-components doesn't inject styles in test environment
  // we should to force it to use the browser version
  moduleNameMapper: {
    '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js'
  }
}
