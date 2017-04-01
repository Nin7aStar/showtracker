angular.module('MyApp')
    .factory('Show', ['$resource', function($resource) {
        return $resource('/api/shows/:_id',
            {id: '@_id'},
            {
                update: {
                    method: 'PUT'
                },
                delete: {
                    method: 'DELETE'
                }
            }
        );
    }]);
