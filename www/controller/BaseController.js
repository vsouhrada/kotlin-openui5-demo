sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	var a = {
		/**
		 * Convenience method for accessing the router.
		 * @public
		 * @returns {sap.ui.core.routing.Router} the router for this component
		 */
		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		/**
		 * Convenience method for getting the view model by name.
		 * @public
		 * @param {string} [sName] the model name
		 * @returns {sap.ui.model.Model} the model instance
		 */
		getModel: function(sName) {
			return this.getView().getModel(sName);
		},

		/**
		 * Convenience method for setting the view model.
		 * @public
		 * @param {sap.ui.model.Model} oModel the model instance
		 * @param {string} sName the model name
		 * @returns {sap.ui.mvc.View} the view instance
		 */
		setModel: function(oModel, sName) {
			return this.getView().setModel(oModel, sName);
		},

		/**
		 * Getter for the resource bundle.
		 * @public
		 * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
		 */
		getResourceBundle: function() {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		},

		/**
		 * Event handler when the share by E-Mail button has been clicked
		 * @public
		 */
		onShareEmailPress: function() {
			var oViewModel = (this.getModel("objectView") || this.getModel("worklistView"));
			sap.m.URLHelper.triggerEmail(
				null,
				oViewModel.getProperty("/shareSendEmailSubject"),
				oViewModel.getProperty("/shareSendEmailMessage")
			);
		}

	};

	function createKotlinController() {
		// Get reference to CounterController object from Kotlin
		var oKotlinController = kotlin.modules.kopenui5.com.github.vsouhrada.lib.kopenui5.sap.BaseController;
		// Create and return instance of CounterController.kt (written in Kotlin)
		var o = Object.create(oKotlinController.prototype);
		return oKotlinController.apply(o, []) || o;
		//return o;
	};

	var oFnController = kotlin.modules.kopenui5.com.github.vsouhrada.lib.kopenui5.sap.BaseController;
	var oController = Object.create(oFnController.prototype);
	//var oController = new (Function.prototype.bind.apply(oFnController, null));
	//oController.setController(Object.create(Controller.prototype));


	return Controller.extend("myCompany.myApp.controller.BaseController", oController);

});