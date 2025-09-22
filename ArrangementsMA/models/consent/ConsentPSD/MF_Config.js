/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"accountIdList": "accountIdList",
		"consentId": "consentId",
		"customer": "customer",
		"status": "status",
	};

	Object.freeze(mappings);

	var typings = {
		"accountIdList": "string",
		"consentId": "string",
		"customer": "string",
		"status": "string",
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
		serviceName: "consent",
		tableName: "ConsentPSD"
	};

	Object.freeze(config);

	return config;
})