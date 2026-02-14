# 🌿 Lilac Therapy Website (Next.js + Tailwind)

Live Website:  
https://grow-my-therapy-assignment.netlify.app/

---

## 📌 Project Overview

This project is a **custom-built therapy website** inspired by the Lilac design style.

It is developed using:

- **Next.js 14 (App Router)**
- **React**
- **Tailwind CSS**

The project focuses on:

- Clean layout structure
- Responsive design
- Reusable global components
- Controlled image layouts
- Proper deployment workflow

The website is deployed on **Netlify** with automatic deployment from GitHub.

---

## 🎯 Project Goals

- Recreate a modern therapy website layout
- Practice Next.js App Router structure
- Implement reusable global layout (Header + Footer)
- Build responsive hero sections with controlled images
- Implement blog routing
- Deploy a production-ready site

---

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **React**
- **Tailwind CSS**
- **next/image**
- **next/link**
- **Netlify (Deployment)**

---

## 📂 Folder Structure
src/app/
├── layout.tsx # Global layout (Header + Footer)
├── page.tsx # Home page
├── blog/
│ ├── page.tsx # Blog listing page
│ └── [slug]/ # Dynamic blog post route
│ └── page.tsx
├── contact/
│ └── page.tsx # Contact page
└── globals.css
---

## 🌍 Global Layout

- Header and Footer are defined in `layout.tsx`
- Shared automatically across all pages
- Navigation handled using `next/link`
- Consistent spacing and background styling

---

## 🏠 Home Page

- Hero section with arch-shaped image
- Text and call-to-action aligned per template inspiration
- Responsive layout (stacked on mobile)

Features:
- Arch-shaped hero image
- Responsive flex layout
- Call-to-action button
- Structured sections
- Mobile-first responsive behavior

---

## 📝 Blog Page 
### Implemented

- `/blog` route
- Blog hero section
- Two-column blog layout
- Fixed-height responsive blog cards
- Dynamic routing (`/blog/[slug]`)
- Responsive grid layout

### Planned Improvements

- Real blog content
- Typography refinement
- SEO improvements
- Metadata optimization



---

## 📱 Responsive Design

- Mobile-first approach
- Tailwind utility-based layout
- Grid + Flexbox structure
- Image containers prevent layout shift
- Consistent spacing system

---
## 🚀 Deployment

The project is deployed on **Netlify**.

Features:

- Connected to GitHub repository
- Automatic deployment on push
- Production build optimization enabled

Live URL:  
https://grow-my-therapy-assignment.netlify.app/
---

## 🚀 How to Run Locally

```bash
npm install
npm run dev
Open:
http://localhost:3000

📄 License
This project is for educational purposes only.

