# Trello Clone

This is a full-stack Trello Clone application built with **Angular** for the frontend and **Spring Boot** for the backend.  
The application allows users to create and manage boards.

## Project Structure


## Prerequisites

- **Node.js** (v16 or later) and **npm**
- **Angular CLI** (v15 or later)
- **Java** (JDK 17 or later)
- **Maven** (for managing Spring Boot dependencies)
- **PostgreSQL** database

---

## Setup Instructions

### **1. Clone the Repository**

```bash
git clone https://github.com/your-username/project-name.git
cd project-name
```

### **2. Setting Up the Frontend**

Navigate to the frontend/ folder:
```bash
cd frontend
```

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
ng serve
```

Open the Angular app in your browser at:
(http://localhost:4200)

### **3. Setting Up the Backend**

Navigate to the backend/ folder:
```bash
cd backend
```

Update the database configuration in src/main/resources/application.properties:

properties
```java
spring.datasource.url=jdbc:postgresql://<YOUR_DATABASE_HOST>:<PORT>/<DATABASE_NAME>
spring.datasource.username=<YOUR_DATABASE_USERNAME>
spring.datasource.password=<YOUR_DATABASE_PASSWORD>
```
Run the backend server:

```bash
mvn spring-boot:run
```

The Spring Boot server will be available at:
(http://localhost:8080)

### **4. Running the Application**

Start the backend (Spring Boot) server as described above.  
Start the frontend (Angular) development server.

Access the app at:
(http://localhost:4200)

***API Endpoints***
Endpoint	Method	Description  
/api/boards	GET	Fetch all boards  
/api/boards/{id}	GET	Fetch a board by ID  
/api/boards	POST	Create a new board  
