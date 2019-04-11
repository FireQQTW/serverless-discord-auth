module.exports = require('require-dir')('.', {
	mapValue: function (value, baseName) {
		return value.default;
	}
});