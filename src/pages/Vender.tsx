import NavBar from '@/Components/NavBar';
import { configFormValues } from '@/Interface/FormValues';
import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

const Vender = () => 
{

  const [formValues,setFormValues] = useState<configFormValues>
  (
    {
      Titulo: '',
      IMG: '',
      URL: '',
      information: '',
    }
  );

   // Função para lidar com a seleção de arquivo de imagem
  const handleImageChange = async(event: React.ChangeEvent<HTMLInputElement>) =>
  {
    
    if(typeof window !== 'undefined')
    {
      const imagemInput = event.target;
      const mySpan = document.getElementById('mySpan');
      const removeOutline = document.getElementById('removeOutline');
      const imagemExibicao = document.getElementById('imagemExibicao') as HTMLImageElement;
      const imagemSelecionada = imagemInput.files && imagemInput.files[0];
      
      if (imagemSelecionada) 
      {
        const imagemURL = URL.createObjectURL(imagemSelecionada);
        imagemExibicao.src = imagemURL;
        mySpan?.classList.add('opacity-0');
        removeOutline?.classList.add('outline-0')
        removeOutline?.classList.remove('hover:bg-slate-950');
        document.getElementById("myURL")?.classList.add("hidden");
      }
    }

    const file = event.target.files?.[0];
    if(file)
    {
      const base64IMG = await convertToBase64(file);
      setFormValues({...formValues , IMG: base64IMG});
    }
  };

 // Função para converter a imagem em base64
 const convertToBase64 = (file: File): Promise<string> =>
 {
  return new Promise((resolve)=>
  {
    const reader = new FileReader();
    reader.onloadend = () =>
    {
      resolve(reader.result as string);
    };
    reader.readAsDataURL(file);
  });
 }

 // Função para enviar a imagem para o servidor
 const handleImageUpload = async()=>
 {
    await axios.post('/api/createProduct' , 
    {
      Titulo: `${formValues.Titulo}`,
      Imagem: `${formValues.IMG || formValues.URL }`,
      Information: `${formValues.information}`,
    })
    
    .then(()=>
    {
      Swal.fire
      ({
        title: 'Sucess!',
        text: 'Sucesso ao criar o produto',
        icon: 'success',
        confirmButtonText: 'Okey',
        confirmButtonAriaLabel: `${window.location.href = '/HoteisLugares'}`,
      });
    })

    .catch(()=>
    {
      Swal.fire
      ({
        title: 'Error!',
        text: 'Imagem com tamanho superior a 1 MB. Por favor, escolha outra',
        icon: 'error',
        confirmButtonText: 'Okey'
      })
    })
 }

 if(formValues.URL.trim())
 {
    if(typeof window !== "undefined")
    {
      document.getElementById("mySpan")?.classList.add("hidden");
      document.getElementById("imagemExibicao")?.classList.add("hidden");
      document.getElementById("imagemInput")?.classList.add("hidden");
      document.getElementById("removeOutline")?.classList.add("hidden");

      // Imagem Link
      document.getElementById("ImagemLink")?.classList.remove("hidden")
    }
 }

 else
 {
    if(typeof window !== "undefined")
    {
      document.getElementById("mySpan")?.classList.remove("hidden");
      document.getElementById("imagemExibicao")?.classList.remove("hidden");
      document.getElementById("imagemInput")?.classList.remove("hidden");
      document.getElementById("removeOutline")?.classList.remove("hidden");

      // Imagem Link
      document.getElementById("ImagemLink")?.classList.add("hidden")
    }
 }

 console.log(formValues)
  
  return (
    <>

    <NavBar/>

    <header
    className='
    flex
    justify-center
    items-center
    h-screen
    sm:h-[110vh]
    lg:h-[108vh]
    bg-gray-950
    text-white
    '>

    <main
    className='
    sm:w-[16rem]
    sm:h-[35rem]
    md:w-[35rem]
    md:h-[42rem]
    lg:w-[39rem]
    lg:h-[41rem]
    xl:w-[50rem]
    xl:h-[42rem]
    bg-black
    rounded-3xl
    '>
    
    <h1
    className='
    sm:text-[20pt]
    md:text-[30pt]
    tracking-wider
    block
    text-center
    font-bold
    mb-[1rem]
    '>
    Create Product
    </h1>

    <form 
    method='POST'
    onSubmit={(e)=>
    {
      e.preventDefault();
    }}
    className='
    block
    relative
    mx-auto
    '>

    <div
    id='removeOutline'
    className='
    cursor-pointer
    mx-auto
    sm:w-[14rem]
    sm:h-[10rem]
    md:w-[22rem]
    md:h-[12rem]
    text-white
    bg-blue-900
    hover:bg-slate-950
    transition-all
    ease-in-out
    delay-75
    bg-opacity-50
    outline-dotted
    outline-4
    outline-white
    overflow-hidden
    mb-[1.6rem]
    '>

    <input
    onChange={handleImageChange}
    type="file" 
    id="imagemInput"
    accept='image/*'
    placeholder={``}
    className='
    cursor-pointer
    sm:w-[14rem]
    sm:h-[10rem]
    md:w-[22rem]
    md:h-[12rem]
    block
    absolute
    opacity-0
    text-center
    mx-auto
    '/>
    
    <img
    id="imagemExibicao" 
    src="#" 
    alt=''
    className='
    w-full
    h-full
    bg-cover
    '/>
    
    <span
    id='mySpan'
    className='
    absolute
    mx-auto
    text-center
    sm:top-[4rem]
    sm:left-[3.2rem]
    md:top-[4.8rem]
    md:left-[12.6rem]
    lg:left-[14.5rem]
    xl:left-[20rem]
    font-semibold
    '>Selecione sua imagem</span>
    </div>

    <div
    id='ImagemLink'
    className='
    hidden
    mx-auto
    sm:w-[14rem]
    sm:h-[10rem]
    md:w-[22rem]
    md:h-[12rem]
    text-white
    bg-blue-400
    hover:bg-slate-950
    transition-all
    ease-in-out
    delay-75
    bg-opacity-50
    outline-white
    overflow-hidden
    mb-[1.6rem]
    '>

    <img
    id="imagemLink" 
    src={`${formValues.URL}`}
    alt='Link Incorreto'
    className='
    w-full
    h-full
    bg-cover
    '/>

    </div>
    <div
    className='
    block
    relative
    text-center
    mx-auto
    '>

    <h1
    className='
    mb-2
    '>
    OR
    </h1>
    
    
    <input
    value={formValues.URL}
    onChange={(e)=>setFormValues({...formValues , URL: e.target.value})}
    type="text" 
    id="myURL"
    placeholder='URL DA SUA IMAGEM'
    className='
    md:w-[20.6rem]
    text-white
    block
    relative
    mx-auto
    text-center
    bg-transparent
    outline-none
    border-b-2
    mb-8
    '/>
    </div>

    <input
    value={formValues.Titulo}
    onChange={(e)=>setFormValues({...formValues , Titulo: e.target.value})}
    type="text" 
    placeholder='TITULO'
    maxLength={30}
    className='
    md:w-[20.6rem]
    text-white
    block
    relative
    mx-auto
    text-center
    bg-transparent
    outline-none
    border-b-2
    mb-6
    '/>

    <div 
    className="
    flex 
    flex-wrap 
    w-[15rem] 
    mx-auto 
    text-center
    mb-4
    ">
    
    </div>

    <textarea
    value={formValues.information}
    onChange={(e)=>setFormValues({...formValues , information: e.target.value})}
    cols={25} 
    rows={4}
    maxLength={150}
    placeholder='Descrição'
    className='
    sm:w-[14rem]
    sm:h-[6rem]
    md:w-[19rem]
    md:h-[9rem]
    block
    mx-auto
    text-center
    text-black
    rounded-md
    mb-4
    '></textarea>

    <button
    onClick={handleImageUpload}
    className='
    sm:w-[12rem]
    sm:h-[2rem]
    block
    text-center
    mx-auto
    bg-pink-950
    rounded-2xl
    '>
    Confirmar
    </button>

    </form>

    </main>
    </header>

    </>
  )
}

export default Vender;