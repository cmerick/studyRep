/* //throw
function sayMyName(name = '') {
    if (name === ""){
        throw new Error("Nome é necessário");
    }
    
    console.log('depois do erro');
}


//try...catch
try {
    sayMyName()
} catch (e) {
    console.log(e);
}

console.log("apos erro"); */

//for of

/* let name = 'Erick'
let names = [ 'Erick', 'Castilho', 'Mestre' ]

for(let char of name){
    console.log(char);
}
for (const name of names) {
    console.log(name);
} */

//for in

/* let person = {
    name: 'Erick',
    age: 26,
    weight: 90,
}

for (let property in person) {
    console.log(property);
    console.log(person[property]);
} */

