# E-Commerce Server

This is the server component for the e-commerce application.

## Setup

1. Install dependencies:
```
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=http://localhost:3000
JWT_SECRET=your_jwt_secret_key
```

3. Replace `your_stripe_secret_key` with your actual Stripe secret key from the Stripe dashboard.

4. Start the server:
```
npm run dev
```

## Stripe Integration

The server integrates with Stripe for payment processing. To use Stripe:

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe dashboard
3. Add your secret key to the `.env` file
4. Test the integration using Stripe's test cards:
   - Card number: 4242 4242 4242 4242
   - Expiry date: Any future date
   - CVC: Any 3 digits
   - ZIP: Any 5 digits 