'use strict';

angular.module('try').
    config(
        function(
            $locationProvider,
            $routeProvider
            ){
            $locationProvider.html5Mode(true);
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/', {
                    template: '<blog-list></blog-list>'
                }).
                when('/about', {
                    templateUrl: "/templates/about.html"
                }).
                when('/blog', {
                    template: '<blog-list></blog-list>',
//                    redirectTo: '/'
                }).
                when('/blog/:id', {
                    template: '<blog-detail></blog-detail>'
                }).
//                when('/blog/2', {
//                    template: '<blog-list></blog-list>'
//                }).
                otherwise({
                    template: 'Not Found'
            })

    });