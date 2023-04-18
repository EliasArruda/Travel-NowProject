import { CardLugar } from '@/Shared/CardLugares';
import React, { useEffect, useState } from 'react'

const ListLugares = () => 
{
  return (
    <>

    
    <header
    className='
    grid
    sm:grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-3
    gap-6
    '>
    
    <CardLugar
    Title={`Grécia Hotel Feriado`}
    image={`https://cdn.pixabay.com/photo/2015/07/14/07/18/greece-844269_960_720.jpg`}
    information=
    {`Um ótimo local para passar o dia com a família e amigos, trazendo um ambiente rural e agradável para você e seus familiares`}
    />

    <CardLugar
    Title={`New Work`}
    image={`https://cdn.pixabay.com/photo/2017/08/31/05/36/buildings-2699520_960_720.jpg`}
    information=
    {`Ótimo lugar para busca de empregos e conhecer um local novo, sendo um local para você ter amplas oportunidades no mercado.`}
    />

    <CardLugar
    Title={`Las Vegas`}
    image={`https://img.freepik.com/fotos-gratis/foto-aerea-do-hotel-aria-em-las-vegas_181624-42881.jpg?w=1060&t=st=1681702758~exp=1681703358~hmac=10e3fedcebbaf993cd89645c89b68ea4b86f0e8ca9f628013b6b24428871bb1d`}
    information=
    {`Ótimo lugar para diversão e apostas, tendo uma grande facilidade para quem gosta de cassino e apostas de cartas.`}
    />

<video src="" ></video>
    </header>


    </>
  )
}

export default ListLugares;