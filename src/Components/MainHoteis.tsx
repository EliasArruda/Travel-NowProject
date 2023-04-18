import ListHoteis from './ListHoteis';
import ListLugares from './ListLugares';

const MainHoteis = () => 
{
  
  if(typeof window !== 'undefined')
  {
      ScrollReveal().reveal('.myHoteis', 
      {
        duration: 1000,
        origin: 'bottom',
        delay: 100,
        opacity: 0,
        easing: 'ease-in-out',
        reset: true
      }); 
  }
  

  return (
    <>


    <header
    className='
    w-full
    sm:h-[45rem]
    md:h-[60rem]
    lg:h-[40rem]
    xl:h-[45rem]
    bg-slate-600
    '>

    <figure
    style=
    {{
        backgroundImage: 'url("ClientsIMG.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}
    className='
    w-full
    h-full
    overflow-hidden
    '>

    <article
    className='
    sm:mt-[15rem]
    md:mt-[20rem]
    lg:mt-[13rem]
    xl:mt-[16rem]
    '>
    
    <h1
    className='
    text-center
    text-white
    font-extrabold
    sm:text-[22pt]
    md:text-[29pt]
    lg:text-[34pt]
    xl:text-[45pt]
    '>
    Sempre em busca da felicidade
    dos nossos clientes
    </h1>

    <p
    className='
    md:text-[20pt]
    lg:text-[25pt]
    xl:text-[27pt]
    text-center
    text-white
    italic
    font-black
    
    '>
    Trazendo a simplicidade é a <br className='md:hidden'/> facilidade ate você
    </p>
    
    </article>
    </figure>

    <main
    className='
    myHoteis
    w-full
    sm:h-[85rem]
    md:h-[60rem]
    lg:h-[33rem]
    bg-slate-950
    '>
    
    <div
    className='
    bg-black
    text-white
    mb-4
    '>
      <h1
      className='
      text-center
      xl:text-[20pt]
      '>
        LUGARES PARA VOCÊ CONHECER.
      </h1>
    </div>
    
    <ListLugares/>
    </main>

    <div
    className='
    myHoteis
    text-white
    bg-slate-950
    '>
      <h1
      className='
      text-center
      xl:text-[20pt]
      bg-black
      text-white
      mb-4
      '>
        HOTEIS QUE TALVEZ VOCÊ GOSTE.
      </h1>

      <ListHoteis/>

      </div>
    </header>
    

    </>
  )
}

export default MainHoteis