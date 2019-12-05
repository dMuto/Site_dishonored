drop_perfil.style.display = 'none';

function teste(url){
    window.location.href = url;
  }


  function opçoes() {
    if (drop_perfil.style.display == 'none') {
      drop_perfil.style.display = 'block';
    }
    else {
      drop_perfil.style.display = 'none';
    }
  }

  
  console.log("Nome:",sessionStorage.login_usuario_meuapp)
  console.log("Senha:", sessionStorage.nome_usuario_meuapp)
  //if (sessionStorage.login_usuario_meuapp.length == 0) {

    //login_1.style.display = 'block';

    // n_user.style.display = 'none';
  // }
  if(sessionStorage.getItem('login_usuario_meuapp')==null || sessionStorage.login_usuario_meuapp.length == 0){
    login_1.style.display = 'block';

    div_n_user.style.display = 'none';
    }
  else {

    login_1.style.display = 'none';

    div_n_user.style.display = 'block';

    span_n_user.innerHTML = sessionStorage.login_usuario_meuapp;
  }




  
