import React from 'react'

const Fotter = () => {
  return (
    <div className='bg-gray-800 text-white py-4 min-h-[50vh] w-full px-[6vw]'>

        <div className='flex justify-center items-center'>
            <h1 className='text-2xl font-bold'>SwiftMart</h1>
        </div>
        <div className='flex justify-between items-start mt-5 w-full'>
            <div>
             <h1 className='pb-5'><strong className='text-[1.8vw] font-normal'>Company</strong> </h1>   
             <h1>About</h1>
             <h1>Jobs</h1>
             <h1>Blog</h1>
             <h1>Press</h1>
             <h1>Partners</h1>
            </div>
            <div>
             <h1 className='pb-5'><strong className='text-[1.8vw] font-normal'>Solution</strong> </h1>   
             <h1>Marketing</h1>
             <h1>Analytics</h1>
             <h1>Commerce</h1>
             <h1>Insight</h1>
             <h1>Support</h1>    
            </div>
            <div>
             <h1 className='pb-5'><strong className='text-[1.8vw] font-normal'>Documentation</strong> </h1>   
             <h1>Guides</h1>
             <h1>Api Status</h1>
            </div>
            <div>
             <h1 className='pb-5'><strong className='text-[1.8vw] font-normal'>Legal</strong> </h1>   
             <h1>Claim</h1>
             <h1>Privacy</h1>
             <h1>Terms</h1>
            </div>

        </div>
        <div className='flex flex-col justify-center items-center mt-5 w-full'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[1.2vw] font-thin'>© 2025 SwiftMart. All rights reserved.</h1>
            <h1 className='text-[1.2vw] font-thin'>Terms of Service | Privacy Policy</h1>
            <h1 className='text-[1.2vw] font-thin'>SwiftMart is a registered trademark of SwiftMart Inc.</h1>
           
        </div>
        <div className='flex justify-center items-center mt-5'>
          <div className='flex space-x-5 ml-5'>
            <i className="text-[2vw] text-white font-thin ri-facebook-circle-line"></i>
            <i className="text-[2vw] text-white font-thin ri-instagram-line"></i>
            <i className="text-[2vw] text-white font-thin ri-google-play-line"></i>
           </div>
        </div>
        </div>


    </div>
  )
}

export default Fotter