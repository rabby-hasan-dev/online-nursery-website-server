
# 🌱 Online Nursery Website Back End 🌱


## Project Overview

#### Project Description:
The backend of the online nursery website is built using **Node.js** and **Express.js**. It serves as the foundation for managing products, categories, users, orders, and payments. The backend is integrated with a **MongoDB** database to store all relevant data, including user accounts, products, categories, and orders. It also handles **Stripe.js** for payment processing and provides secure RESTful APIs for the frontend to interact with the system.

## Features

### Product and Category Management 🛠️

- **CRUD Operations**: Supports Create, Read, Update, and Delete operations for products and categories.
- **Data Validation**: Ensures product details like title, price, category, and stock are validated before being added to the database.
- **Image Upload**: Supports image uploads via ImgBB or direct image URL.



### Uses Technology Stack:

*   **Programming Language**: TypeScript
*   **Web Framework**: Express.js
*   **ODM & Validation Library**: Mongoose for MongoDB


### Other Tools and Packages uses:

*   http-status
*   zod

## Installation
#### Prerequisites
List any prerequisites needed to set up the project.

- Node.js (v22.2.0 or higher)
- Mongoose (v8.4.1 or higher)
###### Node Package Manager(npm)
- npm(v10.2.5 or latest) 

### Steps to Install
Provide step-by-step instructions for setting up the project locally.

1.Clone the repository:

2.Navigate to the project directory:

3.Install dependencies:

4.Create a `.env` file and configure the environment variables. 
- PORT=
- DATABASE_URL=
- NODE_ENV=

5.Start the development server:


## Usage
Running the Server
Provide instructions on how to start and use the server.

* npm run dev


## API Documentation
### 🔑 Endpoints Overview

### Product Routes
- `GET /api/products`: Fetch all products with filtering, sorting, and pagination options.
- `GET /api/products/:id`: Get details of a specific product.
- `POST /api/products`:  Create a new product.
- `PUT /api/products/:id`: Update an existing product.
- `DELETE /api/products/:id`: Delete a product.

### Category Routes
- `GET /api/categories`: Fetch all categories.
- `POST /api/categories`: Create a new category.
- `PUT /api/categories/:id`: Update an existing category.
- `DELETE /api/categories/:id`: Delete a category.


### Order Routes
- `POST /api/orders`: Create a new order (Payment and COD).
- `GET /api/orders`: Get all orders.
- `GET /api/orders/user/:userId`: Get all orders placed by a specific user.
- `PUT /api/orders/:id`: Update the status of an order.
- `DELETE /api/orders/:id`: Delete an order.

### Payment Routes
- `POST /api/payment/stripe`: Process Stripe payment.
- `POST /api/payment/cod`: Mark an order as COD.

