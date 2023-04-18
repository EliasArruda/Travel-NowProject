import { str } from "@/types/globalTypes";

interface configCard
{
    Title: str,
    image: any,
    information: str,
    children?: React.ReactNode
}

export const CardLugar: React.FC<configCard> = ({ Title , image , information  })=>
{
    return(

        <main
        className="
        sm:max-w-[16rem]
        sm:max-h-[rem]
        md:max-w-xs
        overflow-hidden
        mx-auto
        ">
        <div 
        className="
        bg-white 
        border 
        border-gray-200 
        rounded-lg 
        shadow 
        dark:bg-gray-800 
        dark:border-gray-700
        ">
        
        <a href="#">
        <img 
        src={`${image}`} 
        alt="" 
        className="rounded-t-lg" 
        />
        </a>
        
        <div className="p-5">
        
        <a href="#">
        <h5 
        className="
        mb-2 
        text-2xl 
        font-bold 
        tracking-tight 
        text-gray-900 
        dark:text-white
        ">
        {Title}
        </h5>
        </a>
        
        <p 
        className="
        mb-3 
        font-normal 
        text-gray-700 
        dark:text-gray-400
        ">
        {information}
        </p>

        <div 
        className="
        flex 
        items-center 
        justify-between
        ">
        
        
        </div>
        
        </div>
        </div>
        </main>

    )
}