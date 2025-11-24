# 🚀 WORKFLOW SELF-STUDY (Vite & Vanilla JS)

This is a modern frontend project built with [Vite](https://vitejs.dev/) for fast development and bundling.

The project is configured with a robust development workflow, including automatic code quality checks before every commit.

---

## 🛠️ Technical Setup

- **Build Tool:** Vite
- **Language:** Vanilla JavaScript
- **Code Quality:**
  - [**ESLint**](https://eslint.org/): To enforce code quality rules.
  - [**Prettier**](https://prettier.io/): For automatic code formatting.
- **Version Control:**
  - [**Husky**](https://typicode.github.io/husky/#/): To automatically run Prettier and ESLint before every Git commit (`pre-commit` hook).

## 💻 Getting Started

Follow these steps to run the project locally:

### 1. Cloning and Installation

```bash
# Clone the repository
git clone [YOUR-REPO-URL]

# Navigate to the project folder
cd workflow-selfstudy

# Install all dependencies (Vite, ESLint, Prettier, Husky)
npm install
```

### Configure Environment Variables

This project requires an API URL to fetch and display data.

- Create a new file in the root of the project directory named .env.
- Add your API URL to this file using the Vite convention:

### .env file content

VITE_API_URL="https://jsonplaceholder.typicode.com/posts"
⚠️ Note: If you don't define the VITE_API_URL, the application will display an error message and fail to load external data.

```bash
# Start the local development server
npm run dev
```
