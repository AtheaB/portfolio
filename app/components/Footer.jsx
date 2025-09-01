import React from 'react';
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
        <div className='p-4 flex justify-center align-middle gap-8'>
            <span>
              <Image
                src="/assets/images/my-logo.png"
                alt="I Lift"
                className="w-full object-cover"
                width={50}
                height={50}
              />
            </span>
            <p className='text-slate-600 flex justify-center items-center'>© 2025 Athea Bayog. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer