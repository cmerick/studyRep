/*
    Prototype

        *JS é uma lingugem prototype-based
        * prototype chain (cadeia de prototipos)
        * __proto__
*/
    //object prototype
/* [[Prototype]]: Object
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__() */

    //"Erick".__proto__

//console.log(11.0.hasOwnProperty());  

//Type conversion coersion

/* console.log("9" + 5); //coersion
console.log(Number("9") + 5); //conversion */

//number to string to number

/* let string = '123'
console.log(Number(string));
let number = 321
console.log(String(number)); */


//char & digit counter
/* let word = "paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length); */

//dot to comma and decimal change

/* let number = 3924781374.130740937490
console.log(number.toFixed(2)); //este mostra dus casas decimais após o ponto
console.log(number.toFixed(3).replace(".", ",")); //transforma em string
                                                // não permite transformar novamente em number
                                                // pq "," não faz parte de numeros */

// Capital change

/* let word = 'Programar'
console.log(word.toLowerCase());
console.log(word.toUpperCase()); */

//separando strings

/* let text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ipsum."
let myArray = text.split(" ")
console.log(myArray); */

/* let text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ipsum."
let myArray = text.split("o")
console.log(myArray); */

/* let text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ipsum."
let myArray = text.split(" ")
console.log(myArray.join("_")); */

//search

/* let text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ipsum."
console.log(text.includes("ipsum")); //retorna bool //case sensitive */

//array contructor

/* let myArray = new Array('a', 'b', 'c')
 */

//cadeia de caracteres em um array

/* let word = "Programação"
console.log(Array.from(word));
 */

//Manipulações de array

/* let techs = ['html', 'css', 'js']

techs.push('react');//adiciona um item ao fim
console.log(techs);

techs.unshift('typescript'); //adiciona um item ao inicio
console.log(techs);

techs.pop();//remove o ultimo elemento
console.log(techs);

techs.shift();
console.log(techs); //remove o primeiro elemento

console.log(techs.slice(1,3));//pega elementos de uma parte do array

 techs.splice(1, 1) //remove 1 ou mais elementos de qualquer posição do array
console.log(techs); 

let index = techs.indexOf("js") // mostra a posição de um elemento no array
console.log(index);
 */