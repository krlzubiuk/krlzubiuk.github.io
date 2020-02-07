        let arr = [55,
                   9,
                   3,
                   4,
                   222];



function finalValue(array){
            let n = array.length;
            let finalValue = array[(n - 1)];
            console.log(`Значение последнего числа массиа = ${finalValue}`);
        }





        function maxValue(array) {
            let n = array.length;
            let maxValue = array[0];
            let m = 0;
            for (i=0; i < n; i++) {
                if (array[i] > maxValue) {
                    maxValue = array[i];
                    m = i;
                }
            }
            console.log(`число №${m} имеет самое высокое значение = ${maxValue}`)
        }
function summElements(array) {
            let n = array.length;
            let sum = 0;
            i=0;
            while (i < n) {
                sum += array[i];
                i++;
            }
            console.log(`Сумма массива = ${sum}`)
        }

        finalValue(arr);
        summElements(arr);
        maxValue(arr);
