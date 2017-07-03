// function createObj(arrInd, arrVal){
// 	var obj={};
// 	for(var i=0; i<arrInd.length; i++){
// 		// obj={arrInd[i]:arrVal[i]};
// 		obj[arrInd[i]]=arrVal[i];
// 	}
// 	return obj;
// }

// console.log(obj=createObj([1,2,3,4],['a','b','c','d']))
// for(key in obj){
// 	console.log(key===1)
// }

function concatString(arr_1, arr_2){
	var arr_3=[]
	arr_3=arr_1+arr_2
	return arr_3
}

var arr4=[]
arr4=concatString([1,2,3,4],[1,2,3,4])
console.log( arr4)

var str = "abcde"
str = 'r';
console.log(str);
