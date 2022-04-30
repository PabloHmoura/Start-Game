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
        alert ("Conta cadastrada com sucesso!")
    }

}

