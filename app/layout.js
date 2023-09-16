import { metadata } from './globals.css'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
export default function Layout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <title>Medicine</title>
          <meta name="description"  />
        </head>
        <body className="">
        <div className='text-center sm:text-sm'>
 Join the waitlist 🚨 Personalized Protein & Fiber Powder Supplements coming soon →
 </div>
          <Navbar />
            {children}
          <Footer/>
          <div className='text-center sm:text-sm'>
 Design and Developed by ZyTech Software
 </div>
        </body>
      </html>
    </>
  )
}
