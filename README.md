# 🎓 Campus Directory - Student Project

A clean, beginner-friendly web application built with **Next.js (App Router)**, **React 19**, and **TypeScript**.

This project is structured so that any beginner can easily understand how Next.js works, how components and pages are organized, and how data flows through a modern React application.

---

## 📁 Simple Folder Structure Explained

```text
Student-project1/
├── src/
│   ├── app/                      # 🌐 All Pages & Routes (Next.js App Router)
│   │   ├── layout.tsx            # Global layout (Navbar + Page Content + Footer)
│   │   ├── page.tsx              # Homepage: Students Directory with Search & Filters
│   │   ├── page.module.css       # Styles for Homepage
│   │   ├── globals.css           # Global colors, typography, and basic styles
│   │   ├── not-found.tsx         # 404 Error Page (shown when a page doesn't exist)
│   │   │
│   │   ├── students/             # 👤 Student Profile Routes
│   │   │   ├── page.tsx          # Redirects /students to homepage /
│   │   │   └── [id]/             # Dynamic route for each student (e.g. /students/STU-1042)
│   │   │       ├── page.tsx      # Student details page
│   │   │       └── StudentProfile.module.css
│   │   │
│   │   ├── departments/          # 🏢 Academic Department Routes
│   │   │   ├── page.tsx          # Departments list page
│   │   │   ├── Departments.module.css
│   │   │   └── [dept]/           # Dynamic department page (e.g. /departments/computer-science)
│   │   │       ├── page.tsx      # Department details & enrolled students
│   │   │       ├── DepartmentDetail.module.css
│   │   │       └── [specialization]/ # Curriculum track page
│   │   │           ├── page.tsx
│   │   │           └── SpecializationPage.module.css
│   │   │
│   │   └── about/                # ℹ️ About Page
│   │       ├── page.tsx          # About the project & tech stack
│   │       └── About.module.css
│   │
│   ├── components/               # 🧩 Reusable UI Components
│   │   ├── Navbar.tsx            # Top navigation bar
│   │   ├── Footer.tsx            # Bottom footer
│   │   ├── StudentCard.tsx       # Student card shown in grids
│   │   └── Breadcrumbs.tsx       # "Home / Departments / Computer Science" navigation path
│   │
│   └── data/                     # 💾 Mock Database & Data
│       └── directoryData.ts      # Sample students & departments data + lookup functions
│
├── package.json                  # Project dependencies & scripts
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # You are here!
```

---

## 💡 How Key Next.js Concepts Work in this Project

### 1. App Router & File-based Routing
In Next.js, folders inside `src/app/` automatically become website URLs:
- `src/app/page.tsx` &rarr; `http://localhost:3000/` (Homepage)
- `src/app/about/page.tsx` &rarr; `http://localhost:3000/about`
- `src/app/departments/page.tsx` &rarr; `http://localhost:3000/departments`

### 2. Dynamic Routes (`[id]`)
Folders in brackets like `[id]` or `[dept]` act like URL variables:
- `src/app/students/[id]/page.tsx` handles `/students/STU-1042`, `/students/aarav-mehta`, etc.
- In Next.js, we read this ID using `const { id } = await params;` and fetch that student's data.

### 3. Client Components vs Server Components
- **Client Components** have `"use client";` at the very top (like `src/app/page.tsx` and `Navbar.tsx`). They can use React hooks like `useState()` for interactive things (typing in search bar, dropdown filters).
- **Server Components** don't need `"use client";` (like `src/app/students/[id]/page.tsx`). They render on the server, which is fast and secure!

### 4. Mock Data & Helper Functions (`src/data/directoryData.ts`)
Instead of needing a complex backend database, all sample data is cleanly stored in `src/data/directoryData.ts`.
You can find or edit any student or department right there!
Helpful functions include:
- `getAllStudents()`: Gets all students
- `getStudentByIdOrSlug(id)`: Finds a student by ID or slug
- `getDepartmentBySlug(slug)`: Finds a department

---

## 🚀 How to Run the Project Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```

3. **Open in your browser:**
   Go to [http://localhost:3000](http://localhost:3000)

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## ✏️ How to Add a New Student

To add a new student, open [`src/data/directoryData.ts`](src/data/directoryData.ts) and add a new object to the `STUDENTS_DATA` array:

```typescript
{
  id: "STU-2000",
  slug: "alex-smith",
  name: "Alex Smith",
  initials: "AS",
  avatarBg: "#dbeafe",
  avatarColor: "#1d4ed8",
  department: "Computer Science",
  departmentSlug: "computer-science",
  studyYear: "1st Year",
  studyYearFull: "1st Year (Freshman)",
  standing: "1st Year Undergraduate",
  enrolled: "Fall 2024",
  email: "alex.smith@campus.edu",
  systemRecordId: "2000-CS-AS",
  specialization: "Web Development",
  specializationSlug: "web-development",
  status: "Active Student",
  lastValidated: "Oct 24, 2024",
  about: "Alex is an incoming freshman excited about building web applications.",
  subjects: [
    { code: "CS-101", name: "Intro to Programming", credits: "4.0 Credits" },
    { code: "CS-102", name: "Web Fundamentals", credits: "3.5 Credits" }
  ]
}
```

The student will automatically appear on the homepage and will have their own profile page at `/students/alex-smith`!
