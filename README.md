# React Tasks - Day 9

This folder contains four separate React projects demonstrating different React concepts using modern functional components and hooks.

## Projects Overview

### 1. **Task 1 - Users API** (`task1-users-api`)
- **Concept**: `useEffect` + Axios
- **Features**:
  - Fetches user data from JSONPlaceholder API
  - Displays users in a responsive grid
  - Includes loading and error states
- **Port**: 5173
- **Setup**:
  ```bash
  cd task1-users-api
  npm install
  npm run dev
  ```

### 2. **Task 2 - Product Search** (`task2-product-search`)
- **Concept**: `useState` + `useEffect` + Real-time filtering
- **Features**:
  - Fetches products from FakeStore API
  - Dynamic search/filter functionality
  - Responsive product grid with images
- **Port**: 5174
- **Setup**:
  ```bash
  cd task2-product-search
  npm install
  npm run dev
  ```

### 3. **Task 3 - Joke Generator** (`task3-joke-generator`)
- **Concept**: `useState` + `useEffect` + Event handling
- **Features**:
  - Fetches random jokes from Official Joke API
  - Manual joke fetching with button
  - Loading and disabled states
- **Port**: 5175
- **Setup**:
  ```bash
  cd task3-joke-generator
  npm install
  npm run dev
  ```

### 4. **Task 4 - Theme Switcher** (`task4-theme-switcher`)
- **Concept**: `useContext` + Context API
- **Features**:
  - Theme toggling between Light and Dark modes
  - Custom hook (`useTheme`) for context consumption
  - Global theme provider pattern
  - Smooth theme transitions
- **Port**: 5176
- **Setup**:
  ```bash
  cd task4-theme-switcher
  npm install
  npm run dev
  ```

## General Setup Instructions

Each project uses **Vite** as the build tool and **React 18** with modern hooks.

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Running All Projects Locally

1. **Open each project in a separate terminal:**

```bash
# Terminal 1 - Users API
cd task1-users-api
npm install
npm run dev

# Terminal 2 - Product Search
cd task2-product-search
npm install
npm run dev

# Terminal 3 - Joke Generator
cd task3-joke-generator
npm install
npm run dev

# Terminal 4 - Theme Switcher
cd task4-theme-switcher
npm install
npm run dev
```

2. **Access the applications:**
- Task 1: http://localhost:5173
- Task 2: http://localhost:5174
- Task 3: http://localhost:5175
- Task 4: http://localhost:5176

## Styling

All projects use the same professional CSS styling included in `src/App.css`:
- Responsive grid layouts
- Light and dark theme support
- Clean, modern design with Flexbox and CSS Grid
- Professional color scheme and typography
- Loading and error state indicators

## Key React Concepts Demonstrated

| Task | Key Concept | Hooks Used |
|------|------------|-----------|
| 1 | API Data Fetching | useState, useEffect |
| 2 | Search/Filter Logic | useState, useEffect |
| 3 | Event Handling | useState, useEffect |
| 4 | Context API | createContext, useContext, useState |

## Project Structure

```
task-name/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.jsx
│   ├── Component.jsx (component-specific file)
│   └── ThemeContext.jsx (Task 4 only)
├── package.json
├── vite.config.js
└── README.md
```

## Building for Production

For any project:
```bash
npm run build
npm run preview
```

This will create an optimized production build in the `dist` folder.

## Notes

- **Task 1** requires `axios` to be installed (included in package.json)
- All other tasks use the native `fetch` API
- External APIs used are free and public (no authentication required)
- Each project is independent and can be deployed separately

---

Happy coding! 🚀
