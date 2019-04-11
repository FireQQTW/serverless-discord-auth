const dynamodb = require('../utils/dynamodb');
const tableName = process.env.TABLE_PREFIX + '-licenses';
const uuid = require('uuid');

module.exports = dynamodb.model(tableName, {
	licenseKey: {
		type: String,
		hashKey: true
	},
	discordId: String,
	active: Boolean,
}, {update: true});