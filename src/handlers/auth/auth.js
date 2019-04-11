const response = require('../../utils/response');
const licenseRepository = require('../../repositories/license.repository');

exports.handler = async (event) => {

	let body = JSON.parse(event.body);

	let license = await licenseRepository.get({licenseKey: body.licenseKey});
	if(!license) return response(404, 'License not found.')
	if(license.active) return response(404, 'License already active');

	await licenseRepository.update({licenseKey: license.licenseKey}, {active: true, discordId: body.discordId});

	return response(200);
};