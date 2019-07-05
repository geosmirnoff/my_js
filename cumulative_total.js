/* ФУНКЦИЯ ВЫЧИСЛЕНИЯ НАРАСТАЮЩИХ ИТОГОВ */

var amt = [100, 200, 300, 1000, 2000]; //МАССИВ ЗАТРАТ

function cumulativeTotal(arr) {
	
	var new_arr = []; //МАССИВ ДЛЯ НАРАСТАЮЩИХ ИТОГОВ
	
	for (i = 0; i < arr.length; i++) {

		var sum = 0; 
		
		for (j = 0; j <= i; j++) {
			sum += arr[j]; //ИТОГ ТЕКУЩЕГО ЭЛЕМЕНТА РАВЕН СУММЕ ЭЛЕМЕНТОВ ОТ НУЛЕВОГО ДО ТЕКУЩЕГО
		}
		
		new_arr.push(sum);	
	}
	
	return new_arr;
}

var new_amt = cumulativeTotal(amt);
console.log(new_amt);