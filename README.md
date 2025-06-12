# QuickBlog

A full-stack blogging platform built with a React client and a Node.js server.

## Project Structure

- `/client`: Contains the React (Vite) frontend application.
- `/server`: Contains the Node.js (Express) backend application.

Each directory is a self-contained project with its own `package.json` and `node_modules` folder.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm)
- [Git](https://git-scm.com/)

### Installation & Setup

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/your-repository-name.git
    cd your-repository-name
    ```

    _Replace `your-username/your-repository-name` with the actual URL of your GitHub repository._

2.  **Set up the Server:**

    - Navigate to the server directory:
      ```sh
      cd server
      ```
    - Install dependencies:
      ```sh
      npm install
      ```
    - **Create Environment File:** Create a file named `.env` in the `/server` directory. This file will hold your secret keys and is not tracked by Git. Add the necessary variables like the ones below, replacing the values with your actual credentials.

      ```env
      # The port for the server to run on
      PORT=3000

      # Your MongoDB connection string
      MONGODB_URI="your_mongodb_connection_string"

      # A secret key for signing JSON Web Tokens
      JWT_SECRET="your_super_secret_key"

      # Google Gemini API Key
      GEMINI_API_KEY="your_gemini_api_key"

      # ImageKit.io Credentials
      IMAGEKIT_PUBLIC_KEY="your_imagekit_public_key"
      IMAGEKIT_PRIVATE_KEY="your_imagekit_private_key"
      IMAGEKIT_URL_ENDPOINT="your_imagekit_url_endpoint"

      # Default Admin Credentials
      ADMIN_EMAIL="admin@example.com"
      ADMIN_PASSWORD="admin"
      ```

    - Start the development server:
      ```sh
      npm run server
      ```
      The server will start on the port defined in your `.env` file (e.g., http://localhost:3000).

3.  **Set up the Client:**

    - Open a **new terminal** and navigate to the client directory from the project root:
      ```sh
      cd client
      ```
    - Install dependencies:
      ```sh
      npm install
      ```
    - **Create Environment File:** Create a file named `.env` in the `/client` directory. Add the base URL for your backend API.

      ```env
      VITE_BASE_URL=http://localhost:3000
      ```

      _Note: This URL should match the `PORT` your server is running on._

    - Start the development server:
      ```sh
      npm run dev
      ```
      The client will start, and you can view it in your browser at http://localhost:5173 (or another port if specified by Vite).

## Available Scripts

### Server (`/server`)

- `npm run server`: Starts the development server with `nodemon` for automatic restarts.
- `npm start`: Starts the server in production mode.

### Client (`/client`)

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Serves the production build locally.
- `npm run lint`: Lints the source code.
