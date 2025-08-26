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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://harshitbhatt.dev',
    title: 'Harshit Bhatt - Software Developer | Full Stack & ML Enthusiast',
    description: 'Passionate software developer specializing in C++ development, algorithms, and problem-solving.',
    siteName: 'Harshit Bhatt Portfolio',
    images: [
      {
        url: '/profilepic.jpg',
        width: 1200,
        height: 630,
        alt: 'Harshit Bhatt - Software Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harshit Bhatt - Software Developer | Full Stack & ML Enthusiast',
    description: 'Passionate software developer specializing in C++ development, algorithms, and problem-solving.',
    images: ['/profilepic.jpg'],
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
