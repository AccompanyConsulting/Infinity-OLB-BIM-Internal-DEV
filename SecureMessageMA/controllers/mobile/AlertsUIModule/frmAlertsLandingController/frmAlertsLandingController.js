define(['CommonUtilities'],function(CommonUtilities){ 
    
 return {
 //Type your controller code here
  filteredData : [],
  filterOptions : [],
  contentOffset : "0dp",
  allSegData: [],
  endRowIndex: -1,
  batchSize: 50,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    this.storeFilterOptions();
  },
  storeFilterOptions : function(){
    this.filterOptions.push(this.view.flxOptions);
    this.filterOptions.push(this.view.flxOptions2);
    this.filterOptions.push(this.view.flxOptions3);
  },
  preshow : function()
  {
    this.endRowIndex = -1;
    this.setFlowActions();
    this.setPreshowData();
    var alertsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AlertsUIModule");
    var filterCategories = alertsModule.presentationController.getFilterCategories();
    this.setAppliedFilters(filterCategories);
    this.setFilterData(filterCategories);
    this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("i18n.Alerts.Notifications");
    this.view.customSearchbox.tbxSearch.placeholder= kony.i18n.getLocalizedString("kony.mb.common.search");
    this.view.lblNoAlertsText.text = kony.i18n.getLocalizedString("kony.mb.alertsandmessages.noalert");
  },
  setFlowActions: function()
  {
    this.view.customHeader.flxBack.onClick = this.flxBackOnclick;
    this.view.customSearchbox.tbxSearch.onTextChange = this.searchNotification;
    this.view.btnCancel.onClick = this.hideDeletePopUp;
    this.view.btnRemove.onClick = this.deleteNotificationConfirm;
    this.view.onDeviceBack = this.flxBackOnclick;
    this.view.segAlertsScreen.scrollingEvents = {
            onReachingEnd: this.lazyLoadData,
    };
    if(!kony.sdk.isNullOrUndefined(this.view.imgClose))
    this.view.imgClose.onTouchStart = this.removeFilter.bind(this,"ALERT_CAT_ACCOUNTS");
    if(!kony.sdk.isNullOrUndefined(this.view.imgClose2))
    this.view.imgClose2.onTouchStart = this.removeFilter.bind(this,"ALERT_CAT_SECURITY");
    if(!kony.sdk.isNullOrUndefined(this.view.imgClose3))
    this.view.imgClose3.onTouchStart = this.removeFilter.bind(this,"ALERT_CAT_TRANSACTIONAL");
  },

  setLazyLoadingDataToSeg : function(data)
  {
    this.endRowIndex = -1;
    this.view.segAlertsScreen.removeAll();
    if (data === undefined) {
            //returning if the data is not sent
            return;
    }
    var navManager = applicationManager.getNavigationManager();
    var alertsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AlertsUIModule");
    if(data.length === 0){
      applicationManager.getPresentationUtility().tapgestureEnabled = false;
      this.view.flxNoAlerts.setVisibility(true);
      this.view.segAlertsScreen.setVisibility(false);
      this.view.flxMainContainer.setVisibility(true);
    }
    else{
      this.view.flxMainContainer.setVisibility(false);
      this.view.segAlertsScreen.setVisibility(true);
      this.view.flxNoAlerts.setVisibility(false);
      var todaysdate = new Date();
      for(var i = 0; i<data.length;i++)
      {
         data[i].imgCategory = {"src" : this.getCategoryImage(data[i].notificationCategory)};
         if(data[i].isRead === "0"){
          data[i].lblTitle = {"skin" : "sknLbl424242SSPSemiBold26px", "text": data[i].notificationSubject};
          data[i].flxMain={"skin" : "sknFlxBgFFFFFFChart", "focusSkin" : "sknFlxBgFFFFFFChart"};
         }
         else{
          data[i].lblTitle = {"skin" :"sknlbl000000SSP26px", "text": data[i].notificationSubject};
          data[i].flxMain={"skin" : "sknFlxBgFFFFFFChart", "focusSkin" : "sknFlxBgFFFFFFChart"};
         }
         var notificationText = data[i].notificationText;
         var formattedText = notificationText.replace(/<(.|\n)*?>/g, '');
         data[i].alertText = formattedText;
         var date = new Date(data[i].receivedDate);
         var convertedDate = CommonUtilities.getDateAndTime(data[i].receivedDate);
         data[i].dateReceived = convertedDate ? convertedDate.split(", ")[1] : "";
         data[i].flxDelete = {"onClick" : this.showDeletePopUp};
      }
      this.allSegData = data;
      this.view.segAlertsScreen.widgetDataMap = this.getDataMap();
      var deviceUtilManager = applicationManager.getDeviceUtilManager();
      var isIphone = deviceUtilManager.isIPhone();
      if(!alertsModule.presentationController.allAlertsChoosen){
        if(!this.view.flxFilterdOptions.isVisible)
        {
          this.view.flxFilterdOptions.setVisibility(true);
          this.view.flxSeparator.setVisibility(true);
        }
        if(isIphone){
            this.view.flxMainContainer.top = "106dp";
            this.view.segAlertsScreen.top = "106dp";
        }
        else{
            this.view.flxMainContainer.top = "162dp";
            this.view.segAlertsScreen.top = "162dp";
        }
      }
      else{
        if(this.view.flxFilterdOptions.isVisible)
        {
          this.view.flxFilterdOptions.setVisibility(false);
          this.view.flxSeparator.setVisibility(false);
        }
        if(isIphone){
            this.view.flxMainContainer.top = "45dp";
            this.view.segAlertsScreen.top = "45dp";
        }
        else{
            this.view.flxMainContainer.top = "101dp";
            this.view.segAlertsScreen.top = "101dp";
        }
      }
      this.lazyLoadData();
      applicationManager.getPresentationUtility().tapgestureEnabled = true;
    }
  },
  /**
    * Lazy loads data to the segment in batches mentioned in batchSize variable 
    * @returns null;
  */
   lazyLoadData: function () {
      if (this.endRowIndex === this.allSegData.length) {
           //returning if the last row reached is the data's length
           return;
       }
       let startRowIndex = this.endRowIndex === -1 ? 0 : this.endRowIndex;
       let lastRowIndex = this.endRowIndex === -1 ? 0 : this.endRowIndex;
       if (this.allSegData.length > lastRowIndex + this.batchSize) {
           // if the remaining data length is greater than batch size
           // then increasing the last row index to the current + batch size
           lastRowIndex = lastRowIndex + this.batchSize;
       } else {
           //setting the last row to the batch size
           lastRowIndex = this.allSegData.length;
       }
       //appending the data to the segment
       if(startRowIndex === 0){
          this.view.segAlertsScreen.setData(this.allSegData.slice(startRowIndex, lastRowIndex)); 
       } else{
       this.view.segAlertsScreen.addAll(this.allSegData.slice(startRowIndex, lastRowIndex));
       }
       this.endRowIndex = lastRowIndex;
   },

  setFilterData: function(filterCategories)
  {
    var navManager = applicationManager.getNavigationManager();
    var alertsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AlertsUIModule");
    var data = alertsModule.presentationController.getNotificationData();
    var areAllFiltersChoosen = alertsModule.presentationController.allAlertsChoosen;
    if(areAllFiltersChoosen){
        navManager.setCustomInfo("frmAlertsLanding", data);
        this.filteredData = data;
        this.setLazyLoadingDataToSeg(data);
    }
    else{
      var filteredData = alertsModule.presentationController.filterNotifications("notificationCategory",filterCategories,data);
      navManager.setCustomInfo("frmAlertsLanding",filteredData);
      this.filteredData = filteredData;
      this.setLazyLoadingDataToSeg(this.filteredData);
    }
  },
  removeFilter: function(filterToDelete)
  {
    var alertsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AlertsUIModule");
    var appliedFilters = alertsModule.presentationController.getFilterCategories();
    var data = [];
    appliedFilters.forEach(function(filter){
      if(filter !== filterToDelete)
      data.push(filter);
    });
    if(data.length == 0)
    {
      alertsModule.presentationController.allAlertsChoosen = true;
      var defaultFilters = alertsModule.presentationController.getDefaultFilterCategories();
      alertsModule.presentationController.setFilterCategories(defaultFilters);
      this.setAppliedFilters(defaultFilters);
      this.setFilterData(defaultFilters);
    }
    else{
    alertsModule.presentationController.setFilterCategories(data);
    this.setAppliedFilters(data);
    this.setFilterData(data);
    }
  },
  setAppliedFilters: function(filters)
  {
    var applyFilter = false;
    this.view.flxFilterdOptions.removeAll();
    for(var i = 0; i < filters.length; i++)
    {
      if(filters[i] === "ALERT_CAT_ACCOUNTS"){
        this.view.flxFilterdOptions.add(this.filterOptions[0]);
        applyFilter = true;
      }
      else if(filters[i] === "ALERT_CAT_SECURITY"){
        this.view.flxFilterdOptions.add(this.filterOptions[1]);
        applyFilter = true;
      }
      else if(filters[i] === "ALERT_CAT_TRANSACTIONAL"){
        this.view.flxFilterdOptions.add(this.filterOptions[2]);
        applyFilter = true;
      }
    }
    var alertsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AlertsUIModule");
    if(!alertsModule.presentationController.allAlertsChoosen && applyFilter){
      this.view.flxFilterdOptions.setVisibility(true);
      this.view.flxSeparator.setVisibility(true);
    }
    else{
      this.view.flxFilterdOptions.setVisibility(false);
      this.view.flxSeparator.setVisibility(false);
    }
    this.view.forceLayout();
  },
  deleteNotificationConfirm : function()
  {
    this.hideDeletePopUp();
    this.deleteNotification();
  },
  setPreshowData : function()
  {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    this.resetFormUI();
    this.view.customSearchbox.tbxSearch.text = "";
    var alertsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AlertsUIModule");
    /* if(alertsModule.presentationController.retainSegmentoffset)
        this.view.flxMainContainer.setContentOffset({"y" : this.contentOffset});
    else
        this.view.flxMainContainer.setContentOffset({"y" : "0dp"});
    */
    this.hideDeletePopUp();
  },
  resetFormUI : function()
  {
    var scopeObj = this;
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var isIphone = deviceUtilManager.isIPhone();
    if(!isIphone){
      scopeObj.view.flxHeader.isVisible = true;
      scopeObj.view.flxHeaderSearchbox.top = "56dp";
      scopeObj.view.flxFilterdOptions.top = "101dp";
      scopeObj.view.flxSeparator.top = "161dp";
      scopeObj.view.flxMainContainer.top = "162dp";
      scopeObj.view.segAlertsScreen.top = "162dp";
    }
    else{
      scopeObj.view.flxHeader.isVisible = false;
      scopeObj.view.flxHeaderSearchbox.top = "0dp";
      scopeObj.view.flxFilterdOptions.top = "45dp";
      scopeObj.view.flxSeparator.top = "105dp";
      scopeObj.view.flxMainContainer.top = "106dp";
      scopeObj.view.segAlertsScreen.top = "106dp";
    }
  },
  onSegmentRowClick : function(rowIndex)
  {
    // this.contentOffset = this.view.flxMainContainer.contentOffsetMeasured.y + "dp";
    var data = this.view.segAlertsScreen.data[rowIndex];
    var navManager = applicationManager.getNavigationManager();
    navManager.setCustomInfo("frmAlertsDetails",data);
    var alertsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AlertsUIModule");
    if(data.isRead == "0")
    {
       alertsModule.presentationController.updateNotificationAsRead(data.userNotificationId);
    }
    else
      alertsModule.presentationController.commonFunctionForNavigation("frmAlertsDetails");
      alertsModule.presentationController.retainSegmentoffset = true;
  },
  getDataMap : function()
  {
    var dataMap = {
        "flxMain" : "flxMain",
    	"lblTitle" : "lblTitle",
        "lblAlertDesc" : "alertText",
        "imgCategory" : "imgCategory",
        "lblTime" : "dateReceived",
        "flxDelete" : "flxDelete"
    };
    return dataMap;
  },
  searchNotification : function()
  {
    this.endRowIndex = -1;
    var searchText = this.view.customSearchbox.tbxSearch.text;
    var alertsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AlertsUIModule");
    alertsModule.presentationController.searchAlerts(this.filteredData,searchText);
  },
  deleteNotification : function()
  {
    var rowId = applicationManager.getPresentationUtility().rowIndexforSwipe;
    var data = this.allSegData[rowId];
    var alertsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AlertsUIModule");
    alertsModule.presentationController.deleteNotification(data.userNotificationId);
  },
  deleteSpecifiedNotification : function(notificationId)
  {
    var navManager = applicationManager.getNavigationManager();
    var data = navManager.getCustomInfo("frmAlertsLanding");
    var rowId = applicationManager.getPresentationUtility().rowIndexforSwipe;
    data.splice(rowId,1);
    var newData = [];
    for(var i = 0; i < this.filteredData.length; i++){
      if(this.filteredData[i].userNotificationId !== notificationId)
        newData.push(this.filteredData[i]);
    }
    this.filteredData = newData;
    this.setLazyLoadingDataToSeg(this.filteredData);
  },
  getCategoryImage : function(category)
  {
    var data = {
      "ALERT_CAT_ACCOUNTS" : "account.png",
      "ALERT_CAT_SECURITY" : "security.png",
      "ALERT_CAT_TRANSACTIONAL" : "alerttransactional.png"
    };
    if(!kony.sdk.isNullOrUndefined(data[category]))
    return data[category];
    else
    return "alertgeneral.png";
  },
  showDeletePopUp : function()
  {
    applicationManager.getPresentationUtility().tapgestureEnabled = false;
    this.view.customSearchbox.tbxSearch.setEnabled(false);
    this.view.flxFilterdOptions.setEnabled(false);
    this.view.flxPopup1.setVisibility(true);
    this.view.flxMainContainer.setEnabled(false);
    // this.view.flxMainContainer.enableScrolling = false;
    this.view.customSearchbox.flxSearch.setEnabled(false);
  },
  hideDeletePopUp : function()
  {
    applicationManager.getPresentationUtility().tapgestureEnabled = true;
    this.view.customSearchbox.tbxSearch.setEnabled(true);
    this.view.flxFilterdOptions.setEnabled(true);
    this.view.flxPopup1.setVisibility(false);
    this.view.flxMainContainer.setEnabled(true);
    // this.view.flxMainContainer.enableScrolling = true;
    this.view.customSearchbox.flxSearch.setEnabled(true);
  },
  flxBackOnclick:function(){
    //var navManager = applicationManager.getNavigationManager();
    //navManager.goBack();
	var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule({
                    "appName": "HomepageMA",
                    "moduleName": "AccountsUIModule"
                });
	accountMod.presentationController.showDashboard();
  },
  bindGenericSuccess : function(msg)
  {
    applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,msg.result);
  },
  showErrorPopUp : function(msg)
  {
    applicationManager.getDataProcessorUtility().showToastMessageError(this,msg);
  }
 }
 });