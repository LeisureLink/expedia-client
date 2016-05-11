'use strict';

module.exports = wallaby => ({
  files: [
    'src/**/*',
    'test/**/*',
    { pattern: 'test/**/*.tests.js', ignore: true }
  ],
  tests: [
    'test/**/*.tests.js'
  ],
  env: {
    type: 'node',
    runner: 'node'
    // env: {
    //   params: 'DEBUG=*;'
    // }
  },
  testFramework: 'ava',
  bootstrap: () => require('./test/helpers'),
  compilers: {
    '**/*.js': wallaby.compilers.babel()
  }
});
