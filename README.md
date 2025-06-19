# React Test Assignment – Hero + Horizontal Scroll

## 📝 Description

This is a React-based test assignment built with **Vite**. The application implements a fixed **hero section** and a custom **horizontal scroll experience** for desktop users. On mobile and smaller screens, it gracefully falls back to standard vertical scroll.

---

## 📐 Features

### 🎯 Hero Section
- **Fixed background** hero implemented in `Hero.jsx`.
- Occupies full screen height and does not scroll.

### 💻 Desktop Layout (Wide Screens)
- When the viewport is large enough (suitable for desktop):
  - The **first two sections** (handled in `HorizontalSections.jsx`) scroll **horizontally** on vertical scroll input.
  - Custom logic ensures smooth, section-by-section horizontal scrolling.

### 📱 Mobile/Tablet Layout
- When viewport width or height is below the desktop threshold:
  - The first two sections behave **vertically**.
  - Layout stacks naturally for smaller screens.

---

## 📁 Project Structure
src/
├── Components/
│ ├── Hero.jsx # Fixed hero section
│ ├── HorizontalSections.jsx # First two horizontal-scroll sections
│ └── Navigation.jsx # Top navigation component
├── Pages/
│ └── Home.jsx # Main landing page combining all sections
├── App.jsx # Root app with routing setup
├── main.jsx # React DOM mount point
public/
└── assets/ # Static assets like images


## 🚀 Tech Stack

- React 19
- Vite
- React Router DOM v7
- CSS (media queries + scroll behavior)
- JavaScript scroll event handling
- GSAP

---

## 🔧 Setup Instructions

1. **Install dependencies**
   ```bash
   npm install
   npm run dev
npm run preview

2. **Deployment Notes**
export default defineConfig({
  base: '/pilot-building/',
  plugins: [react()],
});

<BrowserRouter basename="/pilot-building">

