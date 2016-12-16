module.exports = function (config) {
    config.set({
        basePath: '../../',
        files: [
          'Scripts/underscore.js',
          'Scripts/jquery-1.8.0.js',
          'Scripts/jasmine-jquery/jasmine-jquery.js',
          'Scripts/jasmine-data-provider/SpecHelper.js',
          'tests/*.js'
        ],
        autoWatch: true,
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        plugins: [
                'karma-chrome-launcher',
                'karma-jasmine'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }
    });
};
