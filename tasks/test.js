var gulp = require('gulp');
var mocha = require('./mocha.js');

module.exports = function() {
	return mocha.bind(this)()
};

module.exports.dependencies = ['build'];
