const dynamoose = require('dynamoose');

if (process.env.IS_OFFLINE) {
	dynamoose.AWS.config.update({
		'accessKeyId': 'AKID',
		'secretAccessKey': 'SECRET',
		'region': 'us-east-1'
	  });
	  
	dynamoose.local();
}

module.exports = dynamoose;