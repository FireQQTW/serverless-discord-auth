const response = require('../../utils/response');
const licenseRepository = require('../../repositories/license.repository');

exports.handler = async (event) => {

	let body = JSON.parse(event.body);

	// Get license key from database
	let license = await licenseRepository.get({licenseKey: body.licenseKey});
	if(!license) return response(404, 'License not found.')
	if(license.active) return response(404, 'License already active');

	// Set license to active and map to discord ID
	await licenseRepository.update({licenseKey: license.licenseKey}, {active: true, discordId: body.discordId});

	return response(200);
};