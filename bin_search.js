function binSearch(list, item) {
	
	var low = 0;
	var high = list.length - 1;
	
	var counter = 1;
	
	while (low <= high) {
		
		var mid = Math.round((low + high) / 2);
		var guess = list[mid];
		
		if (guess == item) {
			return 'Попытка ' + counter + ': ' + list[mid] + ' - BINGO';
		}
		if (guess > item) {
			high = --mid;
			console.log('Попытка ' + counter + ': ' + guess + ' - меньше');
		}
		else {
			low = ++mid;
			console.log('Попытка ' + counter + ': ' + guess + ' - больше');
		}
		counter++;
	}
	return;
}

var my_list = [];
for (var i = 1; i <= 100; i++)
{
	my_list.push(i);
}

console.log(binSearch(my_list, 34));

