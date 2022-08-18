class Index {

    register() {

        //event.preventDefault()

        let type = document.querySelector("select[name='type'] option:checked").value
        let area = document.querySelector("input[name='area']").value
        let rented = document.querySelector("input[name='rented']:checked").value
        let property = new Property(type, area, rented)
        this.addHouse(property)

    }

    addHouse(property){
        let newListValue = document.createElement("li")
        if (property.rented == "sim") {

            newListValue.innerText = "Alugado | Area: " + property.area + "m² | Tipo: " + property.type + " | "
            newListValue.style.backgroundColor = "red"
            newListValue.style.color = "white"
        } else {
            newListValue.innerText = "Disponível | Area: " + property.area + "m² | Tipo: " + property.type + " | "
        }
        let removeButton = document.createElement("button")
        removeButton.type = "button"
        removeButton.innerText = "Remover"
        removeButton.setAttribute("onclick", "index.removeHouse(this)")
        newListValue.appendChild(removeButton)
        document.getElementById("lista").appendChild(newListValue)
    }

    removeHouse(button) {
        let liToRemove = button.parentNode
        document.getElementById("lista").removeChild(liToRemove)
    }
}