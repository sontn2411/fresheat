import type { Metadata } from 'next'
import './globals.css'
import '../styles/index.scss'

export const metadata: Metadata = {
  title: 'Fresheat food & Restaurant',
  icons: '/favicon.png',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <meta
        name='google-site-verification'
        content='LFBqZiypA32lruY9kf96jLbQtiGXRVv84rQml6b4K-Y'
      />
      <body>{children}</body>
    </html>
  )
}
