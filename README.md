# ✨ Modern Task Manager: Productivity Suite

![HTML5](https://img.shields.io/badge/HTML5-Semantic-orange?logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Glassmorphism-blue?logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![Storage](https://img.shields.io/badge/Data-LocalStorage-lightgrey)

> **A high-performance task management application featuring a luxury "Dark Gold" aesthetic. Built with vanilla JavaScript to demonstrate advanced DOM manipulation and persistent client-side state management without external frameworks.**

---

## 🚀 Live Demo
**[Click here to access the App](https://saiganesh-todo.netlify.app/)**
*(Try adding a task, refreshing the page, and seeing it persist!)*

---

## 🧠 The Engineering (How it Works)
This project focuses on **Zero-Dependency Architecture**. Instead of relying on React or Vue, I built a custom state management system from scratch.

### 1. Persistent State Engine (Local Storage)
Users don't want to lose data when they refresh.
* **Serialization:** The app serializes the task array into JSON strings and commits them to the browser's `localStorage` on every update.
* **Hydration:** On load, the app parses the stored JSON and dynamically re-renders the DOM, ensuring a seamless experience.

### 2. Advanced DOM Manipulation
* **Dynamic Rendering:** Task cards are generated programmatically using template literals and `document.createElement`, allowing for instant updates without page reloads.
* **Event Delegation:** Efficiently handles clicks on dynamically created elements (like "Delete" or "Complete" buttons) by attaching listeners to the parent container.

### 3. Smart Filtering Logic
* Implemented array filtering algorithms (`.filter()`, `.map()`, `.sort()`) to categorize tasks by **Priority** (High/Medium/Low) and **Status** (Pending/Completed) in O(n) time.

---

## ✨ Key Features
* **🎨 Luxury UI:** A "Dark Mode" aesthetic with Gold accents (`#FFD700`) and Glassmorphism effects.
* **📅 Metadata Rich:** Supports Categories (Work, Personal), Priority Levels, and Due Dates.
* **💾 Data Persistence:** Tasks survive page reloads and browser restarts.
* **🔍 Smart Filters:** Instantly toggle between "All," "Pending," and "Completed" views.
* **📱 Responsive:** Fully optimized for Mobile, Tablet, and Desktop layouts using CSS Grid & Flexbox.

---

## 🛠️ Tech Stack
* **Core:** HTML5, CSS3, JavaScript (ES6+)
* **Styling:** CSS Variables (Custom Properties) for theming
* **Storage:** Web Storage API (LocalStorage)
* **Deployment:** Netlify

---

## 💻 How to Run Locally

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/i-saiganesh/todo-list.git](https://github.com/i-saiganesh/todo-list.git)
    cd todo-list
    ```

2.  **Launch the App**
    Simply open `index.html` in your browser.
    *Or, if using VS Code, right-click and select "Open with Live Server".*

---

## 📂 Project Structure

```text
todo-list/
│
├── index.html        # Semantic Markup
├── style.css         # CSS Variables & Responsive Design
├── script.js         # State Management & Event Logic
├── images/           # Assets
└── README.md         # Documentation
