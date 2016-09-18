package com.github.vsouhrada.lib.kopenui5.sap

/**
 * This is an abstract base class for model objects.
 *
 * @author vsouhrada
 * @since 0.1.0
 */
@native
abstract class Model {

  /**
   * Refresh the model. This will check all bindings for updated data and update the controls if data has been changed.
   */
  fun refresh()

}