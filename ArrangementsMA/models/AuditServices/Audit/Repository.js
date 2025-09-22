define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function AuditRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	AuditRepository.prototype = Object.create(BaseRepository.prototype);
	AuditRepository.prototype.constructor = AuditRepository;

	//For Operation 'ExitAccountOpeningAudit' with service id 'ExitAccountOpening3783'
	AuditRepository.prototype.ExitAccountOpeningAudit = function(params, onCompletion){
		return AuditRepository.prototype.customVerb('ExitAccountOpeningAudit', params, onCompletion);
	};

	//For Operation 'openNewAccountAudit' with service id 'openNewAccountAudit3580'
	AuditRepository.prototype.openNewAccountAudit = function(params, onCompletion){
		return AuditRepository.prototype.customVerb('openNewAccountAudit', params, onCompletion);
	};

	return AuditRepository;
})