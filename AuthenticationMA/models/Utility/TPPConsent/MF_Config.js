/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"consentId": "consentId",
		"authToken": "authToken",
		"consentType": "consentType",
		"tppName": "tppName",
		"accountConsentType": "accountConsentType",
	};

	Object.freeze(mappings);

	var typings = {
		"consentId": "string",
		"authToken": "string",
		"consentType": "string",
		"tppName": "string",
		"accountConsentType": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"consentId",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "Utility",
		tableName: "TPPConsent"
	};

	Object.freeze(config);

	return config;
})