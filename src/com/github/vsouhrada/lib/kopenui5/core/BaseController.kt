package com.github.vsouhrada.lib.kopenui5.core

import com.github.vsouhrada.lib.kopenui5.sap.*

/**
 * @author vsouhrada
 * @see[IBaseController]
 * @version 0.1.0
 * @since 0.1.0
 */
class BaseController() : IBaseController {

  @native
  fun getRouter(): dynamic = getRouterFor(this)

  override fun getModel(name: String): JSONModel = View.getViewModel(name)

  override fun setModel(model: JSONModel, name: String): JSONModel = View.setViewModel(model, name)

  fun onInit() { }

  fun getResourceBundle() = OwnerComponent.getI18nResourceBundle()

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