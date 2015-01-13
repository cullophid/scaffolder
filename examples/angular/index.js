'use strict';
var path = require('path');
var scaffolder = require('../../index');
var options = {
  src : path.join(__dirname, './templates/*'),
  dest : path.join(__dirname, './app/directives'),
  data : {
    moduleName : 'Module',
    directives : {
      header : {
        name : 'header',
        description : 'Makes a header',
        template : '<h1>I am a directive </h1>',
        restrict : 'E'
      }
    }
  }
};

scaffolder(options)
  .then(function () {
    console.log('All Done!');
  });
