# SARAS Production-Grade Frontend Boilerplate

A modern, scalable Next.js boilerplate tailored for production-ready applications.

## 🚀 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** ShadCN UI
- **State Management:** Zustand
- **Server State:** TanStack Query
- **Authentication:** BetterAuth (with explicit SQLite driver)
- **RBAC Roles:** Student, Parent, Counselor, School Admin, Super Admin
- **Tooling:** ESLint, Prettier, Husky (lint-staged, pre-commit/pre-push)

## 📁 Architecture Overview

The project uses a **feature-based architecture** to ensure scalability and maintainability.

```text
src/
├── app/                  # Next.js App Router pages and layouts
├── components/           # Global UI components (ShadCN, etc.)
├── config/               # Application config, environment variables
├── features/             # Feature modules (auth, onboarding, etc.)
│   └── [feature-name]/
│       ├── api/          # Feature-specific api calls
│       ├── components/   # Feature-specific components
│       ├── hooks/        # Feature-specific hooks
│       ├── types.ts      # Feature-specific types
│       └── index.ts      # Public API of the feature
├── hooks/                # Global custom hooks
├── lib/                  # Utility functions (auth config, utils)
├── providers/            # Global providers (Query, Theme, Auth)
├── services/             # Global services (Axios API client)
├── stores/               # Global Zustand stores
└── types/                # Global types
```

## 🛠️ Getting Started

1. **Clone and Install dependencies**

   ```bash
   npm install
   ```

2. **Environment Variables**
   Copy the example env file and fill in your values (at minimum `BETTER_AUTH_SECRET` and `DATABASE_URL`):

   ```bash
   cp .env.example .env
   ```

3. **Database Setup**
   Generate and apply the BetterAuth database schema:

   ```bash
   npx @better-auth/cli migrate --config ./src/lib/auth.ts
   ```

4. **Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🤖 Available Scripts

- `npm run dev` - Starts the development server.
- `npm run build` - Builds the app for production.
- `npm run start` - Runs the built app in production mode.
- `npm run lint` - Runs ESLint.
- `npm run format` - Formats the code using Prettier.
- `npm run typecheck` - Runs TypeScript compiler check.
- `npm run prepare` - Initializes Husky hooks.

## 🏗️ Adding Components (ShadCN)

To add more ShadCN UI components:

```bash
npx shadcn@latest add [component-name]
```
