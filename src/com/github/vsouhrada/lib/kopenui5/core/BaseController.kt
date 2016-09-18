package com.github.vsouhrada.lib.kopenui5.core;

import com.github.vsouhrada.lib.kopenui5.core.IBaseController

/**
 * Base Controller implementation for interaction with UI5 JS controller
 * @author vsouhrada
 * @constructor
 * @property sapController reference to JS OpenUI5 controller implementation
 * @see IBaseController
 * @since 0.1.0
 */
abstract class BaseController(sapController: dynamic) : IBaseController {

  open var sapController: dynamic = null

  init {
    this.sapController = sapController
  }

}
