define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function TPPConsentRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	TPPConsentRepository.prototype = Object.create(BaseRepository.prototype);
	TPPConsentRepository.prototype.constructor = TPPConsentRepository;

	//For Operation 'validateAuthToken' with service id 'psd2AuthTokenValidation6261'
	TPPConsentRepository.prototype.validateAuthToken = function(params, onCompletion){
		return TPPConsentRepository.prototype.customVerb('validateAuthToken', params, onCompletion);
	};

	//For Operation 'deletePSD2Consent' with service id 'deletePSD2Consent9687'
	TPPConsentRepository.prototype.deletePSD2Consent = function(params, onCompletion){
		return TPPConsentRepository.prototype.customVerb('deletePSD2Consent', params, onCompletion);
	};

	return TPPConsentRepository;
})