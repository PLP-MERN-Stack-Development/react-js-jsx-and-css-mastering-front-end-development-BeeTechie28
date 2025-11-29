# React Task Manager & API App

A fully functional **React application** with:

- A **Task Manager** to add, complete, delete, and filter tasks.
- An **API Page** fetching posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/) with search functionality.
- **Responsive design** using plain CSS (no Tailwind).
- **React Router** for smooth navigation between pages.
- A clean layout with **Navbar** and **Footer** components.

---

## 📝 Features

### Task Manager
- Add new tasks.
- Mark tasks as completed/undo completion.
- Delete tasks.
- Filter tasks (All, Completed, Active).

### API Page
- Fetch posts from a public API.
- Search posts by title.
- Responsive grid layout for displaying posts.
- Loading and error handling.

### Layout & Styling
- Navbar with links to Home, Tasks, and API pages.
- Footer with copyright information.
- Fully responsive design for desktop, tablet, and mobile.
- Styled with **plain CSS**.
- Optional dark mode via `dark-mode` class on `<body>`.

---

## 📂 Project Structure
my-react-app/
├─ node_modules/
├─ public/
│ └─ index.html
├─ src/
│ ├─ App.jsx
│ ├─ main.jsx
│ ├─ App.css
│ ├─ layouts/
│ │ └─ MainLayout.jsx
│ ├─ components/
│ │ ├─ Navbar.jsx
│ │ └─ Footer.jsx
│ └─ pages/
│ ├─ Home.jsx
│ ├─ TaskManager.jsx
│ └─ ApiPage.jsx
├─ package.json
└─ vite.config.js


---

## ⚡ Installation & Setup

### 1. Clone the repository

```bash
https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-BeeTechie28.git


2. Navigate to the project folder
cd my-react-app


3. Install dependencies
npm install


4. Start the development server
npm run dev



5. Open the app
http://localhost:5173


🖌️ Styling

All components styled with App.css.

Responsive design using flexbox and CSS grid.

Buttons, cards, forms, and task lists are consistently styled.

Optional dark mode can be activated by adding dark-mode class to <body>.

🚀 Usage
Home Page

Shows a welcome message and instructions.

Task Manager Page

Add tasks using the input field and Add button.

Mark tasks as Done/Undo.

Delete tasks using Delete button.

API Page

Displays posts fetched from JSONPlaceholder.

Search posts by typing in the search input.

Responsive grid adjusts for different screen sizes.

📷 Screenshots
Home Page

Task Manager

API Page

Note: Replace the placeholders above with actual screenshots of your app. Create a screenshots/ folder inside your project and save images with the names home.png, taskmanager.png, api.png.

💻 Tech Stack

React 18+

React Router DOM

 CSS

Vite.js (development server and build tool)

JSONPlaceholder API for demo data

⚙️ Deployment
Deploy on Vercel

Install Vercel CLI if not installed:
npm install -g vercel

Run deployment:
vercel

📝 License

This project is licensed under the MIT License.

