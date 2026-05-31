irctc-backend/ ← Monorepo root (can hold multiple services)
└── user-service/ ← One microservice (handles users only)
├── src/ ← All source code lives here
│ ├── index.ts ← 🚀 Entry point
│ ├── app.ts ← ⚙️ Express app config
│ │
│ ├── config/ ← 🔧 App configuration
│ ├── routes/ ← 🛣️ API endpoints
│ ├── controllers/ ← 🎯 Request handlers
│ ├── services/ ← 🧠 Business logic
│ ├── repositories/ ← 💾 Database access
│ ├── schemas/ ← ✅ Input validation
│ ├── middlewares/ ← 🔁 Reusable logic
│ ├── types/ ← 📘 TypeScript types
│ └── utils/ ← 🛠️ Helper functions
│
├── prisma/ ← 🗄️ DB schema & migrations
├── .env ← 🔐 Secrets (DB url, JWT secret)
├── .env.example ← 📋 Template for .env (commit this)
├── tsconfig.json ← TypeScript config
└── package.json ← Dependencies & scripts
