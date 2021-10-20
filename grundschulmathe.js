var count = 0
var lost = false
var level = 1

const resultObj = {
    1: function(a,b) {return a+b},
    2: function(a,b) {if (a>b){return a-b}else{return b-a} },
    3: function(a,b) {return a*b},
    4: function(a,b) {return a*b/a}
}

const promptObj = {
    1: function(a,b) {return `Wieviel ist ${a} + ${b}?`},
    2: function(a,b) {if (a>b){return `Wieviel ist ${a} - ${b}?`}else{return `Wieviel ist ${b} - ${a}?`}},
    3: function(a,b) {return `Wieviel ist ${a} * ${b}?`},
    4: function(a,b) {return `Wieviel ist ${a*b} / ${a}?`}
}


while (!lost){

    for(let i = 0; i < 5; i++){

        var a = Math.floor(Math.random() * 20)
        var b = Math.floor(Math.random() * 20)
    
        var result = prompt(promptObj[level](a,b))
    
        if (parseInt(result, 10) === resultObj[level](a,b)) {
            count++
            alert(`Richtig! (${count}/5 richtig)`)
        } else {
            alert(`Falsch! (${count}/5 richtig)`)
        }
    }
    
    if (level < 4) {
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

