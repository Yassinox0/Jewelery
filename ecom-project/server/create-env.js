const fs = require('fs');
const path = require('path');

// Define the content of the .env file
const envContent = `PORT=5000
STRIPE_SECRET_KEY=sk_test_51OyTOjAYvhOYQcIKRPvDRiPKlPdqFvj3Wy4Hs9qJWxgDcNzgYCPXmAMDUUvKVKdVfQbRRVDlYxGZLBXvtqXPKYGU00Qgzgvp3a
CLIENT_URL=http://localhost:3000
JWT_SECRET=your_jwt_secret_key`;

// Define the path to the .env file
const envPath = path.join(__dirname, '.env');

// Write the content to the .env file
fs.writeFileSync(envPath, envContent);

console.log('.env file created successfully!');
console.log('Content:');
console.log(envContent); 