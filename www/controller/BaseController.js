sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	var oFnController = kotlin.modules.kopenui5.com.github.vsouhrada.lib.kopenui5.sap.BaseController;
	var oController = Object.create(oFnController.prototype);
	//var oController = new (Function.prototype.bind.apply(oFnController, null));

	return Controller.extend("myCompany.myApp.controller.BaseController", oController);

});