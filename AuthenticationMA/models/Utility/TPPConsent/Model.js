/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "TPPConsent", "objectService" : "Utility"};

    var setterFunctions = {
        consentId: function(val, state) {
            context["field"] = "consentId";
            context["metadata"] = (objectMetadata ? objectMetadata["consentId"] : null);
            state['consentId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        authToken: function(val, state) {
            context["field"] = "authToken";
            context["metadata"] = (objectMetadata ? objectMetadata["authToken"] : null);
            state['authToken'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        consentType: function(val, state) {
            context["field"] = "consentType";
            context["metadata"] = (objectMetadata ? objectMetadata["consentType"] : null);
            state['consentType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        tppName: function(val, state) {
            context["field"] = "tppName";
            context["metadata"] = (objectMetadata ? objectMetadata["tppName"] : null);
            state['tppName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountConsentType: function(val, state) {
            context["field"] = "accountConsentType";
            context["metadata"] = (objectMetadata ? objectMetadata["accountConsentType"] : null);
            state['accountConsentType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function TPPConsent(defaultValues) {
        var privateState = {};
        context["field"] = "consentId";
        context["metadata"] = (objectMetadata ? objectMetadata["consentId"] : null);
        privateState.consentId = defaultValues ?
            (defaultValues["consentId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["consentId"], context) :
                null) :
            null;

        context["field"] = "authToken";
        context["metadata"] = (objectMetadata ? objectMetadata["authToken"] : null);
        privateState.authToken = defaultValues ?
            (defaultValues["authToken"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["authToken"], context) :
                null) :
            null;

        context["field"] = "consentType";
        context["metadata"] = (objectMetadata ? objectMetadata["consentType"] : null);
        privateState.consentType = defaultValues ?
            (defaultValues["consentType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["consentType"], context) :
                null) :
            null;

        context["field"] = "tppName";
        context["metadata"] = (objectMetadata ? objectMetadata["tppName"] : null);
        privateState.tppName = defaultValues ?
            (defaultValues["tppName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["tppName"], context) :
                null) :
            null;

        context["field"] = "accountConsentType";
        context["metadata"] = (objectMetadata ? objectMetadata["accountConsentType"] : null);
        privateState.accountConsentType = defaultValues ?
            (defaultValues["accountConsentType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountConsentType"], context) :
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
            "tppName": {
                get: function() {
                    context["field"] = "tppName";
                    context["metadata"] = (objectMetadata ? objectMetadata["tppName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.tppName, context);
                },
                set: function(val) {
                    setterFunctions['tppName'].call(this, val, privateState);
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
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.consentId = value ? (value["consentId"] ? value["consentId"] : null) : null;
            privateState.authToken = value ? (value["authToken"] ? value["authToken"] : null) : null;
            privateState.consentType = value ? (value["consentType"] ? value["consentType"] : null) : null;
            privateState.tppName = value ? (value["tppName"] ? value["tppName"] : null) : null;
            privateState.accountConsentType = value ? (value["accountConsentType"] ? value["accountConsentType"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(TPPConsent);

    //Create new class level validator object
    BaseModel.Validator.call(TPPConsent);

    var registerValidatorBackup = TPPConsent.registerValidator;

    TPPConsent.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(TPPConsent.isValid(this, propName, val)) {
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
    //For Operation 'validateAuthToken' with service id 'psd2AuthTokenValidation6261'
     TPPConsent.validateAuthToken = function(params, onCompletion){
        return TPPConsent.customVerb('validateAuthToken', params, onCompletion);
     };

    //For Operation 'deletePSD2Consent' with service id 'deletePSD2Consent9687'
     TPPConsent.deletePSD2Consent = function(params, onCompletion){
        return TPPConsent.customVerb('deletePSD2Consent', params, onCompletion);
     };

    var relations = [];

    TPPConsent.relations = relations;

    TPPConsent.prototype.isValid = function() {
        return TPPConsent.isValid(this);
    };

    TPPConsent.prototype.objModelName = "TPPConsent";
    TPPConsent.prototype.objServiceName = "Utility";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    TPPConsent.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("Utility", "TPPConsent", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    TPPConsent.clone = function(objectToClone) {
        var clonedObj = new TPPConsent();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return TPPConsent;
});