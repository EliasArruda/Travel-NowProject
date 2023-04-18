import { str } from "@/types/globalTypes";
import axios from "axios";
import Swal from "sweetalert2";
import crypto from 'crypto';

export const LoginVerification = (Email: str , Senha: str) =>
{
    axios.post('/api/LoginUser', 
    {
        Email: `${Email}`,
        Senha: `${Senha}`,
    })

    .then(async(response)=>
    {
        const NameCodificado = btoa(response.data[0].Name);
        const ImagemCodificada = btoa(response.data[0].imagem);
        
        if(typeof window !== 'undefined')
        {
            document.cookie = `ID=${NameCodificado};`;
            document.cookie = `IMG=${ImagemCodificada};`;
            window.location.href = '/'
        }
    })

    .catch(()=>
    {
        Swal.fire
        ({
          title: 'Error!',
          text: 'Credencias Invalidas',
          icon: 'error',
          confirmButtonText: 'Okey'
        })
    })
}