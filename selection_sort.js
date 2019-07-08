function findSmallest(arr) {
	
	var smallest = arr[0];
	var smallestIndex = 0;
	
	for (var i = 1; i <= arr.length; i++) {
		if (arr[i] < smallest) {
			smallest = arr[i];
			smallestIndex = i;
		}
	}
	
	return smallestIndex + ': ' + smallest;
}

console.log(findSmallest([5,3,6,2,10]));

function selectionSort(arr) {
	var newArr = [];
	
	for (var i = 0; i <= arr.length; i++) {
		smallest = findSmallest(arr);
		newArr.push(arr.pop(smallest));
	}
	return newArr;
}


console.log(selectionSort([5,3,6,2,10]));

