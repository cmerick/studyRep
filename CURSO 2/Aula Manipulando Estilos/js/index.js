function setBlueBackground(){
    let element = document.getElementById("style-text")
    element.style.backgroundColor = "blue"

}

function setTransparentBackground(){
    let element = document.getElementById("style-text")
    element.style.backgroundColor = "transparent"

}

function setRedColor(){
    let element = document.getElementById("style-text")//muito melhor do que setAttribute
    element.classList.add("red-color")
    

}

function removeRedColor(){
    let element = document.getElementById("style-text")

    element.classList.remove("red-color")

}