const uuid = require('uuid');
const licenseRepository = require('../../../../repositories/license.repository');

exports.default = async (payload) => {
	try {		
		let license = {
			active: false,
			licenseKey: uuid.v1()
		}	

		// Create new license key
		await licenseRepository.create(license);
	} catch (error) {
		throw error;
	}
}