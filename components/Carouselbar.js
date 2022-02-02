import Image from 'next/image';
import React from 'react';
/* import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react"; */
export default function Carouselbar({ src, altText, title}) {



 /*  const easout = {
    visible: { opacity: 1,   
      x:0,
      y:0,
      scale: 1,
        transition: { duration: 0.6} },
    hidden: { opacity: 0, x: 0,
      y: 50,
      scale: 0.8,
      rotate: 0,   }
  };


  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      
    }else
    {
      controls.start("hidden");
    }
  }, [controls, inView]); */


    return (

        <>
         <div
           /* ref={ref}
           animate={controls}
           initial="hidden"
           variants={easout} */
            className=" mx-auto items-center justify-center">    
         
          <div className=" text-center ">
            <Image src={src} alt={altText} width={60}
             height={60} p={1} />
            </div>                               

         </div> 

        </>
 
    )
}