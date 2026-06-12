# Task 1 - Users API

## Overview
A React application that fetches and displays a list of users from the JSONPlaceholder API using `useEffect` and Axios.

## Features
- ✅ Fetches user data asynchronously
- ✅ Displays users in a responsive grid
- ✅ Loading state while fetching data
- ✅ Error handling with user-friendly messages
- ✅ Displays user name, email, and phone

## Tech Stack
- React 18 (Functional Components)
- Axios for HTTP requests
- Vite (Build tool)
- CSS Grid for responsive layout

## Setup & Running

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

The app will be available at `http://localhost:5173`

## API Used
- **JSONPlaceholder**: https://jsonplaceholder.typicode.com/users

## Project Structure
```
src/
├── App.jsx          # Main app component
├── UsersList.jsx    # Users display component
├── App.css          # Styling
└── index.jsx        # React DOM entry point
```

## Component: UsersList
This component:
1. Manages three states: `users`, `loading`, `error`
2. Fetches data on mount using `useEffect`
3. Displays a loading message while fetching
4. Shows error message if request fails
5. Renders users in a grid once loaded

## Notes
- Install Axios via: `npm install axios`
- API calls are made only once on component mount (empty dependency array)
- Professional error handling with try-catch-finally
