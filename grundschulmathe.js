var rightAnswerCount = 0
var end = false
var level = 0

const levels = [
    function(a,b) {return {equation: a+b, question: `Wieviel ist ${a} + ${b}?`}},
    function(a,b) {if (a>b){return {equation: a-b, question: `Wieviel ist ${a} - ${b}?`}}else{return {equation: b-a, question: `Wieviel ist ${b} - ${a}?`}}},
    function(a,b) {return {equation: a*b, question: `Wieviel ist ${a} * ${b}?`}},
    function(a,b) {return {equation: a*b/a, question: `Wieviel ist ${a*b} / ${a}?`}},
]


while(!end){
    MathTest(levels[level]);
}


function MathTest(func) {

    for(let i = 0; i < 5; i++){
        var a = Math.floor(Math.random() * 20)
        var b = Math.floor(Math.random() * 20)

        var result = prompt(func(a,b).question)
    
        if (parseInt(result, 10) === func(a,b).equation) {
            rightAnswerCount++
            alert(`Richtig! (${rightAnswerCount}/5 richtig)`)
        } else {
            alert(`Falsch! (${rightAnswerCount}/5 richtig)`)
        }
    }
    
    if (level < levels.length-1) {
        if (rightAnswerCount >= 4) {
            level++
            rightAnswerCount = 0
            alert(`Glückwunsch! 
            Auf ins nächste Level!`)
        }else{
            end = true
            alert(`Für das nächste Level brauchst du 4 richtige!
            Versuche es noch einmal!`)
        } 
    }else{
        if (rightAnswerCount >= 4) {
            end = true
            alert(`Glückwunsch! 
            Alle Level bestanden!`)
        }else{
            end = true
            alert(`Du hast das letzte Level leider nicht geschafft!
            Versuche es noch einmal!`)
        } 
    }    
}