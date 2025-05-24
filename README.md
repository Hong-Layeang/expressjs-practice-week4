# 📰 News Company REST API

This project is a modular RESTful API built using **Express.js** for managing Articles, Journalists, and Categories. It follows **MVC architecture** and REST design principles, and uses **dummy in-memory data** for simplicity.

---

## 📁 Project Structure

```
project/
├── controllers/
│   ├── articlesController.js
│   ├── journalistsController.js
│   └── categoriesController.js
├── routes/
│   ├── articleRoutes.js
│   ├── journalistRoutes.js
│   └── categoryRoutes.js
├── models/
│   └── data.js
├── middleware/
│   └── logger.js
├── server.js
├── package.json
└── README.md
```

---

## 🚀 Features

- Full **CRUD** operations for:
  - Articles
  - Journalists
  - Categories
- Modular MVC structure for **separation of concerns**
- **Sub-resource endpoints** to fetch related articles
- Uses **dummy JSON** data instead of a database
- Includes **middleware support** (e.g., logger, validator)

---

## 📦 Installation

```bash
git clone <your-repo-url>
cd <project-directory>
npm install
node server.js
```

Server runs on:  
`http://localhost:3000`

---

## 🔗 API Endpoints

### 📄 Articles

| Method | Endpoint           | Description               |
|--------|--------------------|---------------------------|
| GET    | /articles          | Get all articles          |
| GET    | /articles/:id      | Get article by ID         |
| POST   | /articles          | Create a new article      |
| PUT    | /articles/:id      | Update an article         |
| DELETE | /articles/:id      | Delete an article         |

### 🧑 Journalists

| Method | Endpoint                  | Description                     |
|--------|---------------------------|---------------------------------|
| GET    | /journalists              | Get all journalists             |
| GET    | /journalists/:id          | Get journalist by ID            |
| POST   | /journalists              | Create a new journalist         |
| PUT    | /journalists/:id          | Update journalist info          |
| DELETE | /journalists/:id          | Delete a journalist             |
| GET    | /journalists/:id/articles | Get articles by journalist ID   |

### 🗂 Categories

| Method | Endpoint                | Description                     |
|--------|-------------------------|---------------------------------|
| GET    | /categories             | Get all categories              |
| GET    | /categories/:id         | Get category by ID              |
| POST   | /categories             | Create a new category           |
| PUT    | /categories/:id         | Update a category               |
| DELETE | /categories/:id         | Delete a category               |
| GET    | /categories/:id/articles| Get articles by category ID     |

---

## 🧠 Reflective Questions

1. Why is separation of concerns important in backend development?
2. How do sub-resource routes (e.g., `/journalists/:id/articles`) improve clarity?
3. What are the trade-offs of using dummy JSON data over a real database?
4. How would you implement authentication if journalists could manage only their own articles?

---

## 📚 References

- [REST API Principles](https://restfulapi.net/)
- [MVC in Node.js](https://www.geeksforgeeks.org/model-view-controllermvc-architecture-for-node-applications/)
