
let  x = prompt("Введите сумму депозита","");
let y = prompt("Введите количество месяцов ","")
let currency="грн"
if (y<=6){
summ=(((x/100)*14)/12)*y
    alert("доход за период составит" +summ +currency);
}
if (y<=9){
summ=(((x/100)*15)/12)*y
    alert("доход за период составит" +summ +currency);
}

if (y>=10){
summ=(((x/100)*16)/12)*y
    alert("доход за период составит" +summ +currency);
}




