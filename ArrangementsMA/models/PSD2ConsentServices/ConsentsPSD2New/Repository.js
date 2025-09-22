define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function ConsentsPSD2NewRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	ConsentsPSD2NewRepository.prototype = Object.create(BaseRepository.prototype);
	ConsentsPSD2NewRepository.prototype.constructor = ConsentsPSD2NewRepository;

	//For Operation 'getPSD2Accounts' with service id 'getPSD2Accounts6726'
	ConsentsPSD2NewRepository.prototype.getPSD2Accounts = function(params, onCompletion){
		return ConsentsPSD2NewRepository.prototype.customVerb('getPSD2Accounts', params, onCompletion);
	};

	//For Operation 'approveConsent' with service id 'approveConsent8432'
	ConsentsPSD2NewRepository.prototype.approveConsent = function(params, onCompletion){
		return ConsentsPSD2NewRepository.prototype.customVerb('approveConsent', params, onCompletion);
	};

	//For Operation 'denyConsent' with service id 'declineConsent6723'
	ConsentsPSD2NewRepository.prototype.denyConsent = function(params, onCompletion){
		return ConsentsPSD2NewRepository.prototype.customVerb('denyConsent', params, onCompletion);
	};

	//For Operation 'preloginCancelConsent' with service id 'declineConsent3823'
	ConsentsPSD2NewRepository.prototype.preloginCancelConsent = function(params, onCompletion){
		return ConsentsPSD2NewRepository.prototype.customVerb('preloginCancelConsent', params, onCompletion);
	};

	return ConsentsPSD2NewRepository;
})