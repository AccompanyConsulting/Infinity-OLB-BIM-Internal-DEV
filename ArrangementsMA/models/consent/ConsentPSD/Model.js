/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "ConsentPSD", "objectService" : "consent"};

    var setterFunctions = {
        accountIdList: function(val, state) {
            context["field"] = "accountIdList";
            context["metadata"] = (objectMetadata ? objectMetadata["accountIdList"] : null);
            state['accountIdList'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        consentId: function(val, state) {
            context["field"] = "consentId";
            context["metadata"] = (objectMetadata ? objectMetadata["consentId"] : null);
            state['consentId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        customer: function(val, state) {
            context["field"] = "customer";
            context["metadata"] = (objectMetadata ? objectMetadata["customer"] : null);
            state['customer'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        status: function(val, state) {
            context["field"] = "status";
            context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
            state['status'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function ConsentPSD(defaultValues) {
        var privateState = {};
        context["field"] = "accountIdList";
        context["metadata"] = (objectMetadata ? objectMetadata["accountIdList"] : null);
        privateState.accountIdList = defaultValues ?
            (defaultValues["accountIdList"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountIdList"], context) :
                null) :
            null;

        context["field"] = "consentId";
        context["metadata"] = (objectMetadata ? objectMetadata["consentId"] : null);
        privateState.consentId = defaultValues ?
            (defaultValues["consentId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["consentId"], context) :
                null) :
            null;

        context["field"] = "customer";
        context["metadata"] = (objectMetadata ? objectMetadata["customer"] : null);
        privateState.customer = defaultValues ?
            (defaultValues["customer"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["customer"], context) :
                null) :
            null;

        context["field"] = "status";
        context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
        privateState.status = defaultValues ?
            (defaultValues["status"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["status"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
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
            "customer": {
                get: function() {
                    context["field"] = "customer";
                    context["metadata"] = (objectMetadata ? objectMetadata["customer"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.customer, context);
                },
                set: function(val) {
                    setterFunctions['customer'].call(this, val, privateState);
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
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.accountIdList = value ? (value["accountIdList"] ? value["accountIdList"] : null) : null;
            privateState.consentId = value ? (value["consentId"] ? value["consentId"] : null) : null;
            privateState.customer = value ? (value["customer"] ? value["customer"] : null) : null;
            privateState.status = value ? (value["status"] ? value["status"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(ConsentPSD);

    //Create new class level validator object
    BaseModel.Validator.call(ConsentPSD);

    var registerValidatorBackup = ConsentPSD.registerValidator;

    ConsentPSD.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(ConsentPSD.isValid(this, propName, val)) {
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
    //For Operation 'approveConsent' with service id 'approveConsent9650'
     ConsentPSD.approveConsent = function(params, onCompletion){
        return ConsentPSD.customVerb('approveConsent', params, onCompletion);
     };

    //For Operation 'movementToINAU' with service id 'movementToINAU4186'
     ConsentPSD.movementToINAU = function(params, onCompletion){
        return ConsentPSD.customVerb('movementToINAU', params, onCompletion);
     };

    //For Operation 'denyConsent' with service id 'declineConsent7973'
     ConsentPSD.denyConsent = function(params, onCompletion){
        return ConsentPSD.customVerb('denyConsent', params, onCompletion);
     };

    var relations = [];

    ConsentPSD.relations = relations;

    ConsentPSD.prototype.isValid = function() {
        return ConsentPSD.isValid(this);
    };

    ConsentPSD.prototype.objModelName = "ConsentPSD";
    ConsentPSD.prototype.objServiceName = "consent";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    ConsentPSD.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("consent", "ConsentPSD", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    ConsentPSD.clone = function(objectToClone) {
        var clonedObj = new ConsentPSD();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return ConsentPSD;
});