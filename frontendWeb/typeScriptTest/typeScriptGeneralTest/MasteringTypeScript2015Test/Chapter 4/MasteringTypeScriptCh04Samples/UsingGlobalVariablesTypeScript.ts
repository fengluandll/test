
class GlobalLogger {
    static logGlobalsToConsole() {
        for (var i = 0; i < CONTACT_EMAIL_ARRAY.length; i++) {
            console.log("found contact : " + CONTACT_EMAIL_ARRAY[i]);
        }
    }
}




class ContactLogger {
    static logContactData() {
        for (var i = 0; i < CONTACT_DATA.length; i++) {
            var contactDataItem: IContactData = CONTACT_DATA[i];
            console.log("Contact Text : " + contactDataItem.DisplayText
                + " Email : " + contactDataItem.Email
                );
        }
    }
}

window.onload = () => {
    //GlobalLogger.logGlobalsToConsole();
    ContactLogger.logContactData();
}

