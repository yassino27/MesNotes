(function() {
'use strict';
    angular
        .module('mynotes') 
    	.controller('EditCtrl', function($scope, $state, $log, NoteStore) {
        $log.info('dans le Edit Ctrl');

        $scope.note = angular.copy(NoteStore.get($state.params.noteId));
        $scope.save = function() {
            NoteStore.update($scope.note);
            $state.go('list');
        };
    });




}());