# 📝 Todo App with Context API

A modern, feature-rich Todo application built with **React** and **Vite**, demonstrating state management using the **Context API**. This project showcases clean architecture, React hooks, and persistent data storage.

![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0.1-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC?logo=tailwind-css)

## ✨ Features

- ✅ **Add Todos** - Create new tasks with a simple form
- ✏️ **Edit Todos** - Inline editing of existing tasks
- ❌ **Delete Todos** - Remove completed or unwanted tasks
- ✔️ **Toggle Completion** - Mark tasks as complete/incomplete
- 💾 **Persistent Storage** - Data saved in localStorage
- 🎨 **Dynamic Styling** - Visual feedback for completed tasks
- 🚀 **Fast & Responsive** - Built with Vite for optimal performance
- 🎯 **Context API** - No prop drilling, clean state management

## 🛠️ Technologies Used

- **React 18.3.1** - UI library
- **Vite 6.0.1** - Build tool and dev server
- **Context API** - State management
- **React Hooks** - useState, useEffect, useContext
- **TailwindCSS** - Utility-first CSS framework
- **localStorage** - Browser storage for data persistence

## 📂 Project Structure

```
src/
├── contexts/
│   ├── TodoContext.js    # Context creation and custom hook
│   └── index.js          # Barrel export for cleaner imports
├── components/
│   ├── TodoForm.jsx      # Component for adding new todos
│   └── TodoItem.jsx      # Component for displaying/editing todos
├── App.jsx               # Main component with state logic
└── main.jsx              # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/todo-context-app.git
   cd todo-context-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

## 💡 Key Concepts Demonstrated

### 1. Context API Implementation

```javascript
// Creating Context
export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}
})

// Custom Hook
export const useTodo = () => {
  return useContext(TodoContext)
}
```

### 2. State Management

- **useState** for local component state
- **useContext** for global state access
- **Functional updates** for state that depends on previous state

### 3. Side Effects with useEffect

```javascript
// Load from localStorage on mount
useEffect(() => {
  try {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  } catch (error) {
    console.log("Error loading todos:", error)
  }
}, [])

// Save to localStorage on todos change
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])
```

### 4. Immutable State Updates

```javascript
// Adding a todo
const addTodo = (todo) => {
  setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
}

// Updating a todo
const updateTodo = (id, updatedTodo) => {
  setTodos((prev) =>
    prev.map((prevTodo) =>
      prevTodo.id === id ? { ...prevTodo, ...updatedTodo } : prevTodo
    )
  )
}
```

## 🎯 Learning Outcomes

This project demonstrates proficiency in:

- ✅ React functional components and hooks
- ✅ Context API for state management
- ✅ Component composition and reusability
- ✅ Browser APIs (localStorage)
- ✅ Event handling and form management
- ✅ Controlled components pattern
- ✅ Immutability and state updates
- ✅ Error handling and defensive programming
- ✅ Modern JavaScript (ES6+)
- ✅ Responsive UI design with TailwindCSS

## 🐛 Known Limitations

- Uses `Date.now()` for IDs (potential collision in rare cases)
- localStorage has ~5-10MB limit
- No backend integration (data stored locally)
- No user authentication

## 🔮 Future Enhancements

- [ ] Add categories/tags for todos
- [ ] Implement search and filter functionality
- [ ] Add due dates and reminders
- [ ] Drag-and-drop reordering
- [ ] Dark mode toggle
- [ ] Backend integration with REST API
- [ ] User authentication
- [ ] TypeScript migration
- [ ] Unit and integration tests
- [ ] Accessibility improvements (ARIA labels)

## 📸 Screenshots

### Main Interface
![Todo App Interface](./screenshots/main-interface.png)

### Adding a Todo
![Adding Todo](./screenshots/add-todo.png)

### Editing a Todo
![Editing Todo](./screenshots/edit-todo.png)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Built as part of learning React and Context API
- Inspired by modern todo applications
- TailwindCSS for beautiful styling

---

⭐ **If you found this project helpful, please give it a star!** ⭐
