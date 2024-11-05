sap.ui.define([
    "sap/ui/core/mvc/ControllerExtension",
    "sap/m/MessageToast",
    "octav/demo/jobtracer/custom/fragment/variableContentView"],
    function (ControllerExtension, MessageToast, variableContentView) {
        'use strict';
        return ControllerExtension.extend('octav.demo.jobtracer.ext.controller.JobTracerObjectPage', {
            override: {
                onInit: function () {
                    var extensionAPI = this.base.getExtensionAPI();
                    this.getView().getModel("variableContentView", variableContentView);
                }             
            },
            routing: {
                onBeforeBinding: function (oBindingContext, mParameters) {
                    var extensionAPI = this.base.getExtensionAPI();
                },
                onAfterBinding: function (oBindingContext, mParameters) {
                    var extensionAPI = this.base.getExtensionAPI();
                }
            }
        })
    }) 