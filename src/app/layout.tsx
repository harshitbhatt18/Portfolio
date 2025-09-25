import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/lib/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Harshit Bhatt - Software Developer | Full Stack & ML Enthusiast',
  description: 'Passionate software developer specializing in C++ development, algorithms, and problem-solving. Building efficient solutions with clean code.',
  keywords: ['software developer', 'C++', 'algorithms', 'programming', 'full-stack', 'competitive programming'],
  authors: [{ name: 'Harshit Bhatt' }],
  creator: 'Harshit Bhatt',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://harshitbhatt.netlify.app',
    title: 'Harshit Bhatt - Software Developer | Full Stack & ML Enthusiast',
    description: 'Passionate software developer specializing in C++ development, algorithms, and problem-solving.',
    siteName: 'Harshit Bhatt Portfolio',
    images: [
      {
        url: 'https://harshitbhatt.netlify.app/profilepic.jpg',
        width: 1200,
        height: 630,
        alt: 'Harshit Bhatt - Software Developer Portfolio',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harshit Bhatt - Software Developer | Full Stack & ML Enthusiast',
    description: 'Passionate software developer specializing in C++ development, algorithms, and problem-solving.',
    images: ['https://harshitbhatt.netlify.app/profilepic.jpg'],
    creator: '@harshitbhatt18',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta property="og:image" content="https://harshitbhatt.netlify.app/profilepic.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:image" content="https://harshitbhatt.netlify.app/profilepic.jpg" />
        <meta name="image" content="https://harshitbhatt.netlify.app/profilepic.jpg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
