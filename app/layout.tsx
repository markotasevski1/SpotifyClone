import SupabaseProvider from '@/providers/SuperbaseProvider'
import SideBar from '../components/SideBar'
import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify app',
  description: 'Listen your favorite music',
}
// toot layout for all pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <SideBar>{children}</SideBar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
