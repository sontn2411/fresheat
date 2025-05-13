import type { Metadata } from 'next'
import './globals.css'
import '../styles/index.scss'

export const metadata: Metadata = {
  title: 'Fresheat food & Restaurant',
  description:
    'Nhà hàng phục vụ món ăn tươi ngon mỗi ngày. Đặt bàn nhanh chóng.',
  icons: '/favicon.png',
  keywords: ['nhà hàng', 'ăn ngon', 'Fresheat', 'đặt bàn'],
  openGraph: {
    title: 'Fresheat food & Restaurant',
    description: 'Món ăn ngon - Phục vụ tận tâm',
    url: 'http://3.1.29.186:3000/',
    siteName: 'Fresheat',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Fresheat Banner',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'LFBqZiypA32lruY9kf96jLbQtiGXRVv84rQml6b4K-Y',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
