var GlobalLogger = (function () {
    function GlobalLogger() {
    }
    GlobalLogger.logGlobalsToConsole = function () {
        for (var i = 0; i < CONTACT_EMAIL_ARRAY.length; i++) {
            console.log("found contact : " + CONTACT_EMAIL_ARRAY[i]);
        }
    };
    return GlobalLogger;
})();
var ContactLogger = (function () {
    function ContactLogger() {
    }
    ContactLogger.logContactData = function () {
        for (var i = 0; i < CONTACT_DATA.length; i++) {
            var contactDataItem = CONTACT_DATA[i];
            console.log("Contact Text : " + contactDataItem.DisplayText + " Email : " + contactDataItem.Email);
        }
    };
    return ContactLogger;
})();
window.onload = function () {
    //GlobalLogger.logGlobalsToConsole();
    ContactLogger.logContactData();
};
//# sourceMappingURL=UsingGlobalVariablesTypeScript.js.map