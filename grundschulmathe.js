var count = 0

for(let i = 0; i < 5; i++){

    var a = Math.floor(Math.random() * 20)
    var b = Math.floor(Math.random() * 20)

    var result = prompt(`Wieviel ist ${a} + ${b}?`)

    if (parseInt(result, 10) === a + b) {
        count++
        alert(`Richtig! (${count}/5 richtig)`)
    } else {
        alert(`Falsch! (${count}/5 richtig)`)
    }
}
