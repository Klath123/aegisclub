# AEGIS Club Website
https://aegisclub.netlify.app/
A full-stack website for Aegis club built with the MERN stack (React, TypeScript, Tailwind CSS, Node.js, and MongoDB).

## Project Structure

- `client/`: React frontend with Tailwind CSS and TypeScript.
- `server/`: Node.js Express backend with Mongoose and TypeScript.

## Getting Started

If you've just forked this repository, follow these steps to get your local environment running.

### 1. Prerequisites

- **Node.js**: Ensure you have Node.js (v18+) installed.
- **MongoDB**: You need a running MongoDB instance (Local or Atlas).

### 2. Installation

You need to install dependencies for both the frontend and the backend.

#### **Backend Setup**
```bash
cd server
npm install
```
- Create a `.env` file in the `server` directory.
- Copy contents from `.env.example` and update the `MONGODB_URI` with your database connection string.

#### **Frontend Setup**
```bash
cd ../client
npm install
```

### 3. Running the Application

You will need to run two terminal windows (one for server, one for client).

**Terminal 1 (Backend):**
```bash
cd server
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd client
npm run dev
```

The server usually runs on `http://localhost:5000` and the frontend on `http://localhost:5173`.

## Technologies Used

- **Frontend**: React, Vite, TypeScript, Tailwind CSS, Lucide React, Axios, React Router.
- **Backend**: Node.js, Express, TypeScript, Mongoose, Dotenv, Cors.
- **Database**: MongoDB.
