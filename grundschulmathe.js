var a = Math.floor(Math.random() * 20)
var b = Math.floor(Math.random() * 20)

var result = prompt(`Wieviel ist ${a} + ${b}?`)

if (parseInt(result, 10) === a + b) {
    alert("Richtig!")
} else {
    alert("Falsch!")
}