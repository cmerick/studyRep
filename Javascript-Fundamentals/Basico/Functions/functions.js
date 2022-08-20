/* // criar uma aplicativo

//declaration - declaração
//function statement

function createPhrases() {
    console.log('estudar é muito bom')
    console.log('paciencia e persistencia')
    console.log('revisão é mãe do aprendizado')
}

//execute, run, call, invoke
createPhrases() */

//Anonimous ou expression
//(parameters)

/* const sum = function(number1, number2) {
    console.log( number1 + number2 )
}

sum(2,3) */

//function hoisting

/* sayMyName() */

/* function sayMyName () {
    console.log("Erick") // a função sofre hoisting pq o js durante a leitura reorganiza as funções.
} */

/* const sayMyName = function(){
    console.log("erick") //não ira funcionar pois a função anonima declarada como
                        // const tem o mesmo valor de uma const normal
} */

//Arrow function

/* const sayMyName = () => {
    console.log('Erick')
} */

//callback function

/* const sayMyName = (name) => {
    name()
}

sayMyName(() => {
    console.log('Estou em uma callback')
}) */

//constructors

/* function Person(name, age) {// a letra maiuscula na declaração é uma boa pratica
    this.name = name,
    this.age = age
    this.walk = () =>{
        return this.name + ' está andando.'
    }
}

const Erick = new Person('Erick', 26)

console.log(Erick);
console.log(Erick.walk()); */