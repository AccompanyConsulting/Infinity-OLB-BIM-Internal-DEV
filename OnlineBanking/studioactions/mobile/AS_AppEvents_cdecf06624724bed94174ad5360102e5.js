function AS_AppEvents_cdecf06624724bed94174ad5360102e5(eventobject) {
    var self = this;
    let params = eventobject;
    var ApplicationManager = require('ApplicationManager');
    applicationManager = ApplicationManager.getApplicationManager();
    if (params.launchparams != null) {
        if (params.launchmode == 1) {
            kony.print("--------> This is inside the same app !!!");
        } else if (params.launchmode == 3) {
            kony.print("---------> This is calling other app !!!")
            if (params.launchparams.authToken) {
                applicationManager.handleAppService(params);
            }
        }
    }
}