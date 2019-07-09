function findSmallest(arr) {
	
	var smallest = arr[0];
	var smallestIndex = 0;
	
	for (var i = 1; i <= arr.length; i++) {
		if (arr[i] < smallest) {
			smallest = arr[i];
			smallestIndex = i;
		}
	}
	
	return smallestIndex;
}

function selectionSort(arr) {
	var newArr = [];
	
	for (var i = 0; i <= arr.length + 1; i++) {
		
		var smallest = findSmallest(arr);
		var del = arr.splice(smallest, 1);
		
		newArr.push(del[0]);
		
	}
	return newArr;
}

console.log(findSmallest([10]));//3
console.log(selectionSort([5,3,6,2]));
