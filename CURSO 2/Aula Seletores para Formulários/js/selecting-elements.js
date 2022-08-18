function show() {
   // let element = document.getElementById("name") //este pega os dados pelo id do objeto

   //let elements = document.getElementsByName("phone")   //este pega os dados pelo nome do objeto se tiver mais de um objeto ele transforma em um node

   let elements = document.getElementsByTagName("input")    //este guarda as informações pelo tipo de tag indicada<>

   //let elements = document.querySelectorAll("div#phone, input[name=phone]") // este pega todos os inputs de 
                                                                            //nome phone que estão dentro da div com id #phone

    //console.log(elements.value)   //este console imprime o valor no campo



    console.log(elements)       //este manda os dados html do objeto

    //print(elements)

    //console.log(elements[0].value) //este seleciona dados especificos do array devido a possibilidade de haver mais de um objeto com nome igual
    //console.log(elements[0].value)
    //console.log(elements[1].value)
}
/*
//brincando com print do que é exibido
function print(elements){
    let elem = elements
    alert('Telefones são:\n\n' + elem[0].value +'\n'+ elem[1].value)
}
*/