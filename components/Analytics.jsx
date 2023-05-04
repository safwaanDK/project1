import React from 'react'
import Image from 'next/image'
import Laptop from '../public/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <Image className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
            <p className='text-green-800 font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p>lorem ipsum gv  fbdhTB   FBZDbnD HrFBggzb  rtjn zlh t hgzhn  zd bhzdgb zdh bdz h Zd zt hg z h zz x z hdxg zx</p>
            <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-0 '>Get Started</button>
        </div>

      </div>
    </div>
  )
}

export default Analytics
