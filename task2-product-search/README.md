# Task 2 - Product Search

## Overview
A React application that fetches products from the FakeStore API and provides real-time search functionality.

## Features
- ✅ Fetches product data from external API
- ✅ Real-time product filtering based on search input
- ✅ Displays product images, titles, and prices
- ✅ Responsive product grid layout
- ✅ Loading state during data fetch
- ✅ "No results" message for empty searches

## Tech Stack
- React 18 (Functional Components)
- Fetch API for HTTP requests
- Vite (Build tool)
- CSS Grid for responsive product layout

## Setup & Running

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

The app will be available at `http://localhost:5174`

## API Used
- **FakeStore API**: https://fakestoreapi.com/products

## Project Structure
```
src/
├── App.jsx               # Main app component
├── ProductSearch.jsx     # Product search component
├── App.css               # Styling
└── index.jsx             # React DOM entry point
```

## Component: ProductSearch
This component:
1. Manages states: `products`, `searchTerm`, `loading`
2. Fetches all products on mount using `useEffect`
3. Filters products dynamically based on search input
4. Updates UI in real-time as user types
5. Displays products with images and pricing

## Key Features
- **Search Functionality**: Case-insensitive search by product title
- **Performance**: Uses `filter()` for client-side filtering (no additional API calls)
- **Product Display**: Shows image, title, and price in a card layout
- **Responsive**: Grid adapts to different screen sizes

## Notes
- No additional dependencies needed (uses native Fetch API)
- Empty search shows all products
- Product images are served by FakeStore API
- Prices are displayed with 2 decimal places
