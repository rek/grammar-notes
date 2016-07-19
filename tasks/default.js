var gulp = require('gulp');
var build = require('./build.js');
var watch = require('./watch.js');

module.exports = function() {
	return build().watch()
};

module.exports.dependencies = ['clean'];
