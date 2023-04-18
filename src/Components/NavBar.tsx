import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaHotel } from 'react-icons/fa';
import VerificationSession from './VerificationSession';
import Link from 'next/link';

const NavBar = () => 
{
   
  return (
    <>

    <header
    className='
    w-full
    h-full
    p-2
    bg-slate-950
    '>

    <main
    className='
    sm:flex
    sm:justify-between
    sm:items-center
    cursor-pointer
    text-white
    '>
        <a href="/">
        <h1>Travel-Now</h1>
        </a>
        
        <nav
        className='
        h-full
        flex
        gap-2
        '>
        
        

        <div
        className='
        flex
        justify-center
        items-center
        md:mr-2
        hover:text-[wheat]
        '>
       
       <VerificationSession/>

        </div>

        <div
        className='
        flex
        justify-center
        items-center
        hover:text-emerald-200
        md:mr-2
        '>
        
        <a 
        href={'/HoteisLugares'}
        className='
        flex
        items-center
        '>

        <FaHotel
        className='
        md:mr-1
        '/>

        <div id="drawer" 
        className="
        hidden
        w-full
        h-full 
        fixed 
        top-0 
        right-0 
        bg-gray-900 
        shadow-lg 
        z-20">
            
        <article
        className='
        w-full
        h-full
        inline
        p-2
        '>
        
        </article>
        </div>
        
        <span
        className='
        sm:hidden
        md:block
        '>
        Hoteis/Lugares
        </span>
        </a>
        </div>

        </nav>
    </main>

    </header>

    </>
  )
}

export default NavBar;