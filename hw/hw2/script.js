let season = prompt("введите время года")
seasons = [
            "зима",
            "зИма",
            "Зима",
            "ЗИма",
            "лето",
            "осень",
            "весна"
]
if(seasons.some(function(i){
return season===i
})) alert("сейчас " +season)
else alert("НЕВЕРНО")
