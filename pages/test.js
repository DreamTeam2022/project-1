/* import React from 'react'
import data from '../data/data'

const Test = () => (
  <div className='text-center'>
      {data.map((data, index) =>
      
        <div key={index} className='mb-20 bg-black text-white'>
          <p><strong>Category</strong>: {data.category}</p>
          <p><strong>Name</strong>: {data.title}</p>
          <p><strong>Website</strong>: {data.src}</p>
          <img alt={projects.title} src={projectImage} />
        </div>
      )}
    </div>
)

export default Test */

import React from 'react';
import Data from '../data/data.json';
export default function Test() {

    return (
        <section id="nft" className='mx-auto' >
            <div className='lg:text-5xl md:text-3xl sm:text-xl pt-28 pb-16 items-center justify-center text-center mx-auto font-header-h'>
              <h2> Here are Some Projects i have done</h2>
            </div>

              <div className='container flex flex-row mx-auto'>


              <div className='flex flex-wrap lg:w-12/12 md:w-12/12 sm:w-12/12'>

              {
                Data.map(nft=>{
                  /* const bar_width = Skills.level;   */ 
                  const nftImage = "images/" + nft.image;         
                  return(          
                      
                    <div key={nft.title} className="xl:w-3/12 lg:w-4/12 md:w-6/12 sm:w-full px-5 py-2 font-paragraph ">
                        <div className="flex flex-wrap bg-gray-300 border-4 border-black border-solid w-full h-full">
                      {/*   <a href={projects.url} target="_blank" title={projects.title}> */}
                            <img alt={nft.title} src={nftImage} />
                            <div className="overlay">
                            <div className="portfolio-item-meta p-2 items-center justify-center mx-auto text-center">
                                <h5>{nft.title}</h5>
                                <p>{nft.category}</p>
                            </div>
                            </div>
                      {/*   </a> */}
                        </div>
                    </div>



           /*          <div className='lg:w-4/12 md:w-6/12 sm:w-full px-5 py-2 font-paragraph'>               
                      <div className='w-full'>{Portfolio.title}</div>
                      <div className='w-full'>{Portfolio.category}</div>                         
                      <div className='bg-gray-100 rounded-full w-12/12 border-solid border-2 border-black'>
                      <div className="shadow-none  bg-purple-500 rounded-full pl-5">                   
                      </div>
                      </div>
                    </div>  */                        
            
                  )
                })
              }
              </div>
              </div>

      </section>
   
  );
}