# capstone
PROJECT NAME : Freelancer Project Management and Marketplace
STUDENT NAME : Anish Acharya
 
This is a freelance graphic design app that helps designers like Tom manage projects, track time, find new clients, showcase work, and handle payments securely.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Project Structure](#project-structure)
 

## Features

- User Authentication (Signup, Login)
- User Profile Management
- Projects Management (CRUD, Time Tracking)
- Client Interaction (Messaging, File Sharing)
- Portfolio Showcase
- Client Discovery
- Payment Integration (optional)

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Flutter (for the frontend)

## Getting Started

1. Clone the repository:
   git clone git@github.com:aanishacharyaa/capstone.git
   cd capstone

2.Install dependencies:
   npm install

 
3.Run the Node.js server:
  node capstone.js

API Endpoints
User Authentication

    POST /api/signup: Register a new user.
    POST /api/login: Authenticate and receive a JWT token.

Projects Management

    GET /api/projects: Get all projects.
    GET /api/projects/:projectId: Get a specific project.
    POST /api/projects: Create a new project.
    PUT /api/projects/:projectId: Update a project.
    DELETE /api/projects/:projectId: Delete a project.

Project Structure

    capstone.js: Main server file.
    models/: Database models (e.g., User, Project).
    routes/: API routes.
    middleware/: Middleware functions.
   
