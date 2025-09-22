define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function ConsentPSDRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	ConsentPSDRepository.prototype = Object.create(BaseRepository.prototype);
	ConsentPSDRepository.prototype.constructor = ConsentPSDRepository;

	//For Operation 'approveConsent' with service id 'approveConsent9650'
	ConsentPSDRepository.prototype.approveConsent = function(params, onCompletion){
		return ConsentPSDRepository.prototype.customVerb('approveConsent', params, onCompletion);
	};

	//For Operation 'movementToINAU' with service id 'movementToINAU4186'
	ConsentPSDRepository.prototype.movementToINAU = function(params, onCompletion){
		return ConsentPSDRepository.prototype.customVerb('movementToINAU', params, onCompletion);
	};

	//For Operation 'denyConsent' with service id 'declineConsent7973'
	ConsentPSDRepository.prototype.denyConsent = function(params, onCompletion){
		return ConsentPSDRepository.prototype.customVerb('denyConsent', params, onCompletion);
	};

	return ConsentPSDRepository;
})