'use strict';
app.factory('sampleService', ['$http','$location', 'sessionService', '$route', function($http, $location, sessionService, $route){
    return {
        save : function(client){

            // $route.reload(); // This is to reload the page
        }

    }
}]);