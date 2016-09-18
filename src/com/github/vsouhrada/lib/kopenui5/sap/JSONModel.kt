package com.github.vsouhrada.lib.kopenui5.sap

import com.github.vsouhrada.lib.kopenui5.sap.Model

/**
 * Model implementation for JSON format
 *
 * @author vsouhrada
 * @since 0.1.0
 */
@native
class JSONModel : Model() {

  /**
   * Sets a new [value] for the given property [name] in the model.
   * If the model value changed all interested parties are informed.
   */
  fun setProperty(name: String, value: Any)

}