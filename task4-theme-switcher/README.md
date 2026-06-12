# Task 4 - Theme Switcher

## Overview
A React application demonstrating the Context API for global state management. Features a theme switcher that toggles between Light and Dark modes.

## Features
- ✅ Global theme state using React Context API
- ✅ Light and Dark mode themes
- ✅ Custom hook (`useTheme`) for easy context consumption
- ✅ Smooth theme transitions with CSS
- ✅ Theme provider pattern for scalable applications
- ✅ Persistent theme switching throughout the app

## Tech Stack
- React 18 (Functional Components)
- Context API for state management
- Custom Hooks for cleaner code
- Vite (Build tool)
- CSS with theme variables support

## Setup & Running

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

The app will be available at `http://localhost:5176`

## Project Structure
```
src/
├── App.jsx               # Main app component (wraps with ThemeProvider)
├── ThemeContext.jsx      # Context & Provider definition
├── ThemeSwitcher.jsx     # UI Component consuming context
├── App.css               # Styling with theme classes
└── index.jsx             # React DOM entry point
```

## Components Breakdown

### ThemeContext.jsx
```javascript
- createContext() : Creates the theme context
- useTheme() : Custom hook for consuming theme context
- ThemeProvider : Wrapper component that provides theme state
```

**Features:**
- Manages theme state (Light/Dark)
- Provides `toggleTheme()` function
- Wraps children in themed div with dynamic class

### ThemeSwitcher.jsx
```javascript
- Consumes theme context using useTheme() hook
- Displays current theme
- Renders button to switch themes
```

## Key Concepts Demonstrated

| Concept | Implementation |
|---------|-----------------|
| **Context Creation** | `createContext()` at module level |
| **Provider Pattern** | ThemeProvider wraps application |
| **Custom Hook** | `useTheme()` for easy consumption |
| **State Management** | Theme state managed in provider |
| **Dynamic Styling** | Classes applied based on theme state |

## Usage in Your App

To extend this pattern to other components:

```javascript
import { useTheme } from './ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
```

## Styling Strategy

The CSS uses class selectors for theming:
- `.light-theme` - Light mode styles
- `.dark-theme` - Dark mode styles
- Nested selectors for theme-specific component styles

## Notes
- No external state management library needed (Context is built-in)
- Custom hook pattern is React best practice
- Theme state could be extended with localStorage for persistence
- Easily scalable for multiple theme configurations
- Provider should wrap at the highest level of your app

## Extending the Functionality

To persist theme preference:
```javascript
// In ThemeProvider useEffect
useEffect(() => {
  localStorage.setItem('theme', theme);
}, [theme]);

// On initial load
const [theme, setTheme] = useState(() => 
  localStorage.getItem('theme') || 'Light'
);
```
