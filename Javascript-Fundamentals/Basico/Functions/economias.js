let savings = {
    incomes: [1300, 3200],
    expenses: [1200, 5000],
    
    
}

let sum = (array) => {
    let total = 0
    for (const value of array) {
        total += value
        
    }
    return total;
}

let balance = () => {
    let totalIncomes = sum(savings.incomes)
    let totalExpenses = sum(savings.expenses)
    let totalBalance = totalIncomes - totalExpenses;
    return totalBalance >= 0  ? 
    "Positivo Saldo: " + (totalBalance) :
    "Negativo Saldo: " + (totalBalance);
}

console.log(balance());


//celsius em fahrenheit
let c = "132"
let f = '451'

let toC = (value) => {
    return (Number(value) - 32) * 5/9;
}

let toF = (value) => {
    return (Number(value) * 9/5) + 32
}

console.log(toC(f));
console.log(toF(c));