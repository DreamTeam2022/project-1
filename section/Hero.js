import React from 'react'
import Image from 'next/image'

function Hero() {
    return (
    <>            
        <div className='bg-black xl:w-8/10  pt-16 '>
            <div className='text-blue-900 text-center xl:pt-32 lg:pt-32 sm:pt-36 text-lg z-50'>
            Be at the frontline of the nft revolution
            </div>
            <div className='text-center text-white xl:text-6xl lg:text-5xl md:text-5xl sm:text-4xl font-headfont font-bold '>
            Metaverse & NFT Analytics
            </div>
            <div className='text-center text-gray-300 xl:w-5/12 lg:w-6/12 md:w-10/12 mx-auto xl:py-4 py-3 '>
            Ayzd helps you learn about the NFT and Metaverse drops. Biggest NFT project database, live news feed, top collections, powerful analytics, statistics & more.
            </div>
            <div className='pt-2'>
             <button type="button" className=' z-50 flex  xl:px-12 xl:py-2 lg:px-10 lg:py-2 md:px-6 py-3 xl:text-2xl lg:text-xl text-lg text-white mx-auto bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none  rounded-lg  '>     
                <div className="text-center mx-auto">Oper Dashboard</div>             
            </button>
            </div>

            <div className='w-11/12 mx-auto'>
                    <video playsInline autoPlay loop muted poster="/backgroundimage.png" className='z-10' >
                        <source src="/backgroundvideo.webm" type="video/webm" />
                        <source src="/backgroundvideo.mp4" type="video/mp4" />
                        <source src="/backgroundvideo.mov" type="video/mov" />
                        <source src="/backgroundvideo.wmv" type="video/wmv" />
                        {/* <p>Your browser does not support this video.</p> */}
                    </video>
                </div>                     
           </div> 
     
    </>
    )
}

export default Hero
