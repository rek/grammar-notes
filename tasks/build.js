var gulp = require('gulp');

module.exports = function() {
	return gulp
};

module.exports.dependencies = ['clean', 'copy:html', 'babel:client'];
