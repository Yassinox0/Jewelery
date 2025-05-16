const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

// Load environment variables
dotenv.config();

// Initialize Stripe with the API key from environment variables
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the E-Commerce API');
});

// Test route for products
app.get('/api/products', (req, res) => {
  // Sample products data
  const products = [
    { id: 1, name: 'Laptop', price: 1299.99, description: 'Powerful laptop' },
    { id: 2, name: 'Smartphone', price: 999.99, description: 'Latest smartphone' },
    { id: 3, name: 'Headphones', price: 199.99, description: 'Wireless headphones' }
  ];
  
  res.status(200).json({
    success: true,
    count: products.length,
    data: products
  });
});

// Stripe payment endpoint
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    console.log('Received checkout request:', req.body);
    const { items, customerEmail } = req.body;
    
    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'No items in cart' });
    }
    
    // Create line items for Stripe
    const lineItems = items.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          images: [item.image || 'https://via.placeholder.com/100'],
          description: item.description || '',
        },
        unit_amount: Math.round(item.price * 100), // Stripe requires cents
      },
      quantity: item.quantity,
    }));

    console.log('Creating Stripe session with line items:', lineItems);

    // Create Stripe session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      customer_email: customerEmail,
      success_url: `${process.env.CLIENT_URL || 'http://localhost:3000'}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL || 'http://localhost:3000'}/cart`,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'FR', 'DE'],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0,
              currency: 'usd',
            },
            display_name: 'Free shipping',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 5,
              },
              maximum: {
                unit: 'business_day',
                value: 7,
              },
            },
          },
        },
      ],
    });

    console.log('Stripe session created:', session.id);
    res.status(200).json({ id: session.id, url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 