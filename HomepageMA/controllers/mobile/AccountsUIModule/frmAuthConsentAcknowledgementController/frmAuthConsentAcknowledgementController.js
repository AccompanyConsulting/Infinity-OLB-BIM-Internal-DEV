define(["CommonUtilities"], function(CommonUtilities){ 
  return {
    onInit : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
      this.view.preShow = this.preShowfunc;  
    },

    onNavigate:function()
    {
      try { 
      }catch(error){
        kony.print(" onnavigateerror-->"+error);
      }
    },

    preShowfunc:function()
    {
      try {   
        if(applicationManager.getPresentationFormUtility().getDeviceName()==="iPhone"){
          this.view.customHeader.isVisible = false;
        }else{
          this.view.customHeader.isVisible = true;
        }
        this.view.customHeader.lblLocateUs.contentAlignment = 5;
        this.bindevents();  
        this.navigateTotpp();      
      }catch(error){
        kony.print("preShowfunc-->"+error);
      }
    },


    ///////********bindevents is used set thewidgets onclick and initialise the data*****////////

    bindevents:function()
    {
      try {          
        this.view.btnContinue.onClick = this.onClickContinue;
        this.view.onDeviceBack = this.dummyfunc;
      }catch(error){
        kony.print(" bindevents-->"+error);
      }       
    },

    dummyfunc:function()
    { },

    onClickContinue: function(){
      try {
		var accMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule({"moduleName" : "AccountsUIModule","appName" :"HomepageMA"});
        var status = kony.sdk.isNullOrUndefined(accMode.presentationController.consentStatus) ? "" : accMode.presentationController.consentStatus;
        var url = applicationManager.deeplinkSchemaName+"://?status="+status;
		kony.application.openURL(url);
     if(applicationManager.getPresentationFormUtility().getDeviceName()!="iPhone")
		kony.application.exit();
	  } catch (Error) {
		kony.print("Exception While getting exiting the application  : " + Error);
	  }
    },

    navigateTotpp: function(){
        kony.timer.schedule("timer3",this.onClickContinue, 50, false);
    }      

  };
});