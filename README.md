# 📚 MongoDB + Spring Boot Basic CRUD

This is my **first project using MongoDB** 🎉 — a beginner-friendly **CRUD application** built with **Spring Boot** and **MongoDB**, managing two collections: **Authors** and **Books**.  

A simple **CRUD application** built with **Spring Boot** and **MongoDB**, featuring **Authors** and **Books** collections.  
The backend exposes a REST API consumed by a **JavaScript frontend** (using `fetch`) with templates served from Spring’s `resources` directory.

---

## 🚀 Features

- **Author Management**
  - Create, Read, Update, and Delete authors.
- **Book Management**
  - Create, Read, Update, and Delete books.
- **MongoDB Integration**
  - Uses Spring Data MongoDB for persistence.
- **Frontend with JS Fetch**
  - AJAX calls to the backend API without page reloads.
- **Layered Architecture**
  - Controller → Service → Repository.
- **Beginner Friendly**
  - Simple structure for learning Spring Boot + MongoDB integration.

---

## 🛠 Tech Stack

- **Backend**: Spring Boot, Spring Data MongoDB
- **Database**: MongoDB
- **Frontend**: HTML, CSS, JavaScript (`fetch` API)
- **Templating**: Thymeleaf (Spring MVC)
- **Build Tool**: Maven
- **Language**: Java 24

---

## 📂 Project Structure
<img width="340" height="265" alt="image" src="https://github.com/user-attachments/assets/cb344e18-4d18-4767-a7b1-ce22381338de" />

## 📡 API Endpoints
- 🟢 **GET**: /api/authors -> Get all authors
- 🔵 **GET**: /api/books -> Get all books

---

## ⚙️ Setup & Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/AlejoAmaris03/mongodb-spring-basic-crud.git
   cd mongodb-spring-basic-crud
  
2. **Configure MongoDB connection in application.properties**
   ```properties
   spring.data.mongodb.uri=mongodb://localhost:27017/
   spring.data.mongodb.database=bookstore

3. **Build & Run the application**
4. **Access the application**
   ```arduino
   http://localhost:8080/view/authors

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!

Feel free to fork the repo and submit a PR.
