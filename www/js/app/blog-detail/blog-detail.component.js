'use strict';

angular.module('blogDetail').
    component('blogDetail', {
        templateUrl: '/templates/blog-detail.html',
        controller: function(Post, $http, $location, $routeParams, $scope){


            Post.query(function(data){
                $scope.notFound = true
                $scope.comments = []
                angular.forEach(data, function(post){
                    if(post.id == $routeParams.id){
                        $scope.notFound = false
                        $scope.post = post
                        if (post.comments){
                            $scope.comments = post.comments

                        }
                        resetReply()
//                        $scope.reply =  {
//                            'id': post.comments.length + 1,
//                            'text': '',
//                        }
                    }
                })
            })



            $scope.deleteComment = function(comment){
                $scope.$apply(
                    $scope.comments.splice(comment, 1)
                )
            }

            $scope.addReply = function() {
                console.log($scope.reply)
                $scope.comments.push($scope.reply)
//                $scope.post.comments.push('abc')
                resetReply()
            }

            function resetReply(){
                $scope.reply =  {
                    'id': $scope.comments.length + 1,
                    'text': '',
                }
            }



//            $http.get('/json/posts.json').then(successCallback, errorCallback);

//            function successCallback(response, status, config, statusText){
//                $scope.notFound = true
//
//                var blogItems = response.data
//                $scope.posts = blogItems
//
//                angular.forEach(blogItems, function(post){
//                    if(post.id == $routeParams.id){
//                        $scope.notFound = false
//                        $scope.post = post
//                    }
//                })
//            }
//            function errorCallback(response, status, config, statusText){
//                $scope.notFound = true
//                console.log(response)
//            }

            if($scope.notFound){
                console.log('Not found')
                $location.path('/')
            }

//            var blogItems = [
//                {title: 'Some Title', id: 1, description: 'This is book', publishDate: '2016-09-11'},
//                {title: 'Title', id: 2, description: 'This is book', publishDate: '2016-09-11'},
//                {title: 'Tea', id: 3, description: 'This is book', publishDate: '2016-09-11'},
//                {title: 'Lite', id: 4, description: 'This is book', publishDate: '2016-09-11'},
//            ]
//
////            console.log($routeParams.id)
//            $scope.title = 'Blog ' + $routeParams.id
//
//


        }
    });