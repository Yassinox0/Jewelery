💎 MX E-Commerce Platform
A full-stack e-commerce application built with Node.js, React, MySQL, and Sequelize.

🚀 Features
✅ User authentication (signup, login, logout)

🛍️ Product listing and details

🛒 Shopping cart functionality

📦 Order processing and tracking

🛠️ Admin dashboard for managing products, orders, and users

💳 Stripe payment integration

📱 Responsive UI using Bootstrap 5

🧰 Tech Stack
🔧 Backend
Node.js

Express.js

MySQL (via XAMPP)

Sequelize ORM

JWT Authentication

Stripe Payment Gateway

🎨 Frontend
React.js

Redux Toolkit

React Router

Bootstrap 5

Axios

React Toastify

📁 Project Structure
bash
Copier
Modifier
ecom-project/
├── client/               # React frontend
│   ├── public/
│   └── src/
│       ├── components/   # Reusable UI components
│       ├── pages/        # Page components
│       ├── redux/        # Redux state management
│       └── ...
└── server/               # Node.js backend
    ├── config/           # Configuration files
    ├── controllers/      # Route controllers
    ├── middleware/       # Custom middleware
    ├── models/           # Sequelize models
    └── routes/           # API routes
🛠️ Getting Started
✅ Prerequisites
Node.js (v14+)

XAMPP (MySQL server)

npm or yarn

📦 Installation
Clone the repository

bash
Copier
Modifier
git clone https://github.com/Yassinox0/Jewelery.git
cd Jewelery
Install backend dependencies

bash
Copier
Modifier
cd server
npm install
Install frontend dependencies

bash
Copier
Modifier
cd ../client
npm install
Setup MySQL database

Open XAMPP and start Apache & MySQL

Create a database named ecom_db

Configure environment variables

Create a .env file inside the server/ folder:

env
Copier
Modifier
DB_NAME=ecom_db
DB_USER=root
DB_PASSWORD=
DB_HOST=localhost
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
Run the backend server

bash
Copier
Modifier
cd ../server
npm run dev
Run the frontend client

bash
Copier
Modifier
cd ../client
npm start
Open in browser
Visit http://localhost:3000

📡 API Endpoints
🔐 Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user
GET	/api/auth/me	Get current user
GET	/api/auth/logout	Logout user

🛍️ Products
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get product by ID
POST	/api/products	Create product (Admin)
PUT	/api/products/:id	Update product (Admin)
DELETE	/api/products/:id	Delete product (Admin)

🗂️ Categories
Method	Endpoint	Description
GET	/api/categories	Get all categories
GET	/api/categories/:id	Get category by ID
POST	/api/categories	Create category (Admin)
PUT	/api/categories/:id	Update category (Admin)
DELETE	/api/categories/:id	Delete category (Admin)

📦 Orders
Method	Endpoint	Description
GET	/api/orders	Get all orders (Admin)
GET	/api/orders/:id	Get order by ID (Admin)
POST	/api/orders	Create new order
PUT	/api/orders/:id	Update order (Admin)
GET	/api/orders/my-orders	Get current user orders

👤 Users
Method	Endpoint	Description
GET	/api/users	Get all users (Admin)
GET	/api/users/:id	Get user by ID (Admin)
PUT	/api/users/:id	Update user (Admin)
DELETE	/api/users/:id	Delete user (Admin)
PUT	/api/users/profile	Update current user
