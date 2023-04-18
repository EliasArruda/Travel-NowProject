import { str } from "@/types/globalTypes"
import Link from "next/link";
import { useState } from "react";

interface configOnClick
{
    clickEvent: () => void,
    DropIsOpen: any,
    id: str,
    myClass: str,
    children?: React.ReactNode
}



export const ReultilizandoDropDown: React.FC<configOnClick> = ({clickEvent , DropIsOpen , id , myClass})=>
{
    const [isOpen,setIsOpen] = useState(false);

    const toggleDropdown = ()=>
    {
        setIsOpen(!DropIsOpen);
    }
    
    return(
        <main>

        <div
        id={`${id}`} 
        className={`${myClass}`}>
        {DropIsOpen && 
        (
        <ul 
        className="
        absolute 
        top-0 
        sm:left-[-3.7rem]
        sm:mt-[1rem]
        md:left-[-4.5rem]
        md:mt-[1.2rem]
        xl:left-[-5rem]
        xl:mt-[1.2rem]
        bg-[#191a1b]
        text-white 
        border-none
        rounded-lg
        ">
         <a href={'/Vender'}><li className="hover:bg-blue-600 hover:text-white outline-none border-none  sm:px-4 md:px-4 text-center  py-2">Compartilhar Lugares</li></a>
         <li className="hover:bg-blue-600 hover:text-white outline-none border-none  sm:px-4 md:px-4 text-center  py-2" onClick={clickEvent}>SingOut</li>
        </ul>
        )}
        </div>


        </main>
    )
}