angular.module('MyApp')
    .controller('NavbarCtrl', ['$scope', 'Auth', function () {
        $scope.logout = function () {
            Auth.logout();
        };
    }]);
