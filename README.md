# 📚 Library Management API

A RESTful Library Management System built with **Express**, **TypeScript**, and **MongoDB** (Mongoose). This system allows CRUD operations on books and borrow functionality with validations, aggregation reporting, filtering, and more.

---

## 🚀 Features

- 📘 Create, Read, Update, Delete (CRUD) for books
- 🔍 Genre-based filtering, pagination, and sorting
- 🔐 Schema validation using Mongoose
- 📉 Business logic enforcement (e.g., copies & availability tracking)
- 🧮 Aggregation pipeline for borrowing summary reports
- 🧠 Mongoose middleware (pre/post)
- 🛠️ Mongoose static and instance methods
- 🔁 Robust error handling with consistent response format

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Language**: TypeScript
- **Database**: MongoDB + Mongoose
- **Tools**: Postman, Nodemon, Dotenv

---


## 📘 Book Endpoints

| Method | Endpoint             | Description                                |
| ------ | -------------------- | ------------------------------------------ |
| POST   | `/api/books`         | Create a new book                          |
| GET    | `/api/books`         | Get all books with filter, sort, and limit |
| GET    | `/api/books/:bookId` | Get a specific book by ID                  |
| PUT    | `/api/books/:bookId` | Update a book's details                    |
| DELETE | `/api/books/:bookId` | Delete a book                              |


## 📚 Borrow Book Endpoints

| Method | Endpoint      | Description                                      |
| ------ | ------------- | ------------------------------------------------ |
| POST   | `/api/borrow` | Borrow a book (with quantity and due date)       |
| GET    | `/api/borrow` | Get summary of borrowed books (uses aggregation) |


## 🔧 Installation & Setup


### 1. Clone the repository
```bash
git clone https://github.com/your-username/library-management-api.git
cd library-management-api
```

### 2. Install dependencies
```bash
npm install
```
### 3. Setup environment variables
```bash
DB_USER = your_username
DB_PASS = your_password
```

### 4. Run the server 
```bash
npm run dev
```

