function enviar(){
    opSexo="";

    nome = document.getElementById("txtNome").value
    idade = document.getElementById("idade").value
    idade = parseInt(idade)
    if(sexo[0].checked){
        opSexo = "Masculino"
    } else {
        opSexo = "Feminino"
    }
    pais = document.getElementById("SelPais").value
    dv = document.getElementById("dvResultado")

    dv.innerHTML = "<h1> Relatorio </h1><br>"
    "nome: <b>" + nome + "</b> <br>" +
    "sexo: <b>" + opSexo + "</b> <br>" +
    "idade: <b>" + idade + "</b> <br>";
}
