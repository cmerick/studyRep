function verifyEnablement() {
    let verify = document.querySelector("select").value

    if (verify == "disabled") {
        showMessage()
    } else {
        showText()
    }

}

function showText() {
    let text = document.querySelector("input[name = 'some-text']")
    text.disabled = false
    let pElement = document.getElementById("message")
    pElement.innerText = ""
    pElement.style.color = "black"
    pElementstyle.color = "transparent"
}

function showMessage(){
    let text = document.querySelector("input[name = 'some-text']")
        text.disabled = true
        let pElement = document.getElementById("message")
        pElement.innerText = "DESABILITADO"
        pElement.style.color = "white"
        pElement.style.backgroundColor = "red"
}