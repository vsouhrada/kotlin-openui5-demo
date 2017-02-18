//sap.ui.define([
//	"myCompany/myApp/controller/BaseController",
//	"sap/ui/model/json/JSONModel"
//], function(BaseController, JSONModel) {
//	"use strict";
//
//	return BaseController.extend("myCompany.myApp.controller.App", {
//
//		onInit: function() {
//			var oViewModel,
//				fnSetAppNotBusy,
//				iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();
//
//			oViewModel = new JSONModel({
//				busy: true,
//				delay: 0
//			});
//			this.setModel(oViewModel, "appView");
//
//			fnSetAppNotBusy = function() {
//				oViewModel.setProperty("/busy", false);
//				oViewModel.setProperty("/delay", iOriginalBusyDelay);
//			};
//
//			this.getOwnerComponent().getModel().metadataLoaded().
//			then(fnSetAppNotBusy);
//
//			// apply content density mode to root view
//			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
//		}
//	});
//
//});

sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	var oFnController = kotlin.modules.kopenui5.com.github.vsouhrada.lib.kopenui5.demo.controller.App;
	var oController = Object.create(oFnController.prototype);
	//var oController = new (Function.prototype.bind.apply(oFnController, null));

	return Controller.extend("myCompany.myApp.controller.App", oController);

});