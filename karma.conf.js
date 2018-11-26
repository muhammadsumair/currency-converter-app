module.exports = function(config) {
  config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [
          'lib/angular/angular.js',
          'lib/angular-mocks/angular-mocks.js',
          'app/**/*.js',
          'test/*.spec.js'
      ],
      exclude: [
      ],
      preprocessors: {
      },
      reporters: ['progress', 'coverage'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      singleRun: false,
      concurrency: Infinity
  })
}
