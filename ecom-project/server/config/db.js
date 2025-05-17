const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const uri = "mongodb+srv://yassinezwine25:oUy3uJY6yLwlExOP@cluster0.bwnaong.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;

// Connect to MongoDB
const connectDB = async () => {
  try {
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("MongoDB connection established successfully");
    
    db = client.db('ecommerce'); // Use a database named 'ecommerce'
    return db;
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

// Get DB instance
const getDB = () => {
  if (!db) {
    throw new Error("Database not initialized. Call connectDB first.");
  }
  return db;
};

// Close connection
const closeDB = async () => {
  await client.close();
  console.log("MongoDB connection closed");
};

module.exports = { connectDB, getDB, closeDB }; 