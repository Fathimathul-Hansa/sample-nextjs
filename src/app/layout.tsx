import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/navbar/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My-batch-ecomm',
  description: 'Designed by batch',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <head>
        
  </head>
        
        <h1>Header</h1>
        <Navbar/>
        {children}
        <h1>Footer</h1>
        <Footer/>
        
        </body>
    </html>
  )
}
