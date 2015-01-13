'use strict';
var expect = require('chai').expect;
var scaffolder = require('../lib/scaffolder');
var gulp = require('gulp');
var del = require('del');
var path = require('path');
var requireindex = require('requireindex');
describe('building files', function() {
  // beforeEach(function (done) {
  //   del('./js/*', done);
  // });
  it('should produce a new js file when passed a data object', function () {
    var options = {
      src : path.join(__dirname, 'templates/test1.hbs'),
      dest : path.join(__dirname, 'dest/'),
      data : {
        message : 'Hello World'
      }
    };
    return scaffolder(options)
      .then(function () {
        var file = require('./dest/test1');
        expect(file).to.have.property('exported', 'Hello World');
      });
  });
  it('it should produce a new js file when passed no data object', function () {
    var options = {
      src : path.join(__dirname, 'templates/test2.hbs'),
      dest : path.join(__dirname, 'dest/')
    };
    return scaffolder(options)
      .then(function () {
        var file = require('./dest/test2');
        expect(file).to.have.property('exported', '');
      });
  });
});
