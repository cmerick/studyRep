function addNewPhone() {
    const phoneForm = document.querySelector("form#phones")
    const newPhone = phoneForm.children[0].cloneNode(true)
    const phonePosition = phoneForm.children.length + 1
    newPhone.querySelector("label").innerText = "Telefone " + phonePosition + ": "
    phoneForm.appendChild(newPhone) //este acrescenta o texto ao html
    console.log(phoneForm.children)
}

function printPhones() {
    let message = ""
    const phones = document.querySelectorAll("input[name = phone]")
    phones.forEach((phones, index) => {
        message += "Telefone " + (index + 1) + ": " + phones.value + "\n"
    })
    alert(message)
}