export const handleCadastro = async ()=>
  {
    if(typeof window !== 'undefined')
    {
      const BTN_Cadastro = document.getElementById('BTN_Cadastro');
      const BTN_Login = document.getElementById('BTN_Login');
      const formCadastro = document.getElementById('form--Cadastro');
      const formLogin = document.getElementById('form--login');

      await formLogin?.classList.add('hidden');
      await BTN_Cadastro?.classList.add('sm:bg-pink-700');
      await BTN_Login?.classList.remove('sm:bg-pink-700');
      formCadastro?.classList.remove('hidden');
    }
  }


  export const handleLogin = async ()=>
  {
    if(typeof window !== 'undefined')
    {
      const BTN_Cadastro = document.getElementById('BTN_Cadastro');
      const BTN_Login = document.getElementById('BTN_Login');
      const formCadastro = document.getElementById('form--Cadastro');
      const formLogin = document.getElementById('form--login');

      await formCadastro?.classList.add('hidden');
      await BTN_Cadastro?.classList.remove('sm:bg-pink-700');
      await BTN_Login?.classList.add('sm:bg-pink-700')
      formLogin?.classList.remove('hidden')
    }
  }