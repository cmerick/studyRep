function showInfo() {
    let name = document.querySelector("input[name = 'name']").value //acessando propriedade value com type name
    let favoritColor = document.querySelector("select[name = 'color'] option:checked").text //pseudo-classe pega a opção selecionada e seleciona o atributo text.
    let likeProg = document.querySelector("input[name = 'like-programming']:checked").value //pega o valor retornado na tag "value"
    let developerOp= document.querySelectorAll("input[name='developer-options']:checked") //para receber varios dados diferentes selector all é necessário
    let optionsValue = [] // array que vai armazenar os dados
    developerOp.forEach(element => {optionsValue.push(element.value)}) //função que percorre o array e coleta apenas os valores armazenados
    //let optionChecked = optionsValue.join(", ") //???
    alert("nome: "+name+ "\nCor primária: "+favoritColor+ "\nGosta de programar: "+ likeProg + "\nConhecimentos: "+optionsValue.join(", "))
}