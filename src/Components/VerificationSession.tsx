import { ReultilizandoDropDown } from '@/Shared/ReultilizandoDropdown';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';

const VerificationSession = () => 
{
    const {data: session} = useSession();
    const [decodeUser , setDecodeUser] = useState('');
    const [decodeIMG,setDecodeIMG] = useState('');
    const [existingCookie, setExistingCookie] = useState(false);
    
    const [isOpen,setIsOpen] = useState(false);
    const toggleDropdown = ()=>
    {
        setIsOpen(!isOpen);
    }

    if(session)
    {
        if(typeof window !== 'undefined')
        {
            document.getElementById('hiddenSession')?.classList.add('hidden');
            document.getElementById('hiddenSpan')?.classList.remove('md:inline');
            document.getElementById('RemoveDropdownSession')?.classList.add('hidden');
        }
    }

    //  Criando um variavel Cookie , com valor undefined
    let cookies = undefined;
    let cookieExisting = undefined;
    let cookieIMGExisting = undefined;
    
    // Lendo um cookie
    useEffect(() => 
    {
        if (typeof window !== "undefined") 
        {
            cookies = document.cookie;
            cookieExisting = cookies.includes("ID");
            cookieIMGExisting = cookies.includes("IMG");

            // Verificando a existencia do cookie
            if(cookieExisting)
            {
                setExistingCookie(true);
                // Criando uma nova aba para o usuario cadastrado
                const newUser = document.getElementById('newUser');
                newUser?.classList.add('hidden');
                //  -----------------------------------------------

                //  Decodificando é resgatando o nome de usuario
                cookies = document.cookie.split(";");
                const cookieID = cookies.find((cookie) => 
                {
                  return cookie.trim().startsWith("ID=");
                });

                const cookieIMG = cookies.find(cookieimage =>
                {
                    return cookieimage.trim().startsWith("IMG=")
                })

                if(cookieIMG)
                {
                    setDecodeIMG(atob(cookieIMG.split("=")[1]));
                }
          
                if (cookieID) 
                {
                  setDecodeUser(atob(cookieID.split("=")[1]));
                }
                // -----------------------------------------------
            }

            else
            {
                const quitUSER = document.getElementById('quitUSER');
                const newUser = document.getElementById('newUser');
                
                quitUSER?.classList.add('hidden');
                newUser?.classList.remove('hidden');
            }
        }

    }, []);

    
    const removeCookie = () =>
    {
        if(typeof window !== 'undefined')
        {
            document.cookie = `ID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            document.cookie = `IMG=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            window.location.href = '/';
        }

    }


  return (
    <>

    {session ? 
        
        <div>
        <button
        onClick={toggleDropdown}>
        
        <img
        src={`${session.user?.image}`} 
        alt="Usuario não cadastrado"
        className='
        inline
        md:mr-2
        h-6
        rounded-full
        '/>

        <span
        className='
        sm:hidden
        md:inline
        '>
        {session.user?.name}
        </span>
        
        </button>
        <ReultilizandoDropDown
        DropIsOpen={isOpen}
        clickEvent={()=>signOut()}
        id=''
        myClass=
        {`
            relative
            sm:left-[1.3rem]
            sm:top-[-.5rem]
            md:left-[5.6rem]
            md:top-[-.7rem]
        
        `}
        />

        </div>
    
    : null}

    <Link
    href={'/Formulario'}
    id='newUser'
    className='
    flex
    items-center
    hidden
    '>
    
    <BsPersonCircle
    id='hiddenSession'
    className='
    inline
    md:mr-2
    '/>
    
    <span
    id='hiddenSpan'
    className='
    sm:hidden
    md:inline
    '>
     Profile
    </span>
    </Link>

    {/* Criando uma nova Area do usuario cadastrado */}
    <div
    id='quitUSER'
    onClick={toggleDropdown}
    className='
    flex
    items-center
    '
    >
    
    <img
    src={`${decodeIMG}`}
    alt={`Null_Profile`}
    className='
    inline
    md:mr-2
    mt-[.1rem]
    h-[1.4rem]
    rounded-full
    '/>
    
    <span
    id='hiddenSpan'
    className='
    sm:hidden
    md:inline
    '>
     {existingCookie === true ? <span>{decodeUser}</span> : <span>Profile</span>}
    </span>
    </div>
    {/* END AREA */}

    <ReultilizandoDropDown
    DropIsOpen={isOpen}
    clickEvent={removeCookie}
    id='RemoveDropdownSession'
    myClass='relative'
    />

    </>
  )
}

export default VerificationSession