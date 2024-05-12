

import { Inter } from "next/font/google";
import "./globals.css";
import Quote from './Component/Quote'
import Header from'./Component/Header'

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({children}){
 
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Quote />
        {children}</body>
    </html>
  );
}


