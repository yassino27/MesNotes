(function() {
'use strict';
    angular
        .module('mynotes')
		.controller('FeedCtrl', function($http, $scope) {
            console.log('inside feed InsideCtrl');
            $scope.stories = [];

            function loadStories(params, callback) {
            	$http.get('https://www.reddit.com/r/android/new/.json', {params: params})
                    .success(function(response) {
                        var stories = [];
                        angular.forEach(response.data.children, function(child) {
                            $scope.stories.push(child.data);
                        });
                        callback(stories);
                    });
            }


            $scope.loadOlderStories = function() {
            	var params = {};
            	console.log(params);
            	if ($scope.stories.length > 0) {
            		params['after'] = $scope.stories[$scope.stories.length - 1].name;
            		console.log(params);
            	}
            	loadStories(params, function(olderStories) {
            		$scope.stories = $scope.stories.concat(olderStories);
            		$scope.$broadcast('scroll.infiniteScrollComplete');
            	});
               
            };

            $scope.openLink = function(url) {
            	window.open(url, '_blank');
            };

            $scope.loadNowerStories = function() {
            	var params = {'before': $scope.stories[0].name};
            	loadStories(params, function(newerStories) {
            		$scope.stories = newerStories.concat($scope.stories);
            		$scope.$broadcast('scroll.refreshComplete');
            	});
            };
        });

}());