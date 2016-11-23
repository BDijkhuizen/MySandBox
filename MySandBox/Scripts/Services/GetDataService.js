registrationModule.factory("GetDataService",
    function($http,$log) {
        return{
            getData : function(successcb) {
                $http({ method: "GET", url: "/MySandBox/Hello/JustTheData" })
                    .success(function(data, status, headers, config) {
                        successcb(data);
                        $log.info(status);
                    })
                    .error(function(data, status, headers, config) {
                        $log.warn("Some error when fetching JSON");
                    });
            }
        }
    }
);