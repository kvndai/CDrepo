//team samurai
//------------------
function one(x){
	return x
}

// y=one(3)
// console.log(y)
//returns 3; var helps with scoping
//------------------

function two(val){
	if(val){
		val='I am the answer!!'
	}
	console.log(val)
}
//two()//returns undefined

function three(x,y){
	var z=x+y
}
//console.log(myNewNum =three(2,3))//if we dont' tell a function what to return, it will return undefined

function four(parameter){
	return parameter
}

var whatReturnsFromfour=four(function(){
	return 'this is not the answer'
})
//if you take the () form the parameter in the four function, it returns the function (the browser will turn to a string and write it out)
//console.log(whatReturnsFromfour) //returns 'this is not the answer'
//callback

function Five(arr){
	if(arr.length%2==0){
		return 'Hello'
	}else{
		console.log('ughhhh')
	}
}

//fiveReturn = Five([1,2,3])//returns ughhh
//console.log(fiveReturn)//what would this return //returns undefined

function six(str){
	var arr=[];
	arr.push(str[0])
	return arr.pop()
}
//console.log(six('hi')) //returns h
//pop returns the value it popped off

function seven(arr){
	for(var i=0; i> arr.length; i++){
		return true
	}
	return false
}
//console.log(mySeven([1,2,3,4,5,6,7])) //reference error

function eight(num){
	if(num){
		console.log('Im the return value')
		}else{
			return false
		}
}
//console.log(eight(0))//returns false for 0, undefined, null
function nine(arr1, arr2=[1,2,3,4,5,6,7]){//will use as default
	for(var i=0; i<arr2.length; i++){
		if(arr2[i]==arr1[i]){
			return'yes'
		}

	}
}
console.log(nine([1,2,3],[0,0,0,0]))//returns undefined; will take the array of 0s and overwrite arr2




