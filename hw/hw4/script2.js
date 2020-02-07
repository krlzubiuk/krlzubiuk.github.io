
let  x = prompt("Введите сумму покупок","");

let currency="грн"
if (x<1000){
    summ=x-(x/100)*3

    alert(summ);
}
if (x>1000&&x<5000){
    summ=x-(x/100)*5

    alert(summ);
}

if (x>5000){
    summ=x-(x/100)*10

    alert(summ);
}






