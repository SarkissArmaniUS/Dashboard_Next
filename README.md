⚠️ Project Status: Under Construction / Work in Progress

# Admin Dashboard

A modern admin dashboard frontend built inside the `admin/` folder. This workspace contains the full Next.js admin UI, ready for database and API integration.

---

## ✨ Features

### **Admin Frontend**
- 📊 **Dashboard Overview** - Charts and data summaries for admin insights
- 🧑‍💼 **Users Management** - User list with table and controls
- 📦 **Products Management** - Product list with table layout
- 🛒 **Orders Management** - Order list view with filtering
- ➕ **CRUD Components** - Add user, add product, add category, add order forms
- 🎨 **Responsive UI** - Mobile-friendly admin interface
- 🌗 **Theme Support** - Light/dark mode via `next-themes`
- 📈 **Charts** - Recharts-based visualizations
- 🪟 **Modern UI** - shadcn-style component system and Tailwind CSS

---

## 🧩 Sections

- `src/app/layout.tsx` — root layout
- `src/app/page.tsx` — admin home dashboard
- `src/app/users/page.tsx` — users table
- `src/app/products/page.tsx` — products table
- `src/app/payments/page.tsx` — orders/payments table
- `src/components/` — reusable admin UI components
- `public/` — static assets for admin UI

---

## 🛠 Tech Stack

### **Frontend (Admin)**
- **Framework**: Next.js 16.2.6
- **Language**: TypeScript 5
- **UI**: React 19.2.4
- **Styling**: Tailwind CSS 4 + PostCSS
- **Charts**: Recharts
- **Tables**: `@tanstack/react-table`
- **Theme**: next-themes
- **Icons**: Lucide React
- **Date UI**: React Day Picker
- **Linting**: ESLint 9

---

## 📁 Project Structure

```
admin/
├── public/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── users/
│   │   │   └── page.tsx
│   │   ├── products/
│   │   │   └── page.tsx
│   │   └── payments/
│   │       └── page.tsx
│   ├── components/
│   │   ├── AddCategory.tsx
│   │   ├── AddOrder.tsx
│   │   ├── AddProduct.tsx
│   │   ├── AddUser.tsx
│   │   ├── AppAreaChart.tsx
│   │   ├── AppBarChart.tsx
│   │   ├── AppPieChart.tsx
│   │   ├── AppSidebar.tsx
│   │   ├── CardList.tsx
│   │   ├── Navbar.tsx
│   │   ├── TablePagination.tsx
│   │   ├── TodoList.tsx
│   │   └── ui/
│   │       └── design system components
│   └── hooks/
│       └── use-mobile.ts
```

---

## 🚧 Current Status

### ✅ Completed
- Admin dashboard frontend shell
- Table-driven users/products/orders pages
- Add-item modal forms
- Responsive layout and navigation
- Themed UI with charts and sidebar
- Local UI-ready admin experience

### 🔄 In Progress
- Backend API integration
- Database connection
- Real data CRUD flows
- Authentication and admin permissions

---

## 🚀 Getting Started

```bash
cd admin
npm install
npm run dev
```

Open `http://localhost:3000`.

> Note: The admin dashboard currently uses frontend/demo-ready components and placeholder UI. Backend data and API integration will be connected next.
