registrationModule.controller("PersonsController",
    function PersonsController($scope,$log,GetDataService ) {
        $scope.persons = persons;
        $scope.sortorder = "Name";
        $scope.personClicked = function (person) {
            console.debug(person.name + " clicked !");
        };

        GetDataService.getData(
            function (data) {
                $log.info("personsRAW = " + data);
                $scope.personsRAW = data;
            }
        );
});