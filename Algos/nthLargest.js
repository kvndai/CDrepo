//find the val largest -- return a new array
function nthLargest(arr, val){
	var arrSorted = [];
	var num = 0;
	arrSorted = sort(arr);
	num=arr[arr.length-val];
	return num;
}

function sort(arr){
	var temp=0;
	//you only have to go as long as the val sent in...so you could add that in
	for(var x=0; x<arr.length-1; x++){
		if(arr[x] > arr[x+1]){
			temp=arr[x];
			arr[x]=arr[x+1];
			arr[x+1]=temp;
			x=-1;
		}
	}
	return arr;
}

//console.log(sort([10,20,9,7,11])) //7,9,10,11,20
//console.log(sort([11,2,3,4,5])) //2,3,4,5,11
//console.log(sort([11,10,9,8,7,6]))
console.log(nthLargest([10,20,9,7,11],2))
console.log(nthLargest([11,2,3,4,5],3))

//[10,20,9,7,11],2 --> 10
//legth=5
// round1:
// x=0
// [10,20,9,7,11]

// round2:
// x=1
// //is 20>9
// [10,9,20,7,11]

// round3:
// x=0
// //is 10>9
// [9,10,20,7,11]

// round4:
// x=0
// //is 9>10
// x=1
// //is10>20
// x=2
// //is 20>7
// [9,10,7,20,11]
// x=1
// //is 10>7
// [9,7,10,20,11]
// x=0
// [7,9,10,20,11]
// x=1
// //is9>10
// x=2
// //is10>20
// x=3
// //is20>11
// [7,9,10,11,20]
// x=2
// //is10>11
// x=3

