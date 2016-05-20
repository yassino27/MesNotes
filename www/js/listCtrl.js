(function() {
'use strict';
    angular
        .module('mynotes')
        .controller('ListCtrl', function($scope, $log, NoteStore) {
        $log.info('dans le List Ctrl la nvlle page');

        $scope.reordering = false;

        $scope.toggleReordering = function() {
          $scope.reordering = !$scope.reordering;
        }

        $scope.notes = NoteStore.list();

        $scope.remove = function(noteId){
          NoteStore.remove(noteId);
        };

        $scope.move = function(note, fromIndex, toIndex) {
          NoteStore.move(note, fromIndex, toIndex);

        }
    });








}());