const response = (statusCode, data = null) => {
	const response = {
		statusCode: statusCode
	};

	if (data) {
		response.body = JSON.stringify(data);
	}

	return response;
};

module.exports = response