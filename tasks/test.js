var gulp = require('gulp');
var mocha = require('./mocha.js');

module.exports = function() {
	return mocha()
};

module.exports.dependencies = ['build'];
