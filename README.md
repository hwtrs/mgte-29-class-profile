# 🎓 MGTE 29 Class Profile

This project is built using **Next.js App Router** with **SCSS** for styling. It is designed to have a landing page and multiple individual pages (e.g. Co-op, Demographics, About) that all share a consistent layout and styling structure.

### 🧠 TL;DR – Project Structure Summary

- Each folder in `/src/app` represents a **route/endpoint** (e.g. `/about`, `/demographics`).
- Inside each route folder:
  - `page.tsx` → the React component for that page.
  - `name.scss` → styling scoped to that specific page.
- The **landing page** lives at `/src/app/page.tsx`, with styles in `landing.scss`.
- All internal pages share a common layout:
  - `layouts/ProfileLayout.tsx` → wrapper component.
  - `profilelayout.scss` → shared styles for internal pages.
- **Reusable components** go in `/src/components/ComponentName/`:
  - Structure: `ComponentName.tsx` + `ComponentName.scss`.
- Any **helper functions or utilities** go in `/src/utils/`.

---

## 📁 Folder Structure

```
/public/                 → Static assets like images, fonts, etc.
/src/
  ├── app/              → Next.js App Router entry point
  │   ├── page.tsx                → Landing page content
  │   ├── landing.scss     → Landing page styling
  │
  │   ├── about/
  │   │   ├── page.tsx            → About page content
  │   │   └── about.scss   → About page styling
  │
  │   ├── demographics/
  │   │   ├── page.tsx
  │   │   └── demographics.scss
  │
  │   └── ... (other pages)
  │
  │   └── layout.tsx             → Root layout (html/body wrapper)
  │   └── globals.scss           → Global styles (reset, fonts, etc.)
  │
  ├── components/       → Reusable UI components
  │   ├── Header/
  │   │   ├── Header.tsx
  │   │   └── Header.scss
  │   └── ...
  │
  ├── layouts/          → Shared layout for internal pages
  │   ├── ProfileLayout.tsx          → Wrapper used for pages like Co-op, Demographics, etc.
  │   └── profilelayout.scss  → Styling shared across all individual content pages
  │
  ├── utils/            → Utility functions/helpers
  └── styles/           → Shared SCSS like variables, mixins, etc.
```

---

## 🌐 Routing Explained (App Router)

Each folder inside the `/src/app` directory maps directly to a URL endpoint. For example:

- `src/app/about/page.tsx` → `yourdomain.com/about`
- `src/app/demographics/page.tsx` → `yourdomain.com/demographics`

Inside each folder:

- `page.tsx` contains the **React code** for that page.
- `name.scss` (e.g. `about.scss`) contains **styling specific to that page** only.

The **landing page** is defined by the root-level `page.tsx` inside `/src/app`, and its styles go in `landing.scss`.

---

## 🧱 Shared Layout

All individual pages (like `/about`, `/coop`, etc.) use a shared layout component:

- `layouts/ProfileLayout.tsx` → Defines the consistent layout (header, content wrapper, footer, etc.)
- `layouts/profilelayout.scss` → Contains styles that apply across all these pages (e.g. page container, typography defaults, etc.)

---

## 🧩 Components

Any reusable UI piece (e.g. `Header`, `Card`, `Chart`) should go in the `/src/components` directory.

Each component lives in its own subfolder:
```
/components/
  └── ComponentName/
      ├── ComponentName.tsx
      └── ComponentName.scss
```

This ensures the **code and styles are scoped and organized** cleanly.

---

## 🛠 Utilities

Any helper functions, constants, or logic that supports the app (like data formatting or string manipulation) should go inside `/src/utils`.

---

## 🧼 SCSS Styling Best Practices

- Global styles (fonts, reset, etc.) go in `globals.scss`.
- Shared variables or mixins can go in `/src/styles/variables.scss`, `/mixins.scss`, etc.
- Use **SCSS Modules** (`.scss`) for component- or page-scoped styles.

---

## 💡 Example: Creating a New Page

To add a new page (e.g. `Awards`):

1. Create a new folder:
   ```
   /src/app/awards/
   ```

2. Add:
   - `page.tsx` with your React component
   - `awards.scss` with page-specific styling

3. Wrap the content with `ProfileLayout` if needed:
   ```tsx
   import ProfileLayout from '@/layouts/ProfileLayout';
   import styles from './awards.scss';

   export default function AwardsPage() {
     return (
       <ProfileLayout>
         <div className={styles.awardsPage}>
           <h1>Awards</h1>
         </div>
       </ProfileLayout>
     );
   }
   ```