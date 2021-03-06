// components/layout.js
import React from "react";


import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }:{children:any}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}