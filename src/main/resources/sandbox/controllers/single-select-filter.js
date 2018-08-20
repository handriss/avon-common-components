(function() {
    'use strict';

    angular
        .module('sandbox')
        .controller('SingleSelectFilterController', singleSelectFilterController);

    singleSelectFilterController.$inject = ['$scope', '$log'];

    function singleSelectFilterController($scope, $log) {
        $scope.name = "I am a controller and I am working";
        $log.info("I am a controller and I am working");
    }

})();