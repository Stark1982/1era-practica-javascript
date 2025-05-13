let person = prompt ("please enter you name");
let text
var inversion = prompt ("cuanto vas a invertir");
var plazo = 3;
var ganancia = (inversion*0.21)*plazo;
Number(inversion);
Number(ganancia);
var total = Number(inversion) + Number(ganancia);



if (person == null || person == "") {
    text = "user cancelled the prompt."; 
} else {
    alert ("Hello, " + person + " saldo en tres meses " + total);
}

