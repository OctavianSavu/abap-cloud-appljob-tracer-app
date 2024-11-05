sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'octav.demo.jobtracer',
            componentId: 'JobTracerList',
            contextPath: '/JobTracer'
        },
        CustomPageDefinitions
    );
});