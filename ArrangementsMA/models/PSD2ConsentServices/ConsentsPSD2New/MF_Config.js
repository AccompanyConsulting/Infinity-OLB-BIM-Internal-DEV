/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"consentId": "consentId",
		"accountIdList": "accountIdList",
		"customerId": "customerId",
		"status": "status",
		"accountId": "accountId",
		"accountName": "accountName",
		"IBAN": "IBAN",
		"accountType": "accountType",
		"availableBalance": "availableBalance",
		"consentExpiryDate": "consentExpiryDate",
		"consentDuration": "consentDuration",
		"consentType": "consentType",
		"accountConsentType": "accountConsentType",
		"authToken": "authToken",
		"currencyCode": "currencyCode",
		"isAccountInfoRequired": "isAccountInfoRequired",
		"isBalanceRequired": "isBalanceRequired",
		"isTransactionsRequired": "isTransactionsRequired",
		"isBeneficiaryInfoRequired": "isBeneficiaryInfoRequired",
	};

	Object.freeze(mappings);

	var typings = {
		"consentId": "string",
		"accountIdList": "string",
		"customerId": "string",
		"status": "string",
		"accountId": "string",
		"accountName": "string",
		"IBAN": "string",
		"accountType": "string",
		"availableBalance": "string",
		"consentExpiryDate": "string",
		"consentDuration": "string",
		"consentType": "string",
		"accountConsentType": "string",
		"authToken": "string",
		"currencyCode": "string",
		"isAccountInfoRequired": "string",
		"isBalanceRequired": "string",
		"isTransactionsRequired": "string",
		"isBeneficiaryInfoRequired": "string",
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
		serviceName: "PSD2ConsentServices",
		tableName: "ConsentsPSD2New"
	};

	Object.freeze(config);

	return config;
})