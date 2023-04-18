import NavBar from '@/Components/NavBar';
import { CardCreateProduct } from '@/Shared/CardCreateProduct';
import axios from 'axios';
import { useState , useEffect } from 'react';

const HoteisLugares = () => 
{

    const [ Products , setProducts ] = useState([]);

    useEffect(()=>
    {
        axios.get('/api/TodosOsProdutos')
        .then((response): any =>
        {
            setProducts(response.data);
        })
        
    },[])

    console.log(Products[0]);

  return (
    <>

    <NavBar/>

    <header
    className='
    h-screen
    bg-black
    '>

    <main
    className='
    grid
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    gap-2
    '>

    {
        Products.map((data: any , key) => 
            (
                <div
                key={key}
                className='
                mx-auto
                block
                mt-2
                '
                >

                <CardCreateProduct
                Title={`${data.Titulo}`}
                image={`${data.Imagem}`}
                information={`${data.Information}`}
                />

                </div>
            ))
    }

    </main>

    </header>

    </>
  )
}

export default HoteisLugares;