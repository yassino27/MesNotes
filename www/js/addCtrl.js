(function() {
'use strict';
    angular
        .module('mynotes')
        .controller('AddCtrl', function($scope, $state, $log, NoteStore) {
        $log.info('dans le Add Ctrl biiz');

        $scope.note = {
            id: new Date().getTime().toString(),
            title: '',
            description: ''
        };
        $log.info('La scope note vide égale à  : ', $scope.note);
        $scope.save = function() {
            NoteStore.create($scope.note);
            $state.go('list');
        };

    });





}());