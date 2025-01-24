# Rick and Morty Character Explorer

A React application showcasing modern React patterns and TypeScript best practices through a character exploration interface using the Rick and Morty API.


<img width="500px" src="https://github.com/user-attachments/assets/65eb8250-5504-48c7-9589-5594ea1006a8" />
<img width="500px" src="https://github.com/user-attachments/assets/73d8387c-3d70-46dd-a60f-6d15a97186bb" />



## Features

- Browse all characters from the show
- Search characters by name with debounced input
- Pagination with URL synchronization
- View detailed character information including episodes
- Responsive design with CSS Grid layout
- URL-based navigation and state management

## Technical Highlights

- [URL-based state management](https://developer.mozilla.org/en-US/docs/Web/API/History_API) for shareable search results and pagination
- Custom [debouncing hook](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) for optimized search performance
- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) responsive layout with dynamic column sizing
- [React Query](https://tanstack.com/query/latest) for efficient data fetching and caching
- Custom hooks pattern for reusable business logic
- TypeScript for enhanced type safety and developer experience

## Notable Dependencies

- [TanStack Query v5](https://tanstack.com/query/latest) - Data fetching and caching
- [Rick and Morty API Client](https://github.com/afuh/rick-and-morty-api-node) - Typed API client
- [React Router v7](https://reactrouter.com/en/main) - Client-side routing
- [SWC](https://swc.rs/) - Fast TypeScript/JavaScript compiler

## Project Structure
```
src/
├── api/
│ ├── helpers/ # API utility functions
│ └── hooks/
│ ├── queries/ # Data fetching hooks
│ └── usePagination.ts
├── components/
│ ├── Character/ # Character-related components
│ └── ui/ # Reusable UI components
├── hooks/ # Custom React hooks
├── layouts/ # Layout components
└── pages/ # Route components
```
## Implementation Details

### Data Fetching

- Centralized API calls using React Query for automatic caching and revalidation
- Typed API responses using the rickmortyapi client
- Custom hooks for data transformation and state management

### State Management

- URL-synchronized pagination state for shareable links
- Debounced search input to prevent excessive API calls
- React Query cache for optimized data fetching

### UI Components

- BEM methodology for CSS organization
- Responsive grid layout for character cards
- Reusable UI components with TypeScript props validation

### Performance Optimizations

- Debounced search to minimize API requests
- React Query caching for improved data loading
- SWC compiler for faster build times

### Key Directories

- [`src/api/hooks/queries`](./src/api/hooks/queries) - React Query implementations
- [`src/components/ui`](./src/components/ui) - Reusable UI components with BEM CSS
- [`src/hooks`](./src/hooks) - Custom React hooks including debouncing logic
