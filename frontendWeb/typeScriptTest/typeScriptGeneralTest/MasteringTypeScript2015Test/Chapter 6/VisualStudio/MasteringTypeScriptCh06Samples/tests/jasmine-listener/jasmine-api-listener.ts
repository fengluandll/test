
declare module jasmine {
    interface ITeamCityReporter {
        logItems: Array<string>;
        finished: boolean;
    }
} 

class JasmineApiListener {
    private _outputComplete: boolean;
    private _tcReporter: jasmine.ITeamCityReporter;

    constructor(tcreporter: jasmine.ITeamCityReporter) {
        this._outputComplete = false;

        this._tcReporter = tcreporter;
        var self = this;

        window.setInterval(() => {

            if (self._tcReporter.finished && !self._outputComplete) {
                var logItems = self._tcReporter.logItems;
                var resultNode = document.getElementById('teamCityReporterLog');
                resultNode.setAttribute('class', 'teamCityReporterLog');
                for (var i = 0; i < logItems.length; i++) {
                    // 
                    var resultItemNode = document.createElement('div');
                    resultItemNode.setAttribute('class', 'logentry');
                    var textNode = document.createTextNode(logItems[i]);
                    resultItemNode.appendChild(textNode);
                    resultNode.appendChild(resultItemNode);

                }
                self._outputComplete = true;

                var doneFlag = document.getElementById('teamCityResultsDone');
                var doneText = document.createTextNode("done");
                doneFlag.appendChild(doneText);
            }

        }, 3000);
    }

}