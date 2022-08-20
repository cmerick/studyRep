let score = Number(prompt("digite uma nota de 0 a 100"))

const getScore = (score) => {
let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score < 90
let scoreC = score >= 70 && score < 80
let scoreD = score >= 60 && score < 70
let scoreF = score < 60

if(scoreA) score = 'A'
if(scoreB) score = 'B'
if(scoreC) score = 'C'
if(scoreD) score = 'D'
if(scoreF) score = 'F'

return score

}


console.log(getScore(score));