define(['CampaignUtility', 'CommonUtilities'], function (CampaignUtility, CommonUtilities) {
  return {
   
    init: function () {
      var navManager = applicationManager.getNavigationManager();
      var currentForm = navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },

    onNavigate: function () {
      try {
      } catch (e) {
        kony.print("Exception in onNavigate" + e);
      }
    },

    onpreShow: function () {
      try {
        kony.print("Entered onpreShow");
        this.setPreShowData();
        this.setFlowActions();
        this.renderTitleBar();
      } catch (e) {
        kony.print("Exception in onpreShow" + e);
      }
    },

    renderTitleBar: function () {
      let deviceUtilManager = applicationManager.getDeviceUtilManager();
      let isIphone = deviceUtilManager.isIPhone();
      if (!isIphone) {
        this.view.flxHeader.isVisible = true;
        this.view.flxBody.top = "55dp";
      } else {
        this.view.flxHeader.isVisible = false;
        this.view.title = kony.i18n.getLocalizedString("i18n.login.authoriseConsent");
        this.view.flxBody.top = "0dp";
      }
    },

    setPreShowData: function () {
      this.view.customHeader.lblLocateUs.contentAlignment = 5;
      var date = "";
      let navManager = applicationManager.getNavigationManager();
      let dataList = navManager.getCustomInfo("frmAuthConsent");
      if (dataList && dataList.length > 0) {
        date = dataList[0].consentExpiryDate + " (" + dataList[0].consentDuration + " days),";
      }else{
        date = "(180 days),"
      }
      this.view.lblAccess.text = kony.i18n.getLocalizedString("i18n.common.AccessUntil")+ " " + date +" "+ kony.i18n.getLocalizedString("i18n.common.withdrawlimit");//"Access will be until "+ date +" You can withdraw access at any time.";
      this.view.lblTransactions.text = kony.i18n.getLocalizedString("i18n.common.transactions")+":";
      this.view.rtxAuthInformation.text = kony.i18n.getLocalizedString("i18n.login.authorise")+" "+"<b> TeePee </b>"+" "+kony.i18n.getLocalizedString("i18n.login.authoriseAcc");
	 
      this.setSegmentData();
    },

    setFlowActions: function () {
      let self = this;
      this.view.flxInfoWillIShare.onTouchEnd = function () {
        self.view.flxPopup.setVisibility(true);
      };
      this.view.btnClose.onClick = function () {
        self.view.flxPopup.setVisibility(false);
      };
      this.view.btnApprove.onClick = this.onApprove;
      this.view.btnReject.onClick = function () {
        self.view.flxRejectPopup.setVisibility(true);
      };
      this.view.btnNo.onClick = function () {
        self.view.flxRejectPopup.setVisibility(false);
      };
      this.view.btnYes.onClick = this.onReject;
    },

    onApprove: function(){
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule({
                "moduleName": "AccountsUIModule",
                "appName": "HomepageMA"
            });
      accountMod.presentationController.approveConsent();
    },

    onReject: function(){
        this.view.flxRejectPopup.setVisibility(false);
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule({
                "moduleName": "AccountsUIModule",
                "appName": "HomepageMA"
            });
      accountMod.presentationController.denyConsent();
    },    

    setSegmentData: function () {
      var self = this;
      let navManager = applicationManager.getNavigationManager();
      var forUtility = applicationManager.getFormatUtilManager();
      let dataList = navManager.getCustomInfo("frmAuthConsent");
      let segData = [];
      if (dataList && dataList.length > 0) {
        segData = dataList.map(entityData => {
          return {
            "lblCustomerName": {
              "text": entityData.accountName
            },
            "lblCustomerID": {
              "text": entityData.IBAN
            },
            "lblAccountType": entityData.accountType,
            "lblAmount": entityData.availableBalance?forUtility.formatAmountandAppendCurrencySymbol(entityData.availableBalance, entityData.currencyCode):"",
            "lblSharing": {
              "text": kony.i18n.getLocalizedString("i18n.tppconsent.whatyouaresharing"),
              "isVisible": (applicationManager.consentTypeName === "detailed") ? true : false
            },
            "flxWhattoShare": {
              "isVisible": (applicationManager.consentTypeName === "detailed") ? true : false
            },
            "lblAccountInfo": {
              "text": kony.i18n.getLocalizedString("i18n.tppconsent.accountInfo"),
              "isVisible": (entityData.isAccountInfoRequired === 'true') ? true : false
            },
            "lblBalance": {
              "text": kony.i18n.getLocalizedString("i18n.AccountsDetails.Balance"),
              "isVisible": (entityData.isBalanceRequired === 'true') ? true : false
            },
            "lblTransactions": {
              "text": kony.i18n.getLocalizedString("i18n.konybb.Common.Transactions"),
              "isVisible": (entityData.isTransactionsRequired === 'true') ? true : false
            },
            "lblBeneficiaries": {
              "text": kony.i18n.getLocalizedString("i18n.tppconsent.beneficiarieswithoutcolon"),
              "isVisible": (entityData.isBeneficiaryInfoRequired === 'true') ? true : false
            }
          };
        });
      }
      let widgetDataMap = {
        "flxContainer": "flxContainer",
        "lblCustomerName": "lblCustomerName",
        "lblCustomerID": "lblCustomerID",
        "flxAmount": "flxAmount",
        "lblAccountType": "lblAccountType",
        "lblAmount": "lblAmount",
        "flxSeparator": "flxSeparator",
        "lblSharing": "lblSharing",
        "flxWhattoShare": "flxWhattoShare",
        "lblAccountInfo": "lblAccountInfo",
        "lblBalance": "lblBalance",
        "lblTransactions": "lblTransactions",
        "lblBeneficiaries": "lblBeneficiaries",
        "flxDummy": "flxDummy"
      };
      this.view.segAccounts.widgetDataMap = widgetDataMap;
      this.view.segAccounts.removeAll();
      if (segData && segData.length > 0) {
        this.view.segAccounts.setData(segData);
        this.view.segAccounts.info = {
          "data": segData
        };        
      } else {
        this.view.segAccounts.setData([]);
        this.view.segAccounts.info = {
          "data": []
        };        
      }
    //  this.view.segEntitiesList.onRowClick = this.onEntityRowClick;
      this.view.forceLayout();
    },

    onEntityRowClick: function () {
      var self = this;
      let segEntitiesOriginalData = this.view.segEntitiesList.info.data;
      let segEntitiesData = this.view.segEntitiesList.data;
      let selRowData = this.view.segEntitiesList.selectedRowItems[0];
      if (selRowData && selRowData.id) {
        let onRowClickSetSegData = function (segEntityRecord) {
          segEntityRecord.flxLegalEntityContainer.skin = self.SEG_ROW_FLEX_SKINS[0];
          if (segEntityRecord.id === selRowData.id) {
            segEntityRecord.flxLegalEntityContainer.skin = self.SEG_ROW_FLEX_SKINS[1];
          }
        };
        segEntitiesOriginalData.forEach(segEntityRecord => onRowClickSetSegData(segEntityRecord));
        segEntitiesData.forEach(segEntityRecord => onRowClickSetSegData(segEntityRecord));

        this.view.segEntitiesList.setData(segEntitiesData);
        this.view.segEntitiesList.info = {
          "data": segEntitiesOriginalData
        };
        this.view.forceLayout();
        let request = {
          "id": selRowData.id
        };
        let accountsUIModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountsUIModule");
        accountsUIModule.presentationController.fetchTermsAndConditions(request);
      }
    },
   
  };
});