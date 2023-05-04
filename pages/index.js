import Image from 'next/image'
import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Analytics from '@/components/Analytics'
import Newsletter from '@/components/Newsletter'
import Cards from '@/components/Cards'
import Footer from '@/components/Footer'




export default function Home() {
  return (
    <>
    <Head>
        <title>DataApp</title>
    </Head>
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  </>
  )
}
