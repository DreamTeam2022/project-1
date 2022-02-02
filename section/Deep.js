import React from 'react';
import Image from 'next/image';


import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';



gsap.registerPlugin(ScrollTrigger);


export default function Test() {


/*     const number = useRef(null);
    useEffect(() => {
        gsap.to("#backimage", {
          scrollTrigger: {
            trigger: "#read",
            start: "top 100px",
            end: "bottom top",
            scrub: true,
          },
         
          scale: 2.5,
          opacity: 0.9,
         
        });

        gsap.to("#sunset", {
            scrollTrigger: {
              trigger: "#sunset",
            
               start: "top 300px",
               end: "+=200", 
              scrub: true,
              markers:true,
             
            },
            y:460,

          });  

        ScrollTrigger.refresh()
    
        
      }, []); */



    
  return <div className='bg-slate-900 lg:h-screen border-t border-t-gray-700 relative pb-0 mb-0'>
            <div  className='xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-full mx-auto flex flex-wrap  lg:pt-32 md:pt-20 pt-10 '>            
                    <div className='sm:w-3/3 md:w-2/3 lg:w-2/3 xl:w-2/3 flex inline  relative w-full xl:order-first '>                    
                            <div className='m-auto top-1/2'>
                            <Image src='/svg/whitesunset.svg' height={300} width={400}  className='absolute top-1/2w-full z-30' />            
                            </div>
                            <div id='backimage' className='absolute lg:top-20 md:top-1 lg:left-1/2 md:left-1/2 left-1/2'>
                            <Image src='/svg/backimage.svg' height={150} width={150}  className='w-full z-20 ' />
                            </div>
                            <div id='sunset' className='absolute  absolute top-1/2 md:ml-40 lg:ml-64 xl:ml-64 ml-40 '>
                                <Image src='/svg/sunset.svg' height={160} width={140}  className='w-full z-50 ' />                     
                            </div>
                            

                    </div>
                  {/*   <Image src='/glow.png' height={600} width={900}  className=' absolute w-full z-50 ' />   */}
                
                
                
                
                <div className='sm:w-3/3 md:w-1/3 lg:w-1/3 xl:w-1/3 w-full m-auto px-8 md:px-0   lg:order-first md:order-first '>
                    <div className='m-auto '>
                        <div className='text-white xl:text-5xl lg:text-3xl md:text-3xl  text-2xl py-6 font-headfont font-semibold my-auto'>
                        Deep dive into the project analytics
                            </div>
                        <div className='text-white py-2'>
                        Understand which projects are on a rise right now and which are losing its hype.
                            </div>
                            <button type="button" className='my-4 flex px-4 py-2 lg:px-10 md:px-2 lg:py-4 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-xl rounded-lg md:px-4 shadow-2xl drop-shadow-lg shadow-indigo-500/80'>
                                <div className="text-center mx-auto">Project Database</div>      
                            </button> 
                        </div>
                    </div>
                                        
            </div> 


       
            <div className='bottom-0 absolute '>
            <Image src='/svg/sectionbackground.svg' height={300} width={1900}  className='' />
            </div>
               
    </div>;
}
