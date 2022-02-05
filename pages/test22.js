import Link from 'next/link';
import { useState } from 'react';

const Sidebar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
    <div className='fixed w-full'>
    <div className='w-full h-16 py-4 pl-10 bg-black text-white '>
        Search NFt here
    </div>

    <div className='w-full bg-black mx-auto '>
            <button  className=' inline-flex p-3 hover:bg-blue-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
                onClick={handleClick}
                >
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </button>
    </div>
    </div>

    <div className='w-full flex'>      
       
        <div
            className={`${
                active ? '' : 'hidden'
            }    w-72 h-screen  lg:inline-flex bg-stone-900 fixed lg:mt-16 mt-28`}
            >
            <div className=' flex flex-col  items-start  text-white  bg-stone-900 '>
                <Link href='/'>
                <a className=' w-full px-3 py-4 '>
                    How it works
                </a>
                </Link>
                <Link href='/'>
                <a className=' w-full px-3 py-4 '>
                    How it works
                </a>
                </Link>
                <Link href='/'>
                <a className=' w-full px-3 py-4 '>
                    How it works
                </a>
                </Link>
                <Link href='/'>
                <a className=' w-full px-3 py-4 '>
                    How it works
                </a>
                </Link>
                <Link href='/'>
                <a className=' w-full px-3 py-4 '>
                    How it works
                </a>
                </Link>
  
            </div>

       

        </div>
   {/*      <div className='bg-gray-500  w-full '>
           <div className='h-screen bg-gray-300'>
               <div className='h-full'>
                    adsfa
               </div>
           </div>
           <div className='h-screen bg-gray-800'>
               <div className='h-full'>
                    adsfa
               </div>
           </div>
        </div> */}
    </div>






     {/*  <div className=' w-2/12 h-screen bg-black border-b border-blue-900 fixed z-50 opacity-80'>
        <div className=' mx-auto  h-full bg-gray-200 px-5 '>
            <Link href='/'>
            <a className='items-center p-2 mr-4 '>
            
                <span className='text-xl text-white font-bold uppercase tracking-wide'>
                Category
                </span>
            </a>
            </Link>
           
          
        </div>
      </div> */}
    </>
  );
};

export default Sidebar;