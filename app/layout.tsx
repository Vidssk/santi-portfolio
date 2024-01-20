import '@styles/globals.css';
import Navbar from '@utils/Navbar'
import Footer from '@components/Footer'
export const metadata = {
  title: "Santiagos Portfolio",
  description: 'Relentless Software Developer'
}

const Rootlayout = ({children,}:{children: React.ReactNode}) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
      <Navbar />
        <main className='app'>
        {/* <video src = 'public/videos/video.mp4' autoPlay loop muted /> */}
          {children}
        </main>
      <Footer />
        </div>
      </body>
    </html>
  )
}

export default Rootlayout;



// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import './globals.css'
// // import Navbar from './api/Navbar'
// // import Footer from './api/Footer'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <>
//     {/* <Navbar/> */}
//     <main>{children}</main>
//     {/* <Footer/> */}
//     </>
//     // <html lang="en">
//     //   <body className={inter.className}>{children}</body>
//     // </html>
//   )
// }
