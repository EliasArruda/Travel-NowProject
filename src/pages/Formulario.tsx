import { Cadastro, Login } from '@/Shared/Children_Form';
import { handleCadastro, handleLogin } from '@/Utils/SwitchLoginANDCadastro';
import { signIn } from 'next-auth/react';
import React from 'react'
import { AiFillGoogleCircle } from 'react-icons/ai';
import { BsFacebook, BsGithub } from 'react-icons/bs';



const Formulario = () => 
{

  return (
    <>
    
    <header
    className='
    flex
    justify-center
    items-center
    h-screen
    bg-gray-950
    text-white
    '>

      <main
      className='
      sm:w-[16rem]
      sm:h-[27rem]
      md:w-[35rem]
      md:h-[46rem]
      lg:w-[47rem]
      lg:h-[37rem]
      xl:w-[54rem]
      xl:h-[42rem]
      rounded-3xl
      '>

      <h1
      className='
      text-center
      sm:text-[30pt]
      mt-2
      mb-4
      '>
      Travel-Now
      </h1>

      <div
      className='
      mx-auto
      text-center
      mb-6
      '>

      <button
      id='BTN_Cadastro'
      onClick={handleCadastro}
      className='
      sm:w-[6rem]
      md:w-[7rem]
      sm:bg-pink-700
      rounded-s-lg
      border-2
      '>
      CADASTRO
      </button>
      
      <button
      id='BTN_Login'
      onClick={handleLogin}
      className='
      sm:w-[6rem]
      md:w-[7rem]
      border-2
      rounded-e-lg
      mb-4
      hover:bg-pink-950
      text-white 
      transition 
      duration-300
      '>
      LOGIN
      </button>
      </div>


      {/* Formulario */}
      <div
      className='
      block
      relative
      mx-auto
      text-center
      '>

      <Cadastro
      id={`form--Cadastro`}
      classValue={``}
      />

      <Login
      id={`form--login`}
      classValue={`hidden`}
      />

    
      {/* End Formulario */}

      <h1>
      OR
      </h1>
      
      <hr 
      className='
      text-center
      mx-auto
      w-[10rem]
      mb-[1rem]
      '/>

      <section
      className='
      inline
      mx-auto
      text-center
      sm:text-[22pt]
      md:text-[26pt]
      lg:text-[30pt]
      '>
        
      <BsGithub
      onClick={()=>signIn('github',
      {
        callbackUrl: '/',
        redirect: true
      })}
      className='
      cursor-pointer
      text-center
      mx-auto
      inline
      mr-2
      '/>


      <BsFacebook
      onClick={()=>signIn('facebook',
      {
        callbackUrl: '/',
        redirect: true
      })}
      className='
      cursor-pointer
      text-center
      mx-auto
      inline
      mr-2
      '/>

      </section>

      </div>
      </main>

    </header>
    
    
    </>
  )
}

export default Formulario;