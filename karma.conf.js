module.exports = function(config) {
  config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [
          'app/lib/angular/angular.js',
          'app/lib/angular-mocks/angular-mocks.js',
          'app/**/*.js',
          'test/*.spec.js'
      ],
      exclude: [
          'app/lib/**/*.js'
      ],
      preprocessors: {
      },
      reporters: ['progress'],
      plugins: [
          'karma-jasmine'
      ],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      singleRun: false,
      concurrency: Infinity
  })
}
