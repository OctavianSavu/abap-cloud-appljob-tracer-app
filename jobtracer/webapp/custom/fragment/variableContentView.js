sap.ui.define([
    "sap/m/MessageBox"
], function (MessageBox) {
    'use strict';

    return {
        SetCodeEditorData: function (data, content_type) {
            if (data != null) {
                //Present the json text as parsed
                var result = JSON.stringify(JSON.parse(data),undefined,4);
                return result;
            } else {
                return null;
            }
        },
        buttonPressed: function() {
            MessageBox.show("Button pressed!");
        }        
    }
});