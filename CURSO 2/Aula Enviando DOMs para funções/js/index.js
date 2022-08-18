function sayMyFirstName(element) { // este acessa os dados utilizando o this que referencia um objeto
    alert("Seu Primeiro nome é: " + element.value)
    
}

function sayMyLastName() {
    console.log(event) //event é uma variável global que recebe os dados do objeto pela ação
                        //ele funciona com todas as açoes on pois identifica o objeto
    alert("Meu útimo nome é " + event.target.value)
}