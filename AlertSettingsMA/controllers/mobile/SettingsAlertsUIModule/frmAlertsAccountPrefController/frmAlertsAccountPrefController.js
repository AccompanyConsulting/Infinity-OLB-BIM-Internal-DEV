define({

  sec: -1,
  row: -1,
  segmentHeight:0,
  payeesList:0,
  list: [],
  rowTemplateHeight:70,
  sectionTemplateHeight:60,
  rowTemplateP2PHeight:110,
  searchData: [],
  isUpdate: false,
  segTransactionsRowData: [],
  isMultiCusLargeAcc: false,
  
  init: function () {
    var navManager = applicationManager.getNavigationManager();
		var currentForm=navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },

 
  //Purpose is to scroll to the selected row while moving to and fro between screens.
  postShow: function() {
  },
  
  preShow: function () {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var self = this;
    if (kony.os.deviceInfo().name === "iPhone") {
      this.view.flxHeader.isVisible = false;
      this.view.flxDescription.top = "0dp";
      this.view.segTransactions.top = "0dp";
    } else {
      this.view.flxHeader.isVisible = true;
      this.view.flxDescription.top = 55 + "dp";
     
    }
    this.view.flxNoTransactions.isVisible = false;
	  var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    this.initActions();
    if((!this.isUpdate) && applicationManager.getConfigurationManager().getAccountIDLevelAlertsFlag() === true){
		this.view.flxAlertsAccountLevel.isVisible = true;
		this.view.flxAlertsAccountType.isVisible = false;
        this.setTemplate();
		this.setSegmentDataAccountLevel();
        //this.setSegmentDataAccountLevelID();
    }
    else if(!this.isUpdate){
		this.view.flxAlertsAccountLevel.isVisible = false;
		this.view.flxAlertsAccountType.isVisible = true;
		this.setSegmentDataAccountType();
	}
    this.view.customHeader.btnRight.isVisible =false; 
    var headerText = navManager.getCustomInfo("accountAlertsData").lblTitle;
    this.view.customHeader.lblLocateUs.text = headerText;
    this.view.title = headerText;
    this.setBottomSheetData();
    this.view.txtSearchBox.onTextChange = this.onSearch.bind(this, this.view.txtSearchBox);
    this.view.txtAccountSearch.onTextChange = this.onSearch.bind(this, this.view.txtAccountSearch);
    this.view.flxCloseSearchIcon.onClick = this.onSearchClearBtnClick.bind(this, this.view.txtSearchBox);
    this.view.flxAccountCloseSearchIcon.onClick = this.onSearchClearBtnClick.bind(this, this.view.txtAccountSearch);
    this.view.flxCusOrAccDropdownContainer.onClick = this.toggleFilterDropdown;
    this.view.txtSearchBox.onBeginEditing = this.setSearchContainerFocusSkin.bind(this, this.view.flxSearchBoxHolder);
    this.view.txtSearchBox.onEndEditing = this.setSearchContainerNormalSkin.bind(this, this.view.flxSearchBoxHolder);
    this.view.txtAccountSearch.onBeginEditing = this.setSearchContainerFocusSkin.bind(this, this.view.flxAccountSearch);
    this.view.txtAccountSearch.onEndEditing = this.setSearchContainerNormalSkin.bind(this, this.view.flxAccountSearch);
    this.view.segBottomSheet.onRowClick = this.segBottomSheetRowClick;
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },
 
  cancelOnClick:function(){
 
 },
  
  initActions: function () {
     var scope = this;
     this.searchResults = null;
     this.segTransactionsData = null;
     this.isSearch = false;
    this.view.customHeader.flxBack.onClick = function() {
      scope.goBack();
    };
    this.view.segTransactions.onRowClick = this.onSegRowClick;
    this.view.segTransactions1.onRowClick = this.onSegRowClick;
  },
  goBack:function()
  {
     applicationManager.getPresentationUtility().showLoadingScreen();
      applicationManager.getNavigationManager().navigateTo({
                        "appName": "ManageProfileMA",
                        "friendlyName": "SettingsUIModule/frmSettings"
                    });
  },
  onSegRowClick : function() {
    var secindex,rowindex,selectedAccount,params;
    var SettingsAlertsUIModule = applicationManager.getModulesPresentationController("SettingsAlertsUIModule");
   var navMan = applicationManager.getNavigationManager();
    navMan.setCustomInfo("frmAlertsAccountPrefBack","frmAlertsAccountPref");
    if(this.view.flxAlertsAccountType.isVisible){
      if (Array.isArray(this.view.segTransactions1.data[0])) {
        secindex = Math.floor(this.view.segTransactions1.selectedRowIndex[0]);
        rowindex = Math.floor(this.view.segTransactions1.selectedRowIndex[1]);
        selectedAccount = this.view.segTransactions1.data[secindex][1][rowindex];
      } else {
        rowindex = Math.floor(this.view.segTransactions1.selectedRowIndex[1]);
        selectedAccount = this.view.segTransactions1.data[rowindex];
      }
      params={
        "AlertCategoryId":"ALERT_CAT_ACCOUNTS",
        "AccountTypeId":selectedAccount["accountTypeId"]
      };
       var accountTypeID = selectedAccount.accountTypeId;
       SettingsAlertsUIModule.setAccountTypeID(accountTypeID);
	   var navManager = applicationManager.getNavigationManager();
      navManager.setCustomInfo("frmAlertsListHeader",selectedAccount["accountType"]);
    }
    else{
      secindex = Math.floor(this.view.segTransactions.selectedRowIndex[0]);
      rowindex = Math.floor(this.view.segTransactions.selectedRowIndex[1]);
      selectedAccount = this.isSearch ? this.view.segTransactions.data[rowindex] : this.view.segTransactions.data[secindex][1][rowindex];
      params={
        "AlertCategoryId":"ALERT_CAT_ACCOUNTS",
        "AccountId": selectedAccount["accountID"]
      };
    var accountID = selectedAccount.accountID;
    SettingsAlertsUIModule.setAccountID(accountID);
	var navManager = applicationManager.getNavigationManager();
    navManager.setCustomInfo("frmAlertsListHeader",selectedAccount["processedName"]);
    }
    SettingsAlertsUIModule.alertsCurrency=selectedAccount["transactionCurrency"];
    SettingsAlertsUIModule.getAlertsBasedOnAccounts(params);
  },
  //This executes when the form is loaded ahead and services are in transition state and after service execution this is invoked from presentation layer.
  bindDataAfterTransition:function(flag){
    if (flag) {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }
    if(this.segmentHeight===0){
      this.setSegmentData();
    }
  },
    setAccountsData: function () {
        var data = [
            [{
                "lblHeader": "Saving Accounts (3)"
            },
            [{
                "lblValue": "On",
                "lblAccountName": "SavingsAcc...",
                "lblAccountNumber": "2343",
                "lblBankName": "Bank of America"
            },
            {
                "lblValue": "On",
                "lblAccountName": "SavingsAcc...",
                "lblAccountNumber": "5486",
              	"imgArrow": "chevron.png",
                "lblBankName": "Bank of America"
            },
            {
                "lblValue": "On",
                "lblAccountName": "SavingsAcc...",
                "lblAccountNumber": "2223",
                "lblBankName": "Bank of America"
            },
            ]
            ],
            [{
                "lblHeader": "Checking Accounts (3)"
               
            },
            [{
                "lblValue": "On",
                "lblAccountName": "CheckingAcc...",
                "lblAccountNumber": "2343",
                "lblBankName": "Bank of America"
            },
            {
               "lblValue": "On",
                "lblAccountName": "CheckingAcc...",
                "lblAccountNumber": "2111",
                "lblBankName": "Bank of America"
            },
            ]
            ],
            [{
                "lblHeader": "Credit Cards (3)",
              
            },
            [{
                "lblValue": "On",
                "lblAccountName": "CreditCard...",
                "lblAccountNumber": "2233",
                "lblBankName": "Bank of America"
            },
            {
                "lblValue": "On",
                "lblAccountName": "CreditCard...",
                "lblAccountNumber": "2353",
                "lblBankName": "Bank of America"
            },
            ]
            ]
            
        ];
       this.view.segTransactions.setData(data);
      
    },

  setSegmentDataAccountLevel(){
    var navManager = applicationManager.getNavigationManager();
    var accountList = navManager.getCustomInfo("frmAlertsAccountPref");
    let isSingleCustomerProfile = applicationManager.getUserPreferencesManager().isSingleCustomerProfile;
    this.processedData = isSingleCustomerProfile ? this.processData(accountList) : this.processDataForMultiCus(accountList);
    let accountsCountConfig = applicationManager.getConfigurationManager().getConfigurationValue('accsCountCompactDashboard');
    if (isSingleCustomerProfile) {
      this.setAccountsDataToSegment(this.processedData);  
      if (accountList.length <= parseInt(accountsCountConfig)) {
        this.view.flxSearchAndFilter.setVisibility(false);
        this.view.flxMultiCusAccountFilter.setVisibility(false);
      } else {
        this.view.txtSearchBox.text = "";
        this.view.flxSearchAndFilter.setVisibility(true);
        this.view.flxMultiCusAccountFilter.setVisibility(false);
        this.collapseAllSectionsExceptFirst();
      }
    } else {
      if (accountList.length <= parseInt(accountsCountConfig)) {
        this.isMultiCusLargeAcc = false;
        this.setAccountsDataToSegmentForMultiCus(this.processedData);
        this.view.flxMultiCusAccountFilter.setVisibility(false);
        this.view.flxSearchAndFilter.setVisibility(false);
      } else {
        this.isMultiCusLargeAcc = true;
        this.setAccountsDataToSegmentForMultiCus(this.processedData);
        this.collapseAllSectionsExceptFirst();
        this.view.flxMultiCusAccountFilter.setVisibility(true);
        this.view.flxSearchAndFilter.setVisibility(false);
      }
     
    }
  },

  /**
   * @function : setAccountsDataToSegment
   * @description : Takes processed accounts list as input, formats and sets to segTransactions
   * @param {JSONArray} : accountList
   */
  setAccountsDataToSegment: function (accountList) {
    let viewFormatData = this.processViewFormattedData(accountList);
    viewFormatData = this.orderByPriority(viewFormatData);
    let segData = [];
    if (accountList.length > 0) {
      for (let key in viewFormatData) {
       if (!this.isSearch) {
        let sectionHeaderData = {};
        let combinedData = [];
        if (key != "CreditCard") {
          if (viewFormatData[key].length > 1) {
            sectionHeaderData["lblHeader"] = key + " " + applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.mm.accounts") 
              + " (" + viewFormatData[key].length + ")";
            sectionHeaderData["imgUpArrow"] = "arrowup.png";
          } else {
            sectionHeaderData["lblHeader"] = key + " " + applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.mm.account");
            sectionHeaderData["imgUpArrow"] = "arrowup.png";
          }
        } else {
          if (viewFormatData[key].length > 1) {
            sectionHeaderData["lblHeader"] = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.mm.creditcards")
              + " (" + viewFormatData[key].length + ")";
            sectionHeaderData["imgUpArrow"] = "arrowup.png";
          } else {
            sectionHeaderData["lblHeader"] = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.mm.creditcard");
            sectionHeaderData["imgUpArrow"] = "arrowup.png";
          }
        }
        let rowDataForSection = this.sortByPrefrence(viewFormatData[key]);
        if (rowDataForSection.length > 0) {
          combinedData.push(sectionHeaderData);
          combinedData.push(rowDataForSection);
          //combinedData.push(rowDataForSection);
          //this.calcualteSegmentRenderedDataHeight(1,rowDataForSection.length);
          segData.push(combinedData);
        }
      } else {
          let rowDataForSection = this.sortByPrefrence(viewFormatData[key]);
          if (rowDataForSection.length > 0) {
          rowDataForSection.forEach(function (item) {
             segData.push(item);
         });
        }
       }
      }
    }
    this.view.segTransactions.widgetDataMap = this.getWidgetDataMap();
    this.view.segTransactions.setData(segData);
    if (this.isSearch) {
      this.searchResults = JSON.parse(JSON.stringify(segData));
    } else {
      this.segTransactionsData = JSON.parse(JSON.stringify(segData));
    }
  },
  
  /**
   * @function : setAccountsDataToSegmentForMultiCus
   * @description : Takes processed accounts list as input, formats and sets to segTransactions for multi custoner
   * @param {JSONArray} : accountList
   */
  setAccountsDataToSegmentForMultiCus: function (accountList) {
  let viewFormatData = this.processCusViewFormattedData(accountList);
  //viewFormatData = this.orderByPriority(viewFormatData);
  let segData = [];
  if (accountList.length > 0) {
    for (let key in viewFormatData) {
      if (!this.isSearch) {
        let sectionHeaderData = {};
        let combinedData = [];
        if (viewFormatData[key].length > 1) {
          sectionHeaderData["lblHeader"] = viewFormatData[key][0].processedCusName + " (" + viewFormatData[key].length + ")";
          sectionHeaderData["imgUpArrow"] = "arrowup.png";
        } else {
          sectionHeaderData["lblHeader"] = viewFormatData[key][0].processedCusName;
          sectionHeaderData["imgUpArrow"] = "arrowup.png";
        }
        let rowDataForSection = viewFormatData[key];
        if (rowDataForSection.length > 0) {
          combinedData.push(sectionHeaderData);
          combinedData.push(rowDataForSection);
          segData.push(combinedData);
        }
      } else {
        let rowDataForSection = viewFormatData[key];
        if (rowDataForSection.length > 0) {
        rowDataForSection.forEach(function (item) {
             segData.push(item);
        });
       }
      }
    }
  }
  this.view.segTransactions.widgetDataMap =  this.isMultiCusLargeAcc ? this.getWidgetDataMapForMultiCustomer() : this.getWidgetDataMap();
  this.view.segTransactions.setData(segData);
  if (this.isSearch) {
    this.searchResults = JSON.parse(JSON.stringify(segData));
  } else {
    this.segTransactionsData = JSON.parse(JSON.stringify(segData));
  }
},

  processData(data) {
    var accProcessedData = [];
    for (var i = 0; i < data.length; i++) {
      accProcessedData[i] = {};
      //var name = "";
      var name = data[i].nickName;
      accProcessedData[i].nickName = data[i].nickName;
      accProcessedData[i].accountID = data[i].accountID;
      accProcessedData[i].accountTypeId = data[i].accountTypeId;
      accProcessedData[i].accountType = data[i].accountType;
      accProcessedData[i].bankName = data[i].bankName;
      accProcessedData[i].isEnable = data[i].isEnabled === "true" ? "On" : "Off";
      accProcessedData[i].transactionCurrency = data[i].transactionCurrency ? data[i].transactionCurrency : data[i].currencyCode ? data[i].currencyCode : "";
      if(name.length > 27) {
         accProcessedData[i].processedName = applicationManager.getPresentationUtility().formatText(name, 21, data[i].accountID, 4);
      } else {
        accProcessedData[i].processedName = name +" - "+data[i].accountID;
      }
    }
    return accProcessedData;
  },
  
 /**
   * @function : processDataForMultiCus
   * @description : formation of multi cusomter data
   * @param {JSONArray} : data
   */
  processDataForMultiCus(data) {
    var accProcessedData = [];
    for (var i = 0; i < data.length; i++) {
      accProcessedData[i] = {};
      var name = data[i].nickName;
      accProcessedData[i].nickName = data[i].nickName;
      accProcessedData[i].accountName = data[i].nickName;
      accProcessedData[i].accountID = data[i].accountID;
      accProcessedData[i].accountType = data[i].accountType;
      accProcessedData[i].bankName = data[i].bankName;
      accProcessedData[i].transactionCurrency = data[i].currencyCode;
      accProcessedData[i].customerName = data[i].MembershipName;
      accProcessedData[i].customerId = data[i].Membership_id;
      accProcessedData[i].processedCusName = data[i].MembershipName +" - "+ data[i].Membership_id;
      accProcessedData[i].isEnable = data[i].isEnabled === "true" ? "On" : "Off";
      if(name.length > 27) {
         accProcessedData[i].processedName = applicationManager.getPresentationUtility().formatText(name, 21, data[i].accountID, 4);
      } else {
        accProcessedData[i].processedName = name +" - "+data[i].accountID;
      }
    }
    return accProcessedData;
  },

  processViewFormattedData(data) {
    var processedData = {}
    for (var i = 0; i < data.length; i++) {
      if (!processedData.hasOwnProperty(data[i].accountType)) {
        processedData[data[i].accountType] = [];
      }
      if (processedData.hasOwnProperty(data[i].accountType)) {
        processedData[data[i].accountType].push(data[i]);
      }
    }
   return processedData;
  },

 /**
   * @function : processCusViewFormattedData
   * @description : formation of view - multi cusomter data
   * @param {JSONArray} : data
   */
  processCusViewFormattedData(data) {
  var processedData = {}
  let prioritizeAccountTypes = applicationManager.getTypeManager().getAccountTypesByPriority();
  data.sort(function (a, b) {
    return prioritizeAccountTypes.indexOf(a.accountType) - prioritizeAccountTypes.indexOf(b.accountType);
  });
  for (var i = 0; i < data.length; i++) {
    if (!processedData.hasOwnProperty(data[i].customerName)) {
      processedData[data[i].customerName] = [];
    }
    if (processedData.hasOwnProperty(data[i].customerName)) {
      processedData[data[i].customerName].push(data[i]);
    }
  }
  return processedData;
 },

  updateData(accountName){
    this.isUpdate = true;
    if(applicationManager.getConfigurationManager().getAccountIDLevelAlertsFlag() === true){
    var segData = this.view.segTransactions.data;
     var recordID,recNameID;
        for(var i=0;i<segData.length;i++){
          if(recNameID != null && recNameID != "" && recNameID != undefined)break;
          for(var j=0;j<segData[i][1].length;j++){
            if(segData[i][1][j].processedName===accountName){
                recordID = i;
                recNameID = j;
                break;
            }
          }
        }
        segData[recordID][1][recNameID].isEnable = segData[recordID][1][recNameID].isEnable==="On"?"Off":"On";
        this.view.segTransactions.setData(segData);
    }
    else{
      var segData = this.view.segTransactions1.data;
     var recordID;
        for(var i=0;i<segData.length;i++){
            if(segData[i].accountType===accountName){
                recordID = i;break;
            }
        }
        segData[recordID].isEnable = segData[recordID].isEnable==="On"?"Off":"On";
        this.view.segTransactions1.setData(segData);
    }
  },
  orderByPriority(data) {
    var cm = applicationManager.getConfigurationManager();
    var prioritizedData = {};
    var metaData = cm.getAccountTypesMetaData();
    for (var key1 in metaData) {
      if (data[metaData[key1].backendValue]) {
        prioritizedData[metaData[key1].backendValue] = data[metaData[key1].backendValue];
      }
    }
    return prioritizedData
  },
  sortByPrefrence(accountsCollection) {
    if (accountsCollection.length > 1) accountsCollection.sort(function(record1, record2) {
      return record1.accountPreference - record2.accountPreference;
    });
    return accountsCollection;
  },
   getWidgetDataMap:function(){
    var dataMap={
      lblAccountName:"processedName",
      lblBankName:"accountType",
      lblValue: "isEnable",
      lblHeader: "lblHeader",
      imgUpArrow : "imgUpArrow",
      imgUser:"imgUser",
      flxImgUp:"flxImgUp",
      flxImg:"flxImg"
    };
	 return dataMap;
   },

 /**
   * @function : getWidgetDataMapForMultiCustomer
   * @description : to get widget data map for multi customer
   * @param {JSONArray} : data
   */
  getWidgetDataMapForMultiCustomer:function(){
    var dataMap={
      lblAccountName:"processedName",
      lblBankName:"accountType",
      lblCustomerName: "processedCusName",
      lblHeader: "lblHeader",
      imgUpArrow : "imgUpArrow",
      imgUser:"imgUser",
      flxImgUp:"flxImgUp",
      flxImg:"flxImg",
      lblValue: "isEnable"
    };
	 return dataMap;
   },
	getWidgetDataMapAT:function(){
    var dataMap={
      lblName:"accountType",
      lblValue:"isEnable"
    
    };
    return dataMap;
  },
  setSegmentDataAccountType: function(){
    var navManager = applicationManager.getNavigationManager();
    var accountList = navManager.getCustomInfo("frmAlertsAccountPref");
    this.processedData = this.processAccountTypeData(accountList);
    this.view.segTransactions1.widgetDataMap=this.getWidgetDataMapAT();
    this.view.segTransactions1.setData(this.processedData);
     
  },
   processAccountTypeData(data){
     var accProcessedData = [];
    for (var i = 0; i < data.length; i++) {
      accProcessedData[i] = {};
	   accProcessedData[i].accountTypeId = data[i].accountTypeId;
      accProcessedData[i].accountType = data[i].accountType;
      accProcessedData[i].isEnable =  data[i].isEnabled ==="true"?"On":"Off";
    }
 
    return accProcessedData;
  },
  setUpdateFlag(){
    this.isUpdate = false;
  },
  getOrganisationAccountsMap : function(accounts){
    try{
      var isSingleCustomerProfile = applicationManager.getUserPreferencesManager().isSingleCustomerProfile;
      if(isSingleCustomerProfile === true || isSingleCustomerProfile === "true"){
        var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");  
        var viewBindData=moneyMovementModule.processViewFormattedData(accounts);
        var  processedAccounts=moneyMovementModule.orderByPriority(viewBindData);
        return processedAccounts;
      }else{
       var primaryCustomerId = applicationManager.getUserPreferencesManager().primaryCustomerId;
          var businessAccounts = this.getDistinctBusinessAccount(accounts);
          var orgAccounts = {};
          if(!kony.sdk.isNullOrUndefined(primaryCustomerId)){
            if(primaryCustomerId.type === 'personal'){
              orgAccounts = {
                "Personal Accounts" : [],
                "Business Accounts" : []
              };
              orgAccounts["Personal Accounts"] = [];
              for(var i=0; i<businessAccounts.length; i++){
                orgAccounts[businessAccounts[i]] = [];
              } 
              accounts.forEach(function(account){            
                if(account.Membership_id === primaryCustomerId.id && account.isBusinessAccount === "false")          
                  orgAccounts["Personal Accounts"].push(account);
                else {
                  if(account.isBusinessAccount === "true"){
                    if(!kony.sdk.isNullOrUndefined(account.MembershipName) && account.MembershipName !== ""){
                      orgAccounts[account.MembershipName].push(account);
                    }
                  }else{
                    if(primaryCustomerId.id !== account.Membership_id ){
                      orgAccounts[account.MembershipName].push(account);               
                    }
                  }
                } 
              });              
            }
            else{
              orgAccounts["Personal Accounts"] = [];
              for(var i=0; i<businessAccounts.length; i++){
                orgAccounts[businessAccounts[i]] = [];
              }                  
              accounts.forEach(function(account){
                if(account.isBusinessAccount === "true"){
                  if(!kony.sdk.isNullOrUndefined(account.MembershipName) && account.MembershipName !== ""){
                    orgAccounts[account.MembershipName].push(account);
                  }
                }else{
                  if(primaryCustomerId.id !== account.Membership_id ){
                    orgAccounts[account.MembershipName].push(account);               
                  }
                }
              });
            }                                
          }
          else{
            orgAccounts["Personal Accounts"] = [];
            for(var i=0; i<businessAccounts.length; i++){
              orgAccounts[businessAccounts[i]] = [];
            }                  
            accounts.forEach(function(account){
              if(account.isBusinessAccount === "true"){
                if(!kony.sdk.isNullOrUndefined(account.MembershipName) && account.MembershipName !== ""){
                  orgAccounts[account.MembershipName].push(account);
                }
              }
            });
          }
          return orgAccounts;
      }
    }catch(er){
      kony.print(er)
    }
  },

/**
  * @function : setTemplate
  * @description : method is used to set the template to segTransactions based on the customer
  */
  setTemplate: function() {
    let isSingleCustomerProfile = applicationManager.getUserPreferencesManager().isSingleCustomerProfile;
    let accountsCountConfig = applicationManager.getConfigurationManager().getConfigurationValue('accsCountCompactDashboard');
    let navManager = applicationManager.getNavigationManager();
    let accountList = navManager.getCustomInfo("frmAlertsAccountPref");
    if(isSingleCustomerProfile) {
        this.view.segTransactions.rowTemplate = "flxAlertsPref";
    } else {
        if(accountList.length <= parseInt(accountsCountConfig)) {
           this.view.segTransactions.rowTemplate = "flxAlertsPref";
        } else {
           this.view.segTransactions.rowTemplate = "flxAlertsMultiPref";
       }
    }
  },

  setSegmentDataAccountLevelID:function(){
    try{
      var navManager = applicationManager.getNavigationManager();
      var accountList = navManager.getCustomInfo("frmAlertsAccountPref");
      var processedAccounts=this.getOrganisationAccountsMap(accountList)
      var rowArray=[];
      var setdataArr=[];
      for(var key in processedAccounts) {
        var header;
        var isSingleCustomerProfile = applicationManager.getUserPreferencesManager().isSingleCustomerProfile;
        if(isSingleCustomerProfile===true || isSingleCustomerProfile==="true"){
          header = key+" "+"Account";
        }else{
          header = key;
        }
        var headerJson={ 
          "template" : "flxTransHeader",
          "lblHeader":header,          
          "imgUpArrow":{"src": "arrowup.png"},
        };
        rowArray=[];
        for(var i=0;i<processedAccounts[key].length;i++){
          var isSingleCustomerProfile = applicationManager.getUserPreferencesManager().isSingleCustomerProfile;
        if(isSingleCustomerProfile === true || isSingleCustomerProfile === "true"){
          var iconVisible=false;
          var left="20dp";
        }else{
          var iconVisible=true;
          var left="45dp";
          var imgIcon = "businessaccount.png";
          if(processedAccounts[key][i].isBusinessAccount==="true" ||processedAccounts[key][i].isBusinessAccount === true){
            imgIcon = "businessaccount.png";
          }else{
            imgIcon = "personalaccount.png";
          }
        }
          var name = processedAccounts[key][i].nickName;
          var rowJson={ 
            "template": "flxAlertsPref",
            "processedName":applicationManager.getPresentationUtility().formatText(name, 10, processedAccounts[key][i].accountID, 4),
            "bankName":{text:processedAccounts[key][i].accountType,
                       left:left},
            "isEnable":processedAccounts[key][i].isEnabled ==="true"?"On":"Off",
            "accountID":processedAccounts[key][i].accountID,
            "imgUser":{
              src:imgIcon
            },
            "flxImg":{
              isVisible:iconVisible,
            }
          };
          rowArray.push(rowJson);
        }
        if(rowArray.length!==0)
        {
          setdataArr.push([headerJson,rowArray]);
          this.view.segTransactions.widgetDataMap=this.getWidgetDataMap();
          this.view.segTransactions.setData(setdataArr);
          this.view.segTransactions.setVisibility(true);
        }else{
          this.view.segTransactions.setVisibility(false);
        }
      }
    }
    catch(er){
      Kony.print(er);
    }
  },
    getDistinctBusinessAccount: function(accounts){
    try{
      var businessAccounts = [];
      for(var i=0;i<accounts.length;i++){
        if(accounts[i].isBusinessAccount === "true"){
          if(!kony.sdk.isNullOrUndefined(accounts[i].MembershipName) && accounts[i].MembershipName !== ""){
            if(businessAccounts.indexOf(accounts[i].MembershipName)===-1){
              businessAccounts.push(accounts[i].MembershipName);
            }
          }
        }
      }
      businessAccounts.sort();
      return businessAccounts;
    }catch(er){
      kony.print(er);
    }
  },
  
  rowExpandCollapse: function (context) {
    var scope = this;
    try {
      var sectionIndex = context.section;
      if (!(this.segTransactionsData))
        this.segTransactionsData = JSON.parse(JSON.stringify(this.view.segTransactions.data));
      var data = this.view.segTransactions.data;
      var selectedHeaderData = data[sectionIndex][0];
      if (selectedHeaderData["imgUpArrow"] === "arrowup.png") {
        if (this.searchResults && this.searchResults.length !== 0) {
          selectedHeaderData["imgUpArrow"] = "arrowdown.png";
          this.segTransactionsData = JSON.parse(JSON.stringify(this.searchResults));
          data[sectionIndex][1] = [];
          this.view.segTransactions.setData(data);
        } else {
          selectedHeaderData["imgUpArrow"] = "arrowdown.png";
          data[sectionIndex][1] = [];
          this.view.segTransactions.setData(data);
        }
      } else {
        selectedHeaderData["imgUpArrow"] = "arrowup.png";
        if (this.searchResults && this.searchResults.length !== 0) {
          this.segTransactionsData = JSON.parse(JSON.stringify(this.searchResults));
          data[sectionIndex][1] = this.segTransactionsData[sectionIndex][1];
          this.view.segTransactions.setData(data);
        } else {
          data[sectionIndex][1] = this.segTransactionsData[sectionIndex][1];
          this.view.segTransactions.setData(data);
        }
      }
      this.segTransactionsRowData = JSON.parse(JSON.stringify(this.view.segTransactions.data));
    } catch (err) {
      var errorObj = {
        "errorInfo": "Error in rowExpandCollapse",
        "errorLevel": "Configuration",
        "error": err
      };
      kony.print(JSON.stringify(errorObj));
    }
  },

  /**
   * @function : onSearch
   * @description : Invoked on text change of search accounts textbox
   */
  onSearch: function (textBox) {
    try {
      let searchKeyword = textBox.id === "txtSearchBox" ? this.view.txtSearchBox.text : this.view.txtAccountSearch.text;
      if (searchKeyword.length > 0) {
        textBox.id === "txtSearchBox" ? this.view.flxCloseSearchIcon.setVisibility(true) : this.view.flxAccountCloseSearchIcon.setVisibility(true);
      } else {
        textBox.id === "txtSearchBox" ? this.view.flxCloseSearchIcon.setVisibility(false) : this.view.flxAccountCloseSearchIcon.setVisibility(false);
      }
      let filteredData = this.filteredSegAccData !== undefined ? this.filteredSegAccData : this.processedData;
      let searchCriteria = [{
        field: "accountID"
      }, {
        field: "nickName"
      }];
      if (searchKeyword.length >= 1) {
        let searchResponse = this.filterData(filteredData, searchKeyword, searchCriteria);
        this.isSearch = true;
        textBox.id === "txtSearchBox" ? this.setAccountsDataToSegment(searchResponse) : this.setAccountsDataToSegmentForMultiCus(searchResponse);
        if (searchResponse.length > 0) {
          this.view.flxNoAccountsFound.setVisibility(false);
          this.view.segTransactions.setVisibility(true);
        } else {
          this.view.flxNoAccountsFound.setVisibility(true);
          this.view.segTransactions.setVisibility(false);
        }
      } else {
        this.isSearch = false;
        if(this.segTransactionsRowData.length > 0) {
          this.view.segTransactions.data = this.segTransactionsRowData;
        } else {
          textBox.id === "txtSearchBox" ? this.setAccountsDataToSegment(filteredData) : this.setAccountsDataToSegmentForMultiCus(filteredData);
          this.collapseAllSectionsExceptFirst();
        }
        //textBox.id === "txtSearchBox" ? this.setAccountsDataToSegment(segData) : this.setAccountsDataToSegmentForMultiCus(segData);
        //this.setAccountsDataToSegment(filteredData);
        this.view.flxNoAccountsFound.setVisibility(false);
        this.view.segTransactions.setVisibility(true);
        this.searchResults = [];
      }
      this.view.forceLayout();
    } catch (error) {
      kony.print(error);
    }
  },

  /**
   * @function : filterData
   * @description : Filters data and returns filtered array
   * @param {JSONArray} : accounts
   * @param {String} : searchKeyword
   * @param {JSONArray} : searchCriteria
   * @returns {JSONArray} : filteredData
   */
  filterData: function (accounts, searchKeyword, searchCriteria) {
    let filteredData = [];
    filteredData = accounts.filter((record) => {
      for (let i = 0; i < searchCriteria.length; i++) {
        try {
          if (record[searchCriteria[i].field] &&
            record[searchCriteria[i].field].toUpperCase().includes(searchKeyword.toUpperCase()))
            return true;
        } catch (err) {
          //implicit non-match, skip to next field or record
        }
      }
      return false;
    });
    return filteredData;
  },

  /**
   * @function : onSearchClearBtnClick
   * @description : Invoked on click of clear search button
   */
  onSearchClearBtnClick: function(textBox) {
    textBox.id === "txtSearchBox" ? this.view.txtSearchBox.text = "" : this.view.txtAccountSearch.text = "";
    this.onSearch(textBox);
  },

  /**
   * @function : setSearchContainerNormalSkin
   * @description : Invoked to set normal skin to search text container
   */
  setSearchContainerNormalSkin: function (flxSearchWidget) {
    flxSearchWidget.skin = "ICSknFlxffffffBorder1Px333333";
  },

  /**
   * @function : setSearchContainerFocusSkin
   * @description : Invoked to set focus skin to search text container
   */
  setSearchContainerFocusSkin: function (flxSearchWidget) {
   flxSearchWidget.skin = "sknflxBlueE0de121f9cae5843";
  },

  /**
   * @function : collapseAllSectionsExceptFirst
   * @description : Collapses all sections except first in segTransactions
   */
  collapseAllSectionsExceptFirst: function() {
    try {
      let data = this.view.segTransactions.data;
      if (!(this.segTransactionsData))
        this.segTransactionsData = JSON.parse(JSON.stringify(this.view.segTransactions.data));
      for (let sectionIndex = 1; sectionIndex < data.length; sectionIndex++) {
        let currentHeaderData = data[sectionIndex][0];
        if (currentHeaderData["imgUpArrow"] === "arrowup.png") { 
          currentHeaderData["imgUpArrow"] = "arrowdown.png";
          data[sectionIndex][1] = [];
          this.view.segTransactions.setData(data);
        }
      }
    } catch (error) {
      let errorObj = {
        "errorInfo": "Error in collapseAllSectionsExceptFirst",
        "errorLevel": "Configuration",
        "error": error
      };
      kony.print(JSON.stringify(errorObj));
    }
  },
  
 /**
   * @function : setBottomSheetData
   * @description : method to set bottom sheet data
   */
setBottomSheetData: function() {
  this.view.segBottomSheet.widgetDataMap = {
    "lblBottomSheetHeader": "lblBottomSheetHeader",
    "flxImgClose": "flxImgClose",
    "imgClose": "imgClose",
    "lblBottomSheet": "lblBottomSheet",
    "flxImgSelect": "flxImgSelect",
    "imgSelect": "imgSelect"
  };
  var rowData = [], segData = [], data = [];
  var cusData = {
    "lblBottomSheet": {
      "text": kony.i18n.getLocalizedString("kony.mb.AlertSettings.Customer")
    },
    "flxImgSelect": {
      "isVisible": false
    },
    "id": "Customer"
  };
  rowData.push(cusData);
  var accData = {
    "lblBottomSheet": {
      "text": kony.i18n.getLocalizedString("kony.mb.AlertSettings.Account")
    },
    "flxImgSelect": {
      "isVisible": true
    },
    "imgSelect": {
      "src": "tickmark_green.png"
    },
    "id": "Account"
  };
  rowData.push(accData);
  var headerData = this.getHeaderData();
  data.push(headerData);
  data.push(rowData);
  segData.push(data);
  this.view.segBottomSheet.setData(segData);
  this.view.lblCusOrAccValue.text = kony.i18n.getLocalizedString("kony.mb.AlertSettings.ViewBy") + " " + kony.i18n.getLocalizedString("kony.mb.AlertSettings.Account");
 },

/**
  * @function : toggleFilterDropdown
  * @description : method is used to show or hide bottom sheet
  */
 toggleFilterDropdown: function() {
  if (this.view.imgCusOrAccDropdown.src === "chevron_down.png") {
    this.view.imgCusOrAccDropdown.src = "chevron_up.png";
    this.view.flxBottomSheet.isVisible = true;
  } else if (this.view.imgCusOrAccDropdown.src === "chevron_up.png") {
    this.view.imgCusOrAccDropdown.src = "chevron_down.png";
    this.view.flxBottomSheet.isVisible = false;
  }
},

/**
  * @function : getHeaderData
  * @description : method is used to get the bottom sheet header
  */
getHeaderData: function() {
  let scope = this;
  let headerData = {
    "lblBottomSheetHeader": {
      "text": kony.i18n.getLocalizedString("kony.mb.AlertSettings.ViewBy")
    },
    "flxImgClose": {
      "isVisible": true,
      "onClick": scope.toggleFilterDropdown
    },
    "imgClose": {
      "src": "closeicon.png"
    }
  }
  return headerData;
},

/**
  * @function : segBottomSheetRowClick
  * @description : method is invoked on click of bottom sheet seg row click
  */
segBottomSheetRowClick: function() {
  let rowData = this.view.segBottomSheet.data;
  let selectedRowItem = this.view.segBottomSheet.selectedRowItems[0];
  let rowIndex = this.view.segBottomSheet.selectedRowIndex[1];
  let selectedData = selectedRowItem.lblBottomSheet.text;
  let selectedI18nData = "";
  if(selectedData === kony.i18n.getLocalizedString("kony.mb.AlertSettings.Customer")) {
    selectedI18nData = kony.i18n.getLocalizedString("kony.mb.AlertSettings.Customer");
  } else if(selectedData === kony.i18n.getLocalizedString("kony.mb.AlertSettings.Account")) {
    selectedI18nData = kony.i18n.getLocalizedString("kony.mb.AlertSettings.Account");
  }
  this.view.lblCusOrAccValue.text = kony.i18n.getLocalizedString("kony.mb.AlertSettings.ViewBy") + " " + selectedI18nData;

  rowData[0][1].forEach(function (item) {
    if (item.id === selectedRowItem.id) {
      item.flxImgSelect = {
        isVisible: true
      };
      item.imgSelect = {
        src: "tickmark_green.png"
      };
    } else {
      item.flxImgSelect = {
        isVisible: false
      };
    }
  });
  this.view.segBottomSheet.data = [];
  this.view.segBottomSheet.setData(rowData);
  this.toggleFilterDropdown();
}

});