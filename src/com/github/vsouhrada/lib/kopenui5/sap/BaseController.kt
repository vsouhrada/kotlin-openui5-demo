package com.github.vsouhrada.lib.kopenui5.sap

import com.github.vsouhrada.lib.kopenui5.core.IBaseController

/**
 * @author vsouhrada
 * @see[IBaseController]
 */
class BaseController(/*val sapController: Controller*/) : IBaseController {

//  lateinit var sapController: Controller
//
//  override fun setController(sapController: Controller) {
//    this.sapController = sapController
//  }

  @native
  fun getRouter(): dynamic = js("sap.ui.core.UIComponent.getRouterFor(this);")

  override fun getModel(name: String): JSONModel = getViewModel(name)

  override fun setModel(model: JSONModel, name: String): JSONModel = setViewModel(model, name)

  //fun getView() = View

  fun getResourceBundle() = js("return this.getOwnerComponent().getModel('i18n').getResourceBundle();")

  fun onShareEmailPress() {
    js("""
            var oViewModel = (this.getModel("objectView") || this.getModel("worklistView"));
            sap.m.URLHelper.triggerEmail(
            null,
            oViewModel.getProperty("/shareSendEmailSubject"),
            oViewModel.getProperty("/shareSendEmailMessage")
    );
    """)
  }

}