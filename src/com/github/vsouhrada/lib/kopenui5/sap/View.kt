package com.github.vsouhrada.lib.kopenui5.sap

/**
 * @param name
 * @version 0.1.0
 * @since 0.1.0
 */
@native("this.getView().getModel")
fun getViewModel(name: String): dynamic

/**
 * @param model
 * @param name
 *  * @version 0.1.0
 * @since 0.1.0
 */
@native("this.getView().setModel")
fun setViewModel(model: JSONModel, name: String): dynamic = noImpl