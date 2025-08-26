# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features dark/light mode toggle, smooth animations, and a clean professional design.

## 🌟 Features

- **Modern Design**: Clean, minimal, and professional layout
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Powered by Framer Motion for elegant transitions
- **SEO Optimized**: Meta tags, OpenGraph, and structured data
- **Performance**: Optimized for Core Web Vitals
- **TypeScript**: Full type safety and better developer experience

## 🚀 Sections

- **Hero Section**: Name, role, tagline with call-to-action buttons
- **About Me**: Personal bio, photo, and contact information
- **Skills**: Technical skills with progress bars and categories
- **Projects**: Featured projects with detailed descriptions and links
- **Experience & Education**: Timeline of work experience and education
- **Contact**: Contact form with social media links
- **Footer**: Quick links and additional information

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)


## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: 320px to 767px

## 🎭 Theme Support

The portfolio supports both light and dark themes:
- **Auto-detection**: Respects user's system preference
- **Manual toggle**: Theme switcher in the navigation
- **Persistent**: Remembers user's choice across sessions

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
- The project can be deployed to any platform that supports Node.js
- Make sure to set the correct build command: `npm run build`
- Set the output directory to `.next`

## 📊 Performance

This portfolio is optimized for performance:
- **Core Web Vitals**: Excellent scores for LCP, FID, and CLS
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **Font Optimization**: Optimized Google Fonts loading

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure
```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # React components
│   ├── data/             # Portfolio data
│   └── lib/              # Utility functions
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## 🙋‍♂️ Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Happy coding!** 🚀
