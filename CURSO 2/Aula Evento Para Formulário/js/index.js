function save(){
    event.preventDefault() // impede o comportamento padrão do evento submit que recarrega a pagina
    let name = document.querySelector("input[name = 'name']").value
    let programmingLanguage = document.querySelector("select[name='programming-lang'] option:checked").text
    alert("Nome: "+name+"\n\nLinguagem: "+programmingLanguage)
}