import './globals.css'
import { Inter } from 'next/font/google'
import Header from './Components/Header'
import Footer from './Components/Footer'
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
<html>
  <body>
   <Header/>
   {children}
   <Footer/>
   </body>
   </html>
  )
}
