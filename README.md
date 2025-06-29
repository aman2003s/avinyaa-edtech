# Avinyaa EdTech Platform

A modern, responsive educational technology platform built with React, TypeScript, and Material-UI. This platform provides an intuitive interface for managing courses, with advanced features like drag-and-drop functionality, dark mode support, and responsive design.

## Features

### UI/UX Features
- **Responsive Design**: Fully responsive layout that adapts to desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between dark and light themes with smooth transitions
- **Modern UI**: Clean, modern interface with Material-UI components and Tailwind CSS
- **Smooth Animations**: CSS transitions and animations for enhanced user experience

### Responsive Navigation
- **Adaptive Sidebar**: 
  - Desktop (≥1280px AND ≥600px): Fixed sidebar with icons
  - Small screens (<1280px OR <600px): Hidden sidebar with hamburger menu
  - Mobile (<768px): Overlay sidebar with touch-friendly interface
- **Scrollable Sidebar**: Icons become scrollable when content exceeds viewport height
- **Hamburger Menu**: Appears before "Welcome to NYU Kreativespace, John" text on small screens

### Course Management
- **Course Grid**: Visual grid layout for displaying courses
- **Search & Filter**: Advanced search and filtering capabilities
- **Sorting Options**: Multiple sorting options for course organization
- **Drag & Drop**: Reorder courses using intuitive drag-and-drop functionality
- **Favorite System**: Mark and manage favorite courses
- **Course Cards**: Detailed course cards with status badges and action buttons

### Interactive Features
- **Real-time Search**: Instant search results as you type
- **Filter Management**: Clear individual filters or all filters at once
- **Status Indicators**: Visual status badges for course states
- **Loading States**: Skeleton loaders and loading indicators
- **Error Handling**: Graceful error states with retry functionality

### Dashboard Features
- **Profile Card**: User profile information display
- **Quick Actions**: Fast access to common actions
- **Info Accordion**: Collapsible information sections
- **Footer**: Additional navigation and information

## Setup Instructions

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aman2003s/avinyaa-edtech.git
   cd avinyaa-edtech
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production


## Design Decisions

### Architecture
- **Component-Based**: Modular React components for maintainability
- **Context API**: Used for global state management (CourseContext, PopupContext, ThemeContext)
- **Custom Hooks**: Reusable logic extracted into custom hooks
- **TypeScript**: Full type safety for better development experience

### Responsive Design Strategy
- **Mobile-First**: Base styles for mobile, enhanced for larger screens
- **Breakpoint System**: 
  - Mobile: <768px
  - Small screens: <1280px OR <600px height
  - Desktop: ≥1280px AND ≥600px height
- **Flexible Layouts**: CSS Grid and Flexbox for adaptive layouts

### State Management
- **Local State**: Component-level state for UI interactions
- **Context Providers**: Global state for themes, courses, and popups
- **Custom Hooks**: Encapsulated business logic (useCourseFilters, useDragAndDrop, useTheme)

### Performance Optimizations
- **Lazy Loading**: Components loaded on demand
- **Memoization**: React.memo for expensive components
- **Efficient Re-renders**: Optimized component updates
- **Bundle Splitting**: Code splitting for better loading performance

### Accessibility
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and descriptions
- **Color Contrast**: WCAG compliant color combinations

### Known Issues & Limitations

### Current Limitations
1. **Data Persistence**: Course data is not persisted between sessions (mock data only)
2. **Backend Integration**: No actual backend API integration (frontend-only demo)
3. **User Authentication**: No real authentication system implemented
4. **Image Optimization**: Course images are not optimized for different screen sizes


## Tech Stack

### Frontend
- **React**: Latest React with concurrent features
- **TypeScript**: Type-safe JavaScript development
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Material-UI**: React component library
- **Emotion**: CSS-in-JS styling solution

### Development Tools
- **ESLint**: Code linting and formatting
- **TypeScript**: TypeScript-specific linting rules
- **Vite**: Modern build tool and dev server

### Libraries
- **material-icons**: Material Design icons
- **react-dnd**: Alternative drag-and-drop (legacy)
