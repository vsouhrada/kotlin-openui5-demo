package com.github.vsouhrada.lib.kopenui5.demo.controller

import com.github.vsouhrada.lib.kopenui5.core.BaseController
import com.github.vsouhrada.lib.kopenui5.sap.OpenUI5
import com.github.vsouhrada.lib.kopenui5.sap.getBusyIndicatorDelay

/**
 * @author vsouhrada
 */
class App : BaseController() {

  var viewModel = OpenUI5.createDynamicJSONModel()

  override fun onInit() {
    super.onInit()

    viewModel.busy = true
    viewModel.delay = 0

    setModel(viewModel, "appView")
  }

  fun setAppNotBusy() {
    viewModel.setProperty("/busy", false)
    viewModel.setProperty("/delay", getBusyIndicatorDelay())
  }

}