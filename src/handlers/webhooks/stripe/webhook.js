const response = require('../../../utils/response')
const _ = require('lodash');
let handlers = require('./event-handlers')

exports.handler = async (event) => {
	try {
		const stripe = require('stripe')(process.env.STRIPE_SECRET);

		let sig = event.headers["Stripe-Signature"];

		let stripeEvent = await stripe.webhooks.constructEvent(event.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
		let payload = stripeEvent.data.object;
		let method = `handle${_.upperFirst(_.camelCase(stripeEvent.type))}`;

		if(handlers[method]) handlers[method](payload);
		
		return response(200, 'Webook handled')
	} catch (error) {
		return response(400, {
			message: error
		});
	}
};