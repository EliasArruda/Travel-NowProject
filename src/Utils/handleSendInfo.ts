import axios from "axios";
import Swal from "sweetalert2";
import { handleLogin } from "./SwitchLoginANDCadastro";
import { str } from "@/types/globalTypes";



export const handleSendInfo = (Nome: str , Email: str , Senha: str)  => 
{

    let regxValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let funValidation = Email.match(regxValidation);

    if(funValidation && Senha.length > 4 && Nome.trim())
      {
        axios.post('/api/CadastroUser',
        {
          requestInfo: 'ok',
          Nome:`${Nome}`,
          Email:`${Email}`,
          Senha:`${Senha}`,
        })
        
        .then(()=>
        {
          Swal.fire({
            title: 'Sucess!',
            text: 'CADASTRO EFETUADO COM SUCESSO',
            icon: 'success',
            confirmButtonText: `Continuar`,
            confirmButtonAriaLabel: `${handleLogin()}`,
          })
        })

        .catch(()=>
        {
          Swal.fire
          ({
            title: 'Error!',
            text: 'O E-mail informado já está em uso. Por favor, escolha outro endereço de E-mail.',
            icon: 'error',
            confirmButtonText: 'Okey'
          })
        })

      }

      else if(!funValidation)
      {
        Swal.fire({
          title: 'Error!',
          text: 'Insira um email valido para continuar',
          icon: 'error',
          confirmButtonText: 'Okey'
        })
      }

      else if(Senha.length < 5)
      {
        Swal.fire({
          title: 'Senha error!',
          icon: 'warning',
          html:
            'Insira uma senha maior que 5 caracteres',
          focusConfirm: false,
          confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Great!',
          confirmButtonAriaLabel: 'Okey',
        })
      }

      else
      {
        Swal.fire({
          title: 'Error!',
          text: 'Preencha o Nome de Usuario',
          icon: 'error',
          confirmButtonText: 'Okey'
        })
      }
}
