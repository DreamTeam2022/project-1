import React from 'react'
import Image from 'next/image'

import icon1 from '../public/icons/image1.svg';
import icon2 from '../public/icons/image2.svg';
import icon3 from '../public/icons/image3.svg';
import icon4 from '../public/icons/image4.svg';
import icon5 from '../public/icons/image5.svg';
import icon6 from '../public/icons/image6.svg';
import icon7 from '../public/icons/image7.svg';
import icon8 from '../public/icons/image8.svg';
import icon9 from '../public/icons/image9.svg';
import icon10 from '../public/icons/image10.png';
import icon11 from '../public/icons/image11.svg';
import icon12 from '../public/icons/image12.svg';
import icon13 from '../public/icons/image13.svg';
import icon14 from '../public/icons/image14.svg';
import icon15 from '../public/icons/image15.svg';
import icon16 from '../public/icons/image16.svg';
import icon17 from '../public/icons/image17.svg';
import icon18 from '../public/icons/image18.svg';
import icon19 from '../public/icons/image19.svg';
import Carouselbar from '../components/Carouselbar';



const data = [
  {
    id: 1,
    imgSrc: icon1,
    altText: 'Saimon Harmer',
    title: 'Unique',

   
  },
  {
    id: 2,
    imgSrc: icon2,
    altText: 'Aaron Nunez',
    title: 'Community Centered',

   
  },
  {
    id: 3,
    imgSrc: icon3,
    altText: 'Aaron Nunez',
    title: 'Unitily-Focused',

  },
  {
    id: 4,
    imgSrc: icon4,
    altText: 'Lina Jutila',
    title: 'Comic',
    
  },
  {
    id: 5,
    imgSrc: icon5,
    altText: 'Saimon Harmer',
    title: 'Full Ownership',
  
  },
  {
    id: 6,
    imgSrc: icon6,
    altText: 'Aaron Nunez',
    title: 'Fainess & Charity',

  },
  {
    id: 7,
    imgSrc: icon7,
    altText: 'Aaron Nunez',
    title: 'Fainess & Charity',

  },
  {
    id: 8,
    imgSrc: icon8,
    altText: 'Aaron Nunez',
    title: 'Fainess & Charity',

  },
  {
    id: 9,
    imgSrc: icon9,
    altText: 'Aaron Nunez',
    title: 'Fainess & Charity',

  },
  {
    id: 10,
    imgSrc: icon10,
    altText: 'Aaron Nunez',
    title: 'Fainess & Charity',

  },
  {
    id: 11,
    imgSrc: icon11,
    altText: 'Saimon Harmer',
    title: 'Unique',

   
  },

  {
    id: 12,
    imgSrc: icon12,
    altText: 'Aaron Nunez',
    title: 'Community Centered',

   
  },
  {
    id: 13,
    imgSrc: icon13,
    altText: 'Aaron Nunez',
    title: 'Unitily-Focused',

  },
  {
    id: 14,
    imgSrc: icon14,
    altText: 'Lina Jutila',
    title: 'Comic',
    
  },
  {
    id: 15,
    imgSrc: icon15,
    altText: 'Saimon Harmer',
    title: 'Full Ownership',
  
  },
  {
    id: 16,
    imgSrc: icon16,
    altText: 'Aaron Nunez',
    title: 'Fainess & Charity',

  },
  {
    id: 17,
    imgSrc: icon17,
    altText: 'Aaron Nunez',
    title: 'Fainess & Charity',

  },
  {
    id: 18,
    imgSrc: icon18,
    altText: 'Aaron Nunez',
    title: 'Fainess & Charity',

  },
  {
    id: 19,
    imgSrc: icon19,
    altText: 'Aaron Nunez',
    title: 'Fainess & Charity',
  },
];



function Carousel() {
    return (
        <>
        <div className="w-full flex   py-1 border-t-2 border-b-2 border-t-gray-500 border-b-gray-500 bg-black">      
 
       {data.map((item) => (
         <Carouselbar
           key={`team--key${item.id}`}
           src={item.imgSrc}
           altText={item.altText}
           title={item.title}
           
    
         />
       ))}
     </div>
            
        </>
    )
}

export default Carousel
