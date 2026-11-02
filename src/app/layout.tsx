import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatAssistant from '@/components/ChatAssistant'
import MotionEffects from '@/components/MotionEffects'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import './globals.css'

export const metadata: Metadata = {
  title: 'Your Agency — Web Apps & AI Automation',
  description: 'Digital experiences, web apps, and AI automation for ambitious teams.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark">
      <body className="overflow-x-hidden min-h-screen flex flex-col items-center">
        <BackgroundOrbs />
        <Header />
        <div className="flex-1 w-full flex flex-col items-center justify-center">
          {children}
        </div>
        <Footer />
        <ChatAssistant />
        <MotionEffects />
      </body>
    </html>
  )
}
