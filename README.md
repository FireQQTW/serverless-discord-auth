## Discord license key authentication bot serverless backend
##### To be used with [alexsnkr/discord-auth-bot](https://github.com/alexsnkr/discord-auth-bot)

### Instructions
Run `npm install`

Rename `.env.example` to `.env`

Add your Stripe secret key and webhook secret to `.env`

Run `serverless deploy`

Setup a Stripe webhook:
- Set URL to API Gateway url `https://[api_gateway_url]/webhook/stripe` 
- Select `customer.subscription.created` from event types list
