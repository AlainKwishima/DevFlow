<div align="center">

# 🚀 DevFlow

![DevFlow Logo](./public/assets/images/logo.png)

**A Modern Stack Overflow Clone for Developers**

[![Next.js](https://img.shields.io/badge/Next.js-14.0.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.3.0-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.6-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Clerk](https://img.shields.io/badge/Clerk-Authentication-purple?style=for-the-badge)](https://clerk.com/)

</div>

---

## 📖 About DevFlow

DevFlow is a modern, full-stack Q&A platform designed specifically for developers. Built with cutting-edge technologies, it provides a seamless experience for asking questions, sharing knowledge, and collaborating within the developer community.

### 🎯 Key Features

<div align="center">

| 🔍 **Smart Search** | 🏷️ **Tag System** | ⭐ **Voting System** | 🤖 **AI Integration** |
|:---:|:---:|:---:|:---:|
| Global search across all content | Organize questions with tags | Community-driven content ranking | AI-powered answer suggestions |

| 📱 **Responsive Design** | 🔐 **Secure Auth** | 🎨 **Modern UI** | ⚡ **Real-time Updates** |
|:---:|:---:|:---:|:---:|
| Perfect on all devices | Clerk authentication | Beautiful Tailwind UI | Live notifications |

</div>

---

## ✨ Features Overview

### 🔍 **Advanced Search & Filtering**
- **Global Search**: Find questions, answers, and users across the platform
- **Smart Filters**: Filter by tags, date, popularity, and more
- **URL-based State**: Share filtered views with direct links

### 🏷️ **Comprehensive Tagging System**
- **Tag Management**: Create and manage question tags
- **Tag Statistics**: View question counts and popularity metrics
- **Tag Filtering**: Browse questions by specific tags

### ⭐ **Community-Driven Content**
- **Voting System**: Upvote/downvote questions and answers
- **Reputation System**: Earn reputation through quality contributions
- **Best Answer Selection**: Mark the most helpful answers

### 🤖 **AI-Powered Features**
- **AI Answer Generation**: Get instant AI responses to questions
- **Smart Suggestions**: AI-powered question recommendations
- **Content Enhancement**: AI-assisted content improvement

### 👤 **User Management**
- **Profile System**: Detailed user profiles with statistics
- **Activity Tracking**: View user questions, answers, and reputation
- **Saved Questions**: Bookmark questions for later reference

### 🎨 **Modern UI/UX**
- **Dark/Light Mode**: Toggle between themes
- **Responsive Design**: Optimized for all screen sizes
- **Smooth Animations**: Delightful user interactions
- **Accessibility**: WCAG compliant design

---

## 🛠️ Tech Stack

<div align="center">

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-14.0.3-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.2-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.6-38B2AC?style=flat-square&logo=tailwind-css)

### Backend & Database
![MongoDB](https://img.shields.io/badge/MongoDB-6.3.0-green?style=flat-square&logo=mongodb)
![Mongoose](https://img.shields.io/badge/Mongoose-8.0.4-orange?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat-square&logo=node.js)

### Authentication & Services
![Clerk](https://img.shields.io/badge/Clerk-Authentication-purple?style=flat-square)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT-blue?style=flat-square&logo=openai)

### Development Tools
![ESLint](https://img.shields.io/badge/ESLint-8.55.0-purple?style=flat-square&logo=eslint)
![Prettier](https://img.shields.io/badge/Prettier-3.1.0-pink?style=flat-square&logo=prettier)

</div>

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ 
- **npm** or **yarn** or **pnpm**
- **MongoDB** (local or Atlas)
- **Clerk Account** for authentication

### 📋 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/DevFlow.git
   cd DevFlow
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```env
   # MongoDB Configuration
   MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
   
   # Webhook Secret (for Clerk webhooks)
   NEXT_CLERK_WEBHOOK_SECRET=your_webhook_secret
   
   # OpenAI API (optional, for AI features)
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Database Setup**
   
   The application will automatically create the necessary collections when you first run it.

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
DevFlow/
├── 📁 app/                    # Next.js 14 App Router
│   ├── 📁 (auth)/            # Authentication pages
│   ├── 📁 (root)/            # Main application pages
│   └── 📁 api/               # API routes
├── 📁 components/            # Reusable UI components
│   ├── 📁 cards/            # Card components
│   ├── 📁 forms/            # Form components
│   ├── 📁 shared/           # Shared components
│   └── 📁 ui/               # UI primitives
├── 📁 database/             # MongoDB models
├── 📁 lib/                  # Utility functions and actions
│   └── 📁 actions/          # Server actions
├── 📁 public/               # Static assets
│   └── 📁 assets/           # Images and icons
└── 📁 types/                # TypeScript type definitions
```

---

## 🎨 Screenshots

<div align="center">
   
- ![ss1](https://github.com/Mickai55/DevFlow/assets/49816114/4f736d4d-1af0-4837-993c-8bc2fc662545)
- ![ss2](https://github.com/Mickai55/DevFlow/assets/49816114/80f63fea-0173-43fb-a9dd-a273b8afae70)
- ![ss3](https://github.com/Mickai55/DevFlow/assets/49816114/2347d519-4a7b-4709-93c0-8f8e632072fc)

</div>

---

## 🔧 Available Scripts

| Script | Description |
|:---:|:---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🌟 Key Features Deep Dive

### 🔍 **Smart Search System**
- **Global Search**: Search across questions, answers, users, and tags
- **Advanced Filters**: Filter by date, popularity, tags, and more
- **Search Suggestions**: Real-time search suggestions
- **URL State Management**: Shareable search results

### 🏷️ **Tag Management**
- **Tag Creation**: Create and manage custom tags
- **Tag Statistics**: View tag usage and popularity
- **Tag Filtering**: Browse content by specific tags
- **Tag Suggestions**: Auto-suggest relevant tags

### ⭐ **Voting & Reputation**
- **Question Voting**: Upvote/downvote questions
- **Answer Voting**: Vote on the best answers
- **Reputation System**: Earn reputation through contributions
- **Best Answer Selection**: Mark the most helpful answers

### 🤖 **AI Integration**
- **AI Answer Generation**: Get instant AI responses
- **Smart Suggestions**: AI-powered content recommendations
- **Content Enhancement**: AI-assisted writing help

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository to Vercel**
2. **Add environment variables in Vercel dashboard**
3. **Deploy automatically on every push**

### Other Platforms

- **Netlify**: Full-stack deployment support
- **Railway**: Easy MongoDB integration
- **DigitalOcean**: VPS deployment option

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Clerk** for seamless authentication
- **MongoDB** for the robust database
- **Tailwind CSS** for the beautiful styling
- **OpenAI** for AI capabilities

---

## 📞 Support

- **Documentation**: [Wiki](https://github.com/yourusername/DevFlow/wiki)
- **Issues**: [GitHub Issues](https://github.com/yourusername/DevFlow/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/DevFlow/discussions)

---

<div align="center">

**Made with ❤️ by the DevFlow Team**

[![GitHub](https://img.shields.io/badge/GitHub-DevFlow-black?style=for-the-badge&logo=github)](https://github.com/yourusername/DevFlow)
[![Website](https://img.shields.io/badge/Website-DevFlow-blue?style=for-the-badge&logo=vercel)](https://devflow.vercel.app)

</div>
