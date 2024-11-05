sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'octav/demo/jobtracer/test/integration/FirstJourney',
		'octav/demo/jobtracer/test/integration/pages/JobTracerList',
		'octav/demo/jobtracer/test/integration/pages/JobTracerObjectPage'
    ],
    function(JourneyRunner, opaJourney, JobTracerList, JobTracerObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('octav/demo/jobtracer') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheJobTracerList: JobTracerList,
					onTheJobTracerObjectPage: JobTracerObjectPage
                }
            },
            opaJourney.run
        );
    }
);