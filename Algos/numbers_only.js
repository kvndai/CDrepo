function numbersOnly(arr){
	var newArr = []
	for(var x=0; x<arr.length; x++){
		if (typeof arr[x] === "number"){
			newArr.push(arr[x])
		} 
	}
	return newArr
}

//console.log(numbersOnly(['today', 'tomorrow', 2, 4, 'and', 3]))

function removeNumbers(arr){
	for(var x=0; x<arr.length; x++){
		if (typeof arr[x] === "number"){
			for(var i=x; i<arr.length; i++){
				arr[i] = arr[i+1]
			}
			x-=1;
			arr.pop()
		} 
	}
	return arr
}

var arr = [1,'hot',2, 'cold', 'sometimes']
removeNumbers(arr)
console.log(arr)
console.log(removeNumbers([0,1,2,3]))
console.log(removeNumbers(['all', 'strings']))
console.log(removeNumbers(['string', 2]))