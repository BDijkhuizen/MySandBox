registrationModule.controller("PersonsController", function ($scope) {
    $scope.persons = persons;
    $scope.sortorder = "Name";
    $scope.personClicked = function (person) {
        console.debug(person.name + " clicked !");
    };
});