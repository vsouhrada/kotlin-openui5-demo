package com.github.vsouhrada.lib.kopenui5.sap

/**
 * Kotlin OpenUI5 wrapper
 * @author vsouhrada
 * @version 0.1.0
 * @since 0.1.0
 */
object OpenUI5 {

  /**
   * Create JSONModel by native call to the OpenUI5 library
   * @since 0.1.0.
   */
  @native
  fun createJSONModel(): JSONModel = js("new sap.ui.model.json.JSONModel()")

  //fun createController(controllerPath: String): Controller = Controller.extend(controllerPath)

  //fun createBaseController(): Controller = return BaseController()
}