import { CardHoteis } from '@/Shared/CardHoteis'
import React from 'react'

const ListHoteis = () => 
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
    mb-4
    '>
    
    <CardHoteis
    Title={`Hotel na Praia`}
    image={`https://img.freepik.com/fotos-gratis/piscina_74190-2109.jpg?w=1380&t=st=1681176139~exp=1681176739~hmac=fbb730209d214b0af93ecc68a83ba7af40b7b989f87bf0161b40df551c05ff4b`}
    information=
    {`Procurando hotel de praia com clima e ambiente agradáveis? Temos a opção perfeita! Atmosfera relaxante, vistas deslumbrantes e comodidades incríveis para uma estadia memorável.`}
    />

    <CardHoteis
    Title={`Hotel Bonito com piscina`}
    image={`https://images.trvl-media.com/lodging/5000000/4660000/4655300/4655276/717ce994.jpg?impolicy=resizecrop&rw=500&ra=fit`}
    information=
    {`Hotel familiar com ambiente agradável e bonito. Comodidades como áreas de lazer, entretenimento e instalações modernas para tornar sua estadia ainda mais agradável.`}
    />

    <CardHoteis
    Title={`Hotel de luxo com piscina`}
    image={`https://img.freepik.com/fotos-gratis/piscina-de-manha-no-hotel-resort-de-verao-mediterraneo-na-turquia-bodrum-reflexo-na-agua_627829-7129.jpg?w=1380&t=st=1681702842~exp=1681703442~hmac=b9789c37107ff7c73c5407b49df4650500957b6b0f454610e5113c47c243b217`}
    information=
    {`Hotel ideal para famílias em busca de luxo e qualidade. Ambiente sofisticado, com comodidades de primeira classe e serviços premium para uma estadia inesquecível.`}
    />


    </header>


    </>
  )
}

export default ListHoteis