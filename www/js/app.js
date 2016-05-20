(function() {
    var app = angular.module('mynotes', ['ionic', 'mynotes.notestore']);

    app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('list', {
            url: '/',
            templateUrl: 'templates/list.html'
        });
        $stateProvider.state('tutoriel', {
            url: '/tutoriel',
            templateUrl: 'templates/tutoriel.html'
        });
        $stateProvider.state('feed', {
            url: '/feed',
            templateUrl: 'templates/feed.html',
            controller: 'FeedCtrl',
            cache: false
        });

        $stateProvider.state('add', {
            url: '/add',
            templateUrl: 'templates/edit.html',
            controller: 'AddCtrl'
        });
        $stateProvider.state('edit', {
            url: '/edit/:noteId',
            templateUrl: 'templates/edit.html',
            controller: 'EditCtrl'
        });

        $urlRouterProvider.otherwise('/');
    });


    app.run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.cordova && window.cordova.InAppBrowser){
                window.open = window.cordova.InAppBrowser.open; 
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });

}());
