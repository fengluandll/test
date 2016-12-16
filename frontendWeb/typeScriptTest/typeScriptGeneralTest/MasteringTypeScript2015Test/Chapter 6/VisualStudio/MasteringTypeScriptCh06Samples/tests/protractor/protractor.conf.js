exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['*.js']
    ,
    onPrepare: function() {
        var tcReporter = require('../../Scripts/jasmine-reporters/teamcity_reporter.js');
        jasmine.getEnv().addReporter(new tcReporter.TeamCityReporter());
    }
}