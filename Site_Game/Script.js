function click_cadastro(){

    var apelidoVar = input_apelido.value;
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;
    var conrfirmarsenhaVar = input_confirmar_senha.value;

    if (apelidoVar == "" || emailVar== "" || senhaVar == "" || conrfirmarsenhaVar == ""){

        alert ("Todos os campos precisam ser preenchidos");

    }
    else if (senhaVar != conrfirmarsenhaVar){
        alert ("As senhas não coincidem");
    }
    else{
        alert ("Conta cadastrada com sucesso!");
    }

}

function click_login(){
    var emailLogin = input_email_login.value;
    var senhaLogin = input_senha_login.value;

    if (emailLogin == "" || senhaLogin == ""){

        alert ("Preencha todos os campos");

    }
    else{
        login = true
    }

        
}