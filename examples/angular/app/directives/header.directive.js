//# header
// for the Module module
// Makes a header

angular.module('Module', [])
.directive('header', function() {
  'use strict';
  return {
    template: '<h1>I am a directive </h1>',
    restrict: 'E',
    link: function (scope, element) {
    }
  };
});
