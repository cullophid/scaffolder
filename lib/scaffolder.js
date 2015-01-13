'use strict';
var P = require('bluebird');
var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var dataLoader = require('gulp-data');
var rename = require('gulp-rename');
var path = require('path');

var lodash = require('lodash');
var defaults = {
  src : './templates/*',
  data : {},
  dest : './js/',
  ext : '.js'
};

module.exports = function (opt) {
  //Merge options with defaults
  var options = lodash.extend({}, defaults, opt);
  // get dataModels
  //return a promise
  return new P(function (resolve, reject) {
    gulp.src(options.src)
      .pipe(dataLoader(options.data))
      .pipe(handlebars())
      .pipe(rename({
        extname: options.ext
      }))
      .pipe(gulp.dest(options.dest))
      .on('end', resolve)
      .on('error', reject);
  });

};
