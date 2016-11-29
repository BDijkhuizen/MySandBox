registrationModule.controller("PersonsController",
    function PersonsController($scope, $log, PersonsDataService) {
        $scope.persons = persons;
        $scope.sortorder = "Name";
        $scope.personClicked = function (person) {
            console.debug(person.Name + " clicked !");
        };

        $scope.personsRAW = PersonsDataService.getData();

        $scope.DataToSave = 'Hello';
        PersonsDataService.saveData(
            $scope.DataToSave,
            function () {
                $log.info("PersonController : saving something = " + $scope.DataToSave);
            }
        );
    });