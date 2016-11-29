registrationModule.factory("PersonsDataService",
    function ($log, PersonsResource, PersonsSaveResource) {
        return {
            getData: function () {
                $log.info('GetDataService.getData : querying PersonsResource...');
                return PersonsResource.query();
            }
            ,saveData: function (data) {
                $log.info('GetDataService.saveData : saving to PersonsSaveResource...');
                return PersonsSaveResource.save({ dataToSave: data });
            }
        }
    }
    //query() returns all the entries
    //function($http,$log) {
    //    return{
    //        getData : function(successcb) {
    //            $http({ method: "GET", url: "/MySandBox/Hello/JustTheData" })
    //                .success(function(data, status, headers, config) {
    //                    successcb(data);
    //                    $log.info(status);
    //                })
    //                .error(function(data, status, headers, config) {
    //                    $log.warn("Some error when fetching JSON");
    //                });
    //        }
    //    }
    //}
);