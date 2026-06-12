# Task 3 - Joke Generator

## Overview
A React application that fetches and displays random jokes using the Official Joke API with a button to load new jokes.

## Features
- ✅ Fetches random jokes on component mount
- ✅ Manual joke fetching with "Next Joke" button
- ✅ Displays joke setup and punchline
- ✅ Loading state with disabled button during fetch
- ✅ Error handling for API failures
- ✅ Smooth UX with loading indicators

## Tech Stack
- React 18 (Functional Components)
- Fetch API for HTTP requests
- Vite (Build tool)
- CSS for centered layout and styling

## Setup & Running

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

The app will be available at `http://localhost:5175`

## API Used
- **Official Joke API**: https://official-joke-api.appspot.com/random_joke

## Project Structure
```
src/
├── App.jsx               # Main app component
├── JokeGenerator.jsx     # Joke generator component
├── App.css               # Styling
└── index.jsx             # React DOM entry point
```

## Component: JokeGenerator
This component:
1. Manages states: `joke`, `loading`
2. Defines `fetchJoke()` function that can be called multiple times
3. Loads initial joke on mount using `useEffect`
4. Allows user to fetch new jokes by clicking button
5. Disables button while loading to prevent multiple requests

## Key Features
- **Dual State Management**: Separate fetch on mount and on button click
- **Button State**: Button shows loading text and is disabled during fetch
- **Joke Structure**: API returns objects with `setup` and `punchline` properties
- **Centered Layout**: Joke displayed in a centered, card-based layout

## Notes
- API is free and requires no authentication
- Jokes are randomly selected from a large collection
- Button is disabled during loading to prevent race conditions
- Error messages logged to console (can be extended to UI)
