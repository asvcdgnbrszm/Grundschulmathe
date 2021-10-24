var count = 0
var lost = false
var level = 1

const obj = {
    1: function(a,b) {return [a+b, `Wieviel ist ${a} + ${b}?`]},
    2: function(a,b) {if (a>b){return [a-b, `Wieviel ist ${a} - ${b}?`]}else{return [b-a, `Wieviel ist ${b} - ${a}?`]} },
    3: function(a,b) {return [a*b, `Wieviel ist ${a} * ${b}?`]},
    4: function(a,b) {return [a*b/a, `Wieviel ist ${a*b} / ${a}?`]}
}


while (!lost){

    for(let i = 0; i < 5; i++){

        var a = Math.floor(Math.random() * 20)
        var b = Math.floor(Math.random() * 20)
    
        var result = prompt(obj[level](a,b)[1])
    
        if (parseInt(result, 10) === obj[level](a,b)[0]) {
            count++
            alert(`Richtig! (${count}/5 richtig)`)
        } else {
            alert(`Falsch! (${count}/5 richtig)`)
        }
    }
    
    if (level < Object.keys(obj).length) {
        if (count >= 4) {
            level++
            count = 0
            alert(`Glückwunsch! 
            Auf ins nächste Level!`)
        }else{
            lost = true
            alert(`Für das nächste Level brauchst du 4 richtige!
            Versuche es noch einmal!`)
        } 
    }else{
        if (count >= 4) {
            lost = true
            alert(`Glückwunsch! 
            Alle Level bestanden!`)
        }else{
            lost = true
            alert(`Du hast das letzte Level leider nicht geschafft!
            Versuche es noch einmal!`)
        } 
    }    
}

