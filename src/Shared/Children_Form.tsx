import { handleCadastro } from "@/Utils/SwitchLoginANDCadastro";
import { handleSendInfo } from "@/Utils/handleSendInfo";
import { LoginVerification } from "@/Utils/handleSendLoginInfo";
import { str } from "@/types/globalTypes";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Swal from "sweetalert2";

interface configForm
{
    id: str,
    classValue: str,
    children?: React.ReactNode,
}

export const Cadastro: React.FC<configForm> = ({id , classValue})=>
{

    const [cadastro,setCadastro] = useState
    (
      {
        Nome: '' ,
        Email: '',
        Senha: '',
        requestInfo: 'ok'
      }
    )
  
  
    const sendValueCadastro = ()=>
    {
      String(handleSendInfo(cadastro.Nome ,  cadastro.Email , cadastro.Senha));
      handleCadastro();
    }
  

    return(
    
     <main
     id={`${id}`}
     className={`${classValue}`}>

      <input
      value={cadastro.Nome}
      onChange={(e)=>setCadastro({...cadastro , Nome: e.target.value})}
      type="text" 
      placeholder='Nome'
      className='
      md:w-[25rem]
      block
      relative
      mx-auto
      text-center
      bg-transparent
      outline-none
      border-b-2
      placeholder:text-white
      mb-[2rem]
      '/>

      <input
      value={cadastro.Email}
      onChange={(e)=>setCadastro({...cadastro , Email: e.target.value})}
      type="text" 
      placeholder='Email'
      className='
      md:w-[25rem]
      block
      relative
      mx-auto
      text-center
      bg-transparent
      placeholder:text-white
      outline-none
      border-b-2
      mb-[2rem]
      '/>

      <input
      value={cadastro.Senha}
      onChange={(e)=>setCadastro({...cadastro , Senha: e.target.value})}
      type="password" 
      placeholder='Senha'
      className='
      md:w-[25rem]
      block
      relative
      mx-auto
      text-center
      bg-transparent
      placeholder:text-white
      outline-none
      border-b-2
      mb-[2rem]
      '/>

      <button
      onClick={sendValueCadastro}
      className='
      w-[10rem]
      h-[2rem]
      bg-black
      rounded-lg
      mb-4
      '>
      Confirmar
      </button>

        </main>
    )
}


// LOGIN
export const Login: React.FC<configForm> = ({id , classValue})=>
{
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
  
    const sendValueLogin = async()=>
    {
      LoginVerification(email,senha); 
    }

    return(
    
     <main
     id={`${id}`}
     className={`${classValue}`}>

      <input
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      type="text" 
      placeholder='Email'
      className='
      md:w-[25rem]
      block
      relative
      mx-auto
      text-center
      bg-transparent
      placeholder:text-white
      outline-none
      border-b-2
      mb-[2rem]
      '/>

      <input
      value={senha}
      onChange={(e)=>setSenha(e.target.value)}
      type="password" 
      placeholder='Senha'
      className='
      md:w-[25rem]
      block
      relative
      mx-auto
      text-center
      bg-transparent
      placeholder:text-white
      outline-none
      border-b-2
      mb-[2rem]
      '/>

      <button
      onClick={sendValueLogin}
      className='
      w-[10rem]
      h-[2rem]
      bg-black
      rounded-lg
      mb-4
      '>
      Confirmar
      </button>

        </main>
    )
}
