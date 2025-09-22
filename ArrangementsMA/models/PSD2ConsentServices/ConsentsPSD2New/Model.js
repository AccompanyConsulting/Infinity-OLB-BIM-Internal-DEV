/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "ConsentsPSD2New", "objectService" : "PSD2ConsentServices"};

    var setterFunctions = {
        consentId: function(val, state) {
            context["field"] = "consentId";
            context["metadata"] = (objectMetadata ? objectMetadata["consentId"] : null);
            state['consentId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountIdList: function(val, state) {
            context["field"] = "accountIdList";
            context["metadata"] = (objectMetadata ? objectMetadata["accountIdList"] : null);
            state['accountIdList'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        customerId: function(val, state) {
            context["field"] = "customerId";
            context["metadata"] = (objectMetadata ? objectMetadata["customerId"] : null);
            state['customerId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        status: function(val, state) {
            context["field"] = "status";
            context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
            state['status'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountId: function(val, state) {
            context["field"] = "accountId";
            context["metadata"] = (objectMetadata ? objectMetadata["accountId"] : null);
            state['accountId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountName: function(val, state) {
            context["field"] = "accountName";
            context["metadata"] = (objectMetadata ? objectMetadata["accountName"] : null);
            state['accountName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        IBAN: function(val, state) {
            context["field"] = "IBAN";
            context["metadata"] = (objectMetadata ? objectMetadata["IBAN"] : null);
            state['IBAN'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountType: function(val, state) {
            context["field"] = "accountType";
            context["metadata"] = (objectMetadata ? objectMetadata["accountType"] : null);
            state['accountType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        availableBalance: function(val, state) {
            context["field"] = "availableBalance";
            context["metadata"] = (objectMetadata ? objectMetadata["availableBalance"] : null);
            state['availableBalance'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        consentExpiryDate: function(val, state) {
            context["field"] = "consentExpiryDate";
            context["metadata"] = (objectMetadata ? objectMetadata["consentExpiryDate"] : null);
            state['consentExpiryDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        consentDuration: function(val, state) {
            context["field"] = "consentDuration";
            context["metadata"] = (objectMetadata ? objectMetadata["consentDuration"] : null);
            state['consentDuration'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        consentType: function(val, state) {
            context["field"] = "consentType";
            context["metadata"] = (objectMetadata ? objectMetadata["consentType"] : null);
            state['consentType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountConsentType: function(val, state) {
            context["field"] = "accountConsentType";
            context["metadata"] = (objectMetadata ? objectMetadata["accountConsentType"] : null);
            state['accountConsentType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        authToken: function(val, state) {
            context["field"] = "authToken";
            context["metadata"] = (objectMetadata ? objectMetadata["authToken"] : null);
            state['authToken'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        currencyCode: function(val, state) {
            context["field"] = "currencyCode";
            context["metadata"] = (objectMetadata ? objectMetadata["currencyCode"] : null);
            state['currencyCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isAccountInfoRequired: function(val, state) {
            context["field"] = "isAccountInfoRequired";
            context["metadata"] = (objectMetadata ? objectMetadata["isAccountInfoRequired"] : null);
            state['isAccountInfoRequired'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isBalanceRequired: function(val, state) {
            context["field"] = "isBalanceRequired";
            context["metadata"] = (objectMetadata ? objectMetadata["isBalanceRequired"] : null);
            state['isBalanceRequired'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isTransactionsRequired: function(val, state) {
            context["field"] = "isTransactionsRequired";
            context["metadata"] = (objectMetadata ? objectMetadata["isTransactionsRequired"] : null);
            state['isTransactionsRequired'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isBeneficiaryInfoRequired: function(val, state) {
            context["field"] = "isBeneficiaryInfoRequired";
            context["metadata"] = (objectMetadata ? objectMetadata["isBeneficiaryInfoRequired"] : null);
            state['isBeneficiaryInfoRequired'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function ConsentsPSD2New(defaultValues) {
        var privateState = {};
        context["field"] = "consentId";
        context["metadata"] = (objectMetadata ? objectMetadata["consentId"] : null);
        privateState.consentId = defaultValues ?
            (defaultValues["consentId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["consentId"], context) :
                null) :
            null;

        context["field"] = "accountIdList";
        context["metadata"] = (objectMetadata ? objectMetadata["accountIdList"] : null);
        privateState.accountIdList = defaultValues ?
            (defaultValues["accountIdList"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountIdList"], context) :
                null) :
            null;

        context["field"] = "customerId";
        context["metadata"] = (objectMetadata ? objectMetadata["customerId"] : null);
        privateState.customerId = defaultValues ?
            (defaultValues["customerId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["customerId"], context) :
                null) :
            null;

        context["field"] = "status";
        context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
        privateState.status = defaultValues ?
            (defaultValues["status"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["status"], context) :
                null) :
            null;

        context["field"] = "accountId";
        context["metadata"] = (objectMetadata ? objectMetadata["accountId"] : null);
        privateState.accountId = defaultValues ?
            (defaultValues["accountId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountId"], context) :
                null) :
            null;

        context["field"] = "accountName";
        context["metadata"] = (objectMetadata ? objectMetadata["accountName"] : null);
        privateState.accountName = defaultValues ?
            (defaultValues["accountName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountName"], context) :
                null) :
            null;

        context["field"] = "IBAN";
        context["metadata"] = (objectMetadata ? objectMetadata["IBAN"] : null);
        privateState.IBAN = defaultValues ?
            (defaultValues["IBAN"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IBAN"], context) :
                null) :
            null;

        context["field"] = "accountType";
        context["metadata"] = (objectMetadata ? objectMetadata["accountType"] : null);
        privateState.accountType = defaultValues ?
            (defaultValues["accountType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountType"], context) :
                null) :
            null;

        context["field"] = "availableBalance";
        context["metadata"] = (objectMetadata ? objectMetadata["availableBalance"] : null);
        privateState.availableBalance = defaultValues ?
            (defaultValues["availableBalance"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["availableBalance"], context) :
                null) :
            null;

        context["field"] = "consentExpiryDate";
        context["metadata"] = (objectMetadata ? objectMetadata["consentExpiryDate"] : null);
        privateState.consentExpiryDate = defaultValues ?
            (defaultValues["consentExpiryDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["consentExpiryDate"], context) :
                null) :
            null;

        context["field"] = "consentDuration";
        context["metadata"] = (objectMetadata ? objectMetadata["consentDuration"] : null);
        privateState.consentDuration = defaultValues ?
            (defaultValues["consentDuration"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["consentDuration"], context) :
                null) :
            null;

        context["field"] = "consentType";
        context["metadata"] = (objectMetadata ? objectMetadata["consentType"] : null);
        privateState.consentType = defaultValues ?
            (defaultValues["consentType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["consentType"], context) :
                null) :
            null;

        context["field"] = "accountConsentType";
        context["metadata"] = (objectMetadata ? objectMetadata["accountConsentType"] : null);
        privateState.accountConsentType = defaultValues ?
            (defaultValues["accountConsentType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountConsentType"], context) :
                null) :
            null;

        context["field"] = "authToken";
        context["metadata"] = (objectMetadata ? objectMetadata["authToken"] : null);
        privateState.authToken = defaultValues ?
            (defaultValues["authToken"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["authToken"], context) :
                null) :
            null;

        context["field"] = "currencyCode";
        context["metadata"] = (objectMetadata ? objectMetadata["currencyCode"] : null);
        privateState.currencyCode = defaultValues ?
            (defaultValues["currencyCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["currencyCode"], context) :
                null) :
            null;

        context["field"] = "isAccountInfoRequired";
        context["metadata"] = (objectMetadata ? objectMetadata["isAccountInfoRequired"] : null);
        privateState.isAccountInfoRequired = defaultValues ?
            (defaultValues["isAccountInfoRequired"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isAccountInfoRequired"], context) :
                null) :
            null;

        context["field"] = "isBalanceRequired";
        context["metadata"] = (objectMetadata ? objectMetadata["isBalanceRequired"] : null);
        privateState.isBalanceRequired = defaultValues ?
            (defaultValues["isBalanceRequired"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isBalanceRequired"], context) :
                null) :
            null;

        context["field"] = "isTransactionsRequired";
        context["metadata"] = (objectMetadata ? objectMetadata["isTransactionsRequired"] : null);
        privateState.isTransactionsRequired = defaultValues ?
            (defaultValues["isTransactionsRequired"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isTransactionsRequired"], context) :
                null) :
            null;

        context["field"] = "isBeneficiaryInfoRequired";
        context["metadata"] = (objectMetadata ? objectMetadata["isBeneficiaryInfoRequired"] : null);
        privateState.isBeneficiaryInfoRequired = defaultValues ?
            (defaultValues["isBeneficiaryInfoRequired"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isBeneficiaryInfoRequired"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "consentId": {
                get: function() {
                    context["field"] = "consentId";
                    context["metadata"] = (objectMetadata ? objectMetadata["consentId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.consentId, context);
                },
                set: function(val) {
                    setterFunctions['consentId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "accountIdList": {
                get: function() {
                    context["field"] = "accountIdList";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountIdList"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountIdList, context);
                },
                set: function(val) {
                    setterFunctions['accountIdList'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "customerId": {
                get: function() {
                    context["field"] = "customerId";
                    context["metadata"] = (objectMetadata ? objectMetadata["customerId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.customerId, context);
                },
                set: function(val) {
                    setterFunctions['customerId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "status": {
                get: function() {
                    context["field"] = "status";
                    context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.status, context);
                },
                set: function(val) {
                    setterFunctions['status'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "accountId": {
                get: function() {
                    context["field"] = "accountId";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountId, context);
                },
                set: function(val) {
                    setterFunctions['accountId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "accountName": {
                get: function() {
                    context["field"] = "accountName";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountName, context);
                },
                set: function(val) {
                    setterFunctions['accountName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "IBAN": {
                get: function() {
                    context["field"] = "IBAN";
                    context["metadata"] = (objectMetadata ? objectMetadata["IBAN"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.IBAN, context);
                },
                set: function(val) {
                    setterFunctions['IBAN'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "accountType": {
                get: function() {
                    context["field"] = "accountType";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountType, context);
                },
                set: function(val) {
                    setterFunctions['accountType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "availableBalance": {
                get: function() {
                    context["field"] = "availableBalance";
                    context["metadata"] = (objectMetadata ? objectMetadata["availableBalance"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.availableBalance, context);
                },
                set: function(val) {
                    setterFunctions['availableBalance'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "consentExpiryDate": {
                get: function() {
                    context["field"] = "consentExpiryDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["consentExpiryDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.consentExpiryDate, context);
                },
                set: function(val) {
                    setterFunctions['consentExpiryDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "consentDuration": {
                get: function() {
                    context["field"] = "consentDuration";
                    context["metadata"] = (objectMetadata ? objectMetadata["consentDuration"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.consentDuration, context);
                },
                set: function(val) {
                    setterFunctions['consentDuration'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "consentType": {
                get: function() {
                    context["field"] = "consentType";
                    context["metadata"] = (objectMetadata ? objectMetadata["consentType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.consentType, context);
                },
                set: function(val) {
                    setterFunctions['consentType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "accountConsentType": {
                get: function() {
                    context["field"] = "accountConsentType";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountConsentType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountConsentType, context);
                },
                set: function(val) {
                    setterFunctions['accountConsentType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "authToken": {
                get: function() {
                    context["field"] = "authToken";
                    context["metadata"] = (objectMetadata ? objectMetadata["authToken"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.authToken, context);
                },
                set: function(val) {
                    setterFunctions['authToken'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "currencyCode": {
                get: function() {
                    context["field"] = "currencyCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["currencyCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.currencyCode, context);
                },
                set: function(val) {
                    setterFunctions['currencyCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isAccountInfoRequired": {
                get: function() {
                    context["field"] = "isAccountInfoRequired";
                    context["metadata"] = (objectMetadata ? objectMetadata["isAccountInfoRequired"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isAccountInfoRequired, context);
                },
                set: function(val) {
                    setterFunctions['isAccountInfoRequired'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isBalanceRequired": {
                get: function() {
                    context["field"] = "isBalanceRequired";
                    context["metadata"] = (objectMetadata ? objectMetadata["isBalanceRequired"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isBalanceRequired, context);
                },
                set: function(val) {
                    setterFunctions['isBalanceRequired'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isTransactionsRequired": {
                get: function() {
                    context["field"] = "isTransactionsRequired";
                    context["metadata"] = (objectMetadata ? objectMetadata["isTransactionsRequired"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isTransactionsRequired, context);
                },
                set: function(val) {
                    setterFunctions['isTransactionsRequired'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isBeneficiaryInfoRequired": {
                get: function() {
                    context["field"] = "isBeneficiaryInfoRequired";
                    context["metadata"] = (objectMetadata ? objectMetadata["isBeneficiaryInfoRequired"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isBeneficiaryInfoRequired, context);
                },
                set: function(val) {
                    setterFunctions['isBeneficiaryInfoRequired'].call(this, val, privateState);
                },
                enumerable: true,
            },
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.consentId = value ? (value["consentId"] ? value["consentId"] : null) : null;
            privateState.accountIdList = value ? (value["accountIdList"] ? value["accountIdList"] : null) : null;
            privateState.customerId = value ? (value["customerId"] ? value["customerId"] : null) : null;
            privateState.status = value ? (value["status"] ? value["status"] : null) : null;
            privateState.accountId = value ? (value["accountId"] ? value["accountId"] : null) : null;
            privateState.accountName = value ? (value["accountName"] ? value["accountName"] : null) : null;
            privateState.IBAN = value ? (value["IBAN"] ? value["IBAN"] : null) : null;
            privateState.accountType = value ? (value["accountType"] ? value["accountType"] : null) : null;
            privateState.availableBalance = value ? (value["availableBalance"] ? value["availableBalance"] : null) : null;
            privateState.consentExpiryDate = value ? (value["consentExpiryDate"] ? value["consentExpiryDate"] : null) : null;
            privateState.consentDuration = value ? (value["consentDuration"] ? value["consentDuration"] : null) : null;
            privateState.consentType = value ? (value["consentType"] ? value["consentType"] : null) : null;
            privateState.accountConsentType = value ? (value["accountConsentType"] ? value["accountConsentType"] : null) : null;
            privateState.authToken = value ? (value["authToken"] ? value["authToken"] : null) : null;
            privateState.currencyCode = value ? (value["currencyCode"] ? value["currencyCode"] : null) : null;
            privateState.isAccountInfoRequired = value ? (value["isAccountInfoRequired"] ? value["isAccountInfoRequired"] : null) : null;
            privateState.isBalanceRequired = value ? (value["isBalanceRequired"] ? value["isBalanceRequired"] : null) : null;
            privateState.isTransactionsRequired = value ? (value["isTransactionsRequired"] ? value["isTransactionsRequired"] : null) : null;
            privateState.isBeneficiaryInfoRequired = value ? (value["isBeneficiaryInfoRequired"] ? value["isBeneficiaryInfoRequired"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(ConsentsPSD2New);

    //Create new class level validator object
    BaseModel.Validator.call(ConsentsPSD2New);

    var registerValidatorBackup = ConsentsPSD2New.registerValidator;

    ConsentsPSD2New.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(ConsentsPSD2New.isValid(this, propName, val)) {
                    return setterBackup.apply(null, arguments);
                } else {
                    throw Error("Validation failed for " + propName + " : " + val);
                }
            }
            setterFunctions[arguments[0]].changed = true;
        }
        return registerValidatorBackup.apply(null, arguments);
    }

    //Extending Model for custom operations
    //For Operation 'getPSD2Accounts' with service id 'getPSD2Accounts6726'
     ConsentsPSD2New.getPSD2Accounts = function(params, onCompletion){
        return ConsentsPSD2New.customVerb('getPSD2Accounts', params, onCompletion);
     };

    //For Operation 'approveConsent' with service id 'approveConsent8432'
     ConsentsPSD2New.approveConsent = function(params, onCompletion){
        return ConsentsPSD2New.customVerb('approveConsent', params, onCompletion);
     };

    //For Operation 'denyConsent' with service id 'declineConsent6723'
     ConsentsPSD2New.denyConsent = function(params, onCompletion){
        return ConsentsPSD2New.customVerb('denyConsent', params, onCompletion);
     };

    //For Operation 'preloginCancelConsent' with service id 'declineConsent3823'
     ConsentsPSD2New.preloginCancelConsent = function(params, onCompletion){
        return ConsentsPSD2New.customVerb('preloginCancelConsent', params, onCompletion);
     };

    var relations = [];

    ConsentsPSD2New.relations = relations;

    ConsentsPSD2New.prototype.isValid = function() {
        return ConsentsPSD2New.isValid(this);
    };

    ConsentsPSD2New.prototype.objModelName = "ConsentsPSD2New";
    ConsentsPSD2New.prototype.objServiceName = "PSD2ConsentServices";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    ConsentsPSD2New.registerProcessors = function(options, successCallback, failureCallback) {

        if(!options) {
            options = {};
        }

        if(options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
            preProcessorCallback = options["preProcessor"];
        }

        if(options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])) {
            postProcessorCallback = options["postProcessor"];
        }

        function metaDataSuccess(res) {
            objectMetadata = kony.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
            successCallback();
        }

        function metaDataFailure(err) {
            failureCallback(err);
        }

        kony.mvc.util.ProcessorUtils.getMetadataForObject("PSD2ConsentServices", "ConsentsPSD2New", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    ConsentsPSD2New.clone = function(objectToClone) {
        var clonedObj = new ConsentsPSD2New();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return ConsentsPSD2New;
});