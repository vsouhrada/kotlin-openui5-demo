package com.github.vsouhrada.lib.kopenui5.sap

import com.github.vsouhrada.lib.kopenui5.core.IBaseController

/**
 * @author vsouhrada
 * @see[IBaseController]
 * @version 0.1.0
 * @since 0.1.0
 */
class BaseController(/*val sapController: Controller*/) : IBaseController {

  @native
  fun getRouter(): dynamic = js("sap.ui.core.UIComponent.getRouterFor(this);")

  override fun getModel(name: String): JSONModel = getViewModel(name)

  override fun setModel(model: JSONModel, name: String): JSONModel = setViewModel(model, name)


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