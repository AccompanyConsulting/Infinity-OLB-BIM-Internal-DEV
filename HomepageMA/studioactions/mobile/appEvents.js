define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_AppEvents_dcb543e491c84b2ab5688c564d7cba9d: function AS_AppEvents_dcb543e491c84b2ab5688c564d7cba9d(eventobject) {
        var self = this;
        try {
            applicationManager.applicationMode = "Mobile";
        } catch (err) {
            alert(err);
        }
    },
    AS_AppEvents_d7eeaf07cbf244f294cb9e00b4a9b6d8: function AS_AppEvents_d7eeaf07cbf244f294cb9e00b4a9b6d8(eventobject) {
         var self = this;
        try {
            _kony.mvc.initCompositeApp(true);
            var ApplicationManager = require('ApplicationManager');
            applicationManager = ApplicationManager.getApplicationManager();
       var sm = applicationManager.getStorageManager();  
           var config = applicationManager.getConfigurationManager();        
            config.configurations.setItem('CURRENCYCODE', 'USD');
            var langObjFromStorage = sm.getStoredItem("langObj");        
            if (!kony.sdk.isNullOrUndefined(langObjFromStorage)) {            
                config.configurations.setItem("LOCALE", config.locale[langObjFromStorage.language]);    
                config.configurations.setItem('DATEFORMAT', config.frontendDateFormat[config.getLocale()]);        
            } else {            
                config.configurations.setItem("LOCALE", "en_US");  
                config.configurations.setItem('DATEFORMAT', config.frontendDateFormat["en_US"]);        
            }        
            kony.i18n.setCurrentLocaleAsync(config.configurations.getItem("LOCALE"), function() {}, function() {});  
        } catch (err) {
            alert(err);
        }

    }
});