
ErrorHelper = (function() {
    return {
        containsErrors: function (response) {
            if (!response || !response.responseText)
                return false;

            var errorValue = response.responseText;

            if (String(errorValue.failure) == "true"
                || Boolean(errorValue.failure)) {
                return true;
            }
            return false;
        },
        trace: function (msg) {
            var traceMessage = msg;
            if (msg.responseText) {
                traceMessage = msg.responseText.errorMessage;
            }
            console.log("[" + new Date().toLocaleDateString() + "] " + traceMessage);
        }
    }
})();


window.onload = function() {
    var failureMessage = {
        responseText: { "failure": true, "errorMessage": "Unhandled Exception" } 
    };
    var failureMessageString = {
        responseText: { "failure": "true", "errorMessage": "Unhandled Exception" } 
    };

    var successMessage = { responseText: { "failure": false } };

    if (ErrorHelper.containsErrors(failureMessage))
        ErrorHelper.trace(failureMessage);
    if (ErrorHelper.containsErrors(failureMessageString))
        ErrorHelper.trace(failureMessage);

    if (!ErrorHelper.containsErrors(successMessage))
        ErrorHelper.trace("success");
}
