package com.github.vsouhrada.lib.kopenui5.sap

/**
 * @author vsouhrada
 */
object OwnerComponent {
  @native("this.getOwnerComponent().getModel('i18n').getResourceBundle")
  fun getI18nResourceBundle(): JSONModel = noImpl

}