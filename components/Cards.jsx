import React from 'react'
import Image from 'next/image'
import Single from '../public/single.png'
import Double from '../public/double.png'
import Triple from '../public/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <Image className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt='/' />
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <button className='px-6 bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Start Trial</button>

        </div>
        <div className='w-full bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
          <Image className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt='/' />
          <h2 className='text-2xl font-bold text-center py-8'>Multi User</h2>
          <p className='text-center text-4xl font-bold'>$249</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
            <p className='py-2 border-b mx-8'>7 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 20 GB</p>
          </div>
          <button className='px-6 bg-black text-yellow-100 w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Start Trial</button>

        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <Image className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt='/' />
          <h2 className='text-2xl font-bold text-center py-8'>Infinity</h2>
          <p className='text-center text-4xl font-bold'>$549</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Unlimited Storage</p>
            <p className='py-2 border-b mx-8'>Unlimited Granted User</p>
            <p className='py-2 border-b mx-8'>Unlimited</p>
          </div>
          <button className='px-6 bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Start Trial</button>

        </div>

      </div>
    </div>
  )
}

export default Cards
