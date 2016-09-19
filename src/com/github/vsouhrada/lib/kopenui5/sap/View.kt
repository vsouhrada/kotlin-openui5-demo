package com.github.vsouhrada.lib.kopenui5.sap

/**
 * @author vsouhrada
 */

@native("this.getView().getModel")
fun getViewModel(name: String): dynamic

@native("this.getView().setModel")
fun setViewModel(model: JSONModel, name: String): dynamic = noImpl