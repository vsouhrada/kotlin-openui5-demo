package com.github.vsouhrada.lib.kopenui5.core

import com.github.vsouhrada.lib.kopenui5.sap.JSONModel

/**
 * Base controller implementation
 * @author vsouhrada
 * @since 0.1.0
 */
@native
interface IBaseController {

  /**
   * Method should be call from JS controller implementation in init method
   * @since 0.1.0
   */
  //fun initView()

  //fun setController(sapController: Controller)

  fun getModel(name: String): JSONModel

  fun setModel(model: JSONModel, name: String): JSONModel

}