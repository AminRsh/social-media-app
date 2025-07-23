# 🌟 Modern Social Media Platform

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
</div>

<div align="center">
  <h3>🚀 A cutting-edge social media platform built with the latest web technologies</h3>
  <p><em>Full-stack application featuring real-time interactions, advanced authentication, and modern UI/UX</em></p>
</div>

<div align="center">
  <a href="#-live-demo">Live Demo</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-contributing">Contributing</a>
</div>

---

## ✨ Features

### 🔐 **Authentication & Security**
- **Lucia Authentication** - Modern, secure authentication system
- **Username/Password Login** - Traditional authentication method
- **Google OAuth2** - One-click social login
- **Session Management** - Secure session handling with automatic refresh

### 📱 **Core Social Features**
- **Infinite Scrolling Feeds** - Smooth, performant content loading
- **Advanced Like System** - Real-time likes with optimistic updates
- **Follow/Unfollow System** - Build your social network
- **Comment System** - Nested comments with real-time updates
- **Notification System** - Stay updated with all interactions
- **Bookmark System** - Save posts for later reading
- **Direct Messaging** - Real-time chat powered by Stream

### 🎨 **User Experience**
- **Mobile-Responsive Design** - Perfect experience on all devices
- **Dark/Light/System Themes** - Adaptive theming with user preferences
- **Drag & Drop File Uploads** - Intuitive media sharing with UploadThing
- **Copy-Paste Image Support** - Quick image sharing from clipboard
- **TipTap Rich Text Editor** - Beautiful content creation experience
- **Real-time Form Validation** - Instant feedback with React Hook Form & Zod

### 🔍 **Advanced Features**
- **Full-Text Search** - Powerful search across all content
- **Hashtags & Mentions** - Social tagging and user mentions
- **Optimistic Updates** - Instant UI feedback for better UX
- **Advanced Caching** - Lightning-fast performance with smart revalidation
- **Server Components** - Optimal performance with Next.js 15
- **Server Actions** - Modern server-side logic handling

---

## 🛠️ Tech Stack

<div align="center">

### **Frontend**
| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React Framework | 15.x |
| **TypeScript** | Type Safety | Latest |
| **Tailwind CSS** | Styling | Latest |
| **Shadcn UI** | Component Library | Latest |
| **TanStack React Query** | Data Fetching | Latest |
| **React Hook Form** | Form Management | Latest |
| **Zod** | Schema Validation | Latest |
| **TipTap** | Rich Text Editor | Latest |

### **Backend & Database**
| Technology | Purpose | Version |
|------------|---------|---------|
| **Lucia Auth** | Authentication | Latest |
| **Prisma ORM** | Database ORM | Latest |
| **PostgreSQL** | Database | Latest |
| **UploadThing** | File Uploads | Latest |
| **Stream** | Real-time Chat | Latest |

### **Deployment & Tools**
| Technology | Purpose |
|------------|---------|
| **Vercel** | Hosting Platform |
| **Cron Jobs** | Scheduled Tasks |
| **Prettier** | Code Formatting |
| **ESLint** | Code Linting |

</div>

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **PostgreSQL** database
- **npm** or **yarn** or **pnpm**

### Environment Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/AminRsh/social-media-app.git
   cd social-media-app
   ```

2. **Install dependencies**
   ```bash
   npm i --legacy-peer-deps
   ```
   > **Note:** Using `--legacy-peer-deps` ensures compatibility with all dependencies

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your `.env.local` file:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/social_media_db"
   
   # Authentication
   LUCIA_SECRET="your-lucia-secret-key"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   
   # File Uploads
   UPLOADTHING_SECRET="your-uploadthing-secret"
   UPLOADTHING_APP_ID="your-uploadthing-app-id"
   
   # Stream Chat
   STREAM_SECRET="your-stream-secret"
   
   # Next.js
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-nextauth-secret"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000` 🎉

---

## 📁 Project Architecture

```
social-media-app/
├── 📁 app/                     # Next.js 15 App Router
│   ├── (auth)/                 # Authentication routes
│   ├── (main)/                 # Main application routes
│   ├── api/                    # API routes & server actions
│   ├── globals.css             # Global styles
│   └── layout.tsx              # Root layout
├── 📁 components/              # Reusable UI components
│   ├── ui/                     # Shadcn UI components
│   ├── posts/                  # Post-related components
│   ├── forms/                  # Form components
│   └── layout/                 # Layout components
├── 📁 lib/                     # Utility libraries
│   ├── auth.ts                 # Lucia authentication config
│   ├── db.ts                   # Prisma client
│   ├── validation.ts           # Zod schemas
│   └── utils.ts                # Helper functions
├── 📁 hooks/                   # Custom React hooks
├── 📁 types/                   # TypeScript type definitions
├── 📁 prisma/                  # Database schema & migrations
│   ├── schema.prisma           # Database schema
│   └── migrations/             # Database migrations
├── 📁 public/                  # Static assets
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies & scripts
```

---

## 🔥 Key Features Showcase

### **Real-time Updates with React Query**
```typescript
const { data: posts, fetchNextPage, hasNextPage } = useInfiniteQuery({
  queryKey: ['posts', 'feed'],
  queryFn: ({ pageParam }) => fetchPosts(pageParam),
  getNextPageParam: (lastPage) => lastPage.nextCursor,
  staleTime: 1000 * 60 * 5, // 5 minutes
});
```

### **Optimistic Updates**
```typescript
const likeMutation = useMutation({
  mutationFn: likePost,
  onMutate: async (postId) => {
    // Optimistically update the UI
    queryClient.setQueryData(['posts'], (old) => 
      updatePostLikes(old, postId, true)
    );
  },
});
```

### **Server Actions with Next.js 15**
```typescript
"use server";

export async function createPost(formData: FormData) {
  const session = await validateSession();
  if (!session) redirect('/login');
  
  const content = formData.get('content') as string;
  
  const post = await prisma.post.create({
    data: {
      content,
      authorId: session.userId,
    },
    include: {
      author: true,
      _count: { select: { likes: true, comments: true } }
    }
  });
  
  revalidatePath('/');
  return post;
}
```

---

## 🎨 Screenshots & Demo

<div align="center">
  <img src="https://via.placeholder.com/800x500/0070f3/ffffff?text=Login+%26+Register" alt="Authentication" width="45%" />
  <img src="https://via.placeholder.com/800x500/22c55e/ffffff?text=Home+Feed" alt="Home Feed" width="45%" />
</div>

<div align="center">
  <img src="https://via.placeholder.com/800x500/8b5cf6/ffffff?text=User+Profile" alt="User Profile" width="45%" />
  <img src="https://via.placeholder.com/800x500/f59e0b/ffffff?text=Direct+Messages" alt="Direct Messages" width="45%" />
</div>

<div align="center">
  <img src="https://via.placeholder.com/800x500/ef4444/ffffff?text=Post+Creation" alt="Post Creation" width="45%" />
  <img src="https://via.placeholder.com/800x500/06b6d4/ffffff?text=Search+%26+Discovery" alt="Search" width="45%" />
</div>

---

## 🚀 Deployment

### **Deploy to Vercel**

1. **Connect your repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Set up database** (Vercel Postgres or external PostgreSQL)
4. **Configure cron jobs** for scheduled tasks:
   ```json
   {
     "crons": [
       {
         "path": "/api/cron/cleanup",
         "schedule": "0 2 * * *"
       }
     ]
   }
   ```

### **Database Setup**
```bash
# Production database setup
npx prisma generate
npx prisma db push
npx prisma db seed
```

---

## 🧪 Testing & Development

### **Available Scripts**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
npm run db:studio    # Open Prisma Studio
npm run db:seed      # Seed database with sample data
```

### **IDE Setup**
The project includes configuration for:
- **Prettier** - Automatic code formatting
- **ESLint** - Code linting and error detection
- **TypeScript** - Type checking and IntelliSense
- **Tailwind CSS IntelliSense** - Class name autocomplete

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### **Development Workflow**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes following the coding standards
4. Run tests: `npm run test`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### **Coding Standards**
- Follow TypeScript best practices
- Use Prettier for code formatting
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## 📋 Roadmap

### **Current Version (v1.0)**
- [x] Core social media features
- [x] Real-time messaging
- [x] Advanced authentication
- [x] File upload system
- [x] Mobile-responsive design

### **Upcoming Features (v1.1)**
- [ ] Video post support
- [ ] Stories feature
- [ ] Advanced analytics dashboard
- [ ] Push notifications
- [ ] Progressive Web App (PWA)

### **Future Enhancements (v2.0)**
- [ ] AI-powered content recommendations
- [ ] Multi-language support
- [ ] Advanced moderation tools
- [ ] API for third-party integrations
- [ ] Advanced search filters

---

## 📖 Documentation

- [**API Documentation**](docs/api.md) - Complete API reference
- [**Database Schema**](docs/database.md) - Database structure and relationships
- [**Authentication Guide**](docs/auth.md) - Authentication system overview
- [**Deployment Guide**](docs/deployment.md) - Production deployment instructions

---

## 🛡️ Security

- **Lucia Authentication** - Secure session management
- **Input Validation** - Zod schema validation on all inputs
- **CSRF Protection** - Built-in CSRF protection
- **Rate Limiting** - API rate limiting to prevent abuse
- **SQL Injection Prevention** - Prisma ORM prevents SQL injection

---

## 📞 Support & Contact

<div align="center">

**Questions? Issues? Suggestions?**

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-red?style=for-the-badge&logo=github)](https://github.com/AminRsh/social-media-app/issues)
[![Discussions](https://img.shields.io/badge/GitHub-Discussions-blue?style=for-the-badge&logo=github)](https://github.com/AminRsh/social-media-app/discussions)

</div>

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For the deployment platform
- **Lucia** - For the modern authentication library
- **Stream** - For the real-time messaging infrastructure
- **UploadThing** - For the file upload service
- **Shadcn** - For the beautiful UI components

---

<div align="center">
  <h3>⭐ Star this repository if you found it helpful! ⭐</h3>
  <p>Built with 💖 using the latest web technologies</p>
  
  <sub>
    Created by <a href="https://github.com/AminRsh">@AminRsh</a> • 
    Follow for more projects!
  </sub>
</div>
