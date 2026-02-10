# Lilac Therapy Website (Next.js + Tailwind)

This project is a **custom-built therapy website** inspired by the *Lilac Template* design style.  
It is developed using **Next.js (App Router)** and **Tailwind CSS**, focusing on clean layout structure, responsive design, and reusable components.

The project is built step-by-step with an emphasis on **layout correctness before visual polish**, following real-world frontend development practices.

---

## 🌱 Project Goals

- Recreate a modern therapy website layout similar to Squarespace’s Lilac template
- Practice **Next.js App Router** concepts
- Build reusable global layout (header + footer)
- Implement responsive hero sections with controlled image layouts
- Follow clean Git commit practices

---

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **React**
- **Tailwind CSS**
- **next/image**
- **next/link**

---

## 📂 Folder Structure
src/app/
├── layout.tsx # Global layout (header + footer)
├── page.tsx # Home page
├── blog/
│ └── page.tsx # Blog page
├── contact/
│ └── page.tsx # Contact page
└── globals.css


---

## 🌍 Global Layout

- Header and Footer are defined in `layout.tsx`
- Automatically shared across all pages
- Navigation handled with `next/link`
- Consistent background color and spacing

---

## 🏠 Home Page

- Hero section with arch-shaped image
- Text and call-to-action aligned per template inspiration
- Responsive layout (stacked on mobile)

---

## 📝 Blog Page (In Progress)

### Implemented
- Blog route (`/blog`)
- Blog hero section
- Two-column layout:
  - Left: arch-shaped constrained image
  - Right: blog heading and description
- Responsive behavior:
  - Desktop: image + text side by side
  - Mobile: stacked layout

### Planned
- Blog post list/cards
- Individual blog post pages
- Typography refinement

---

## 📱 Responsive Design

- Mobile-first approach
- Flexbox layout with Tailwind utilities
- Image scaling controlled via wrapper containers
- No full-width image overflow

---

## 🚀 How to Run Locally

```bash
npm install
npm run dev
Open:
http://localhost:3000

📄 License
This project is for educational purposes only.

