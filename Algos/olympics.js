


function adder(num, cur =0){
	if(cur == num) return cur
	console.log(cur)
	return cur + adder(num, cur+1)
}
//console.log(adder(10)) // what would console.log show
//answer is 55; make the tree

//1:
// return 0 + (10,1)
// 2:
// 	return 1+(10,2)
// 3:
// 		return 2+(10,3)
// 		...
// 			return 9+(10,10) 
// 				return 10 + 9 + 8 + 7 + 6...


function rCall(str){
	if(str == undefined){
		return 'arggggghhhhhhhh'
	}
	if(str.length >= 10){
		return rCall()
	}
	str += 'e'
	console.log(str)
	return rCall(str)
}

//console.log(rCall('ee'))// what will this show


function newb(num, par = num *3){
	console.log(num % 3)
	if(num % 3 != 0){
		return 'run!';
	}

	if(par > 30){
		return par;
	}
	return newb(par)
}

//console.log(newb(3))// what will this return


function meow(num1, num2, count){
	if(count ==  undefined){
		count = 0;
	}
	if(count >=2){
		return num1 + num2;
	}
	num1 += num2;
	num2 += num1
	return meow(num1, num2, count +1)
}

//console.log(meow(1,2))

function rF(num){
	if(num <= 1){
		return num
	}
	return rF(num-1) + rF(num-2)
}
//console.log(rF(6))// what will this show

function create(name, age, city){
	var obj = {};
	obj.name = name;
	obj.age = age,
	obj.city =city
}

var x = new create('ray', 16, 'milwaukee')
//console.log(x)

function create2(name, age, city){
	var obj = {};
	obj.name = name
	obj.age = age,
	obj.city =city
	return obj
}

//var x = create2('ray', 16, 'milwaukee')
//x['city'] = 'cats'
//console.log(x[city])// what will this show/what will the code do

function xer(num, par){
	var temp = par(num)
	return temp + num
}

// console.log(xer(10, function(cat){
// 	for(var i =cat; i<= 20; i++ ){
// 		console.log(i)
		
// 	}
// 	return i
// }))

var cat = [];
cat.push(cat)
cat[0].push(1)
//console.log(cat[1])//what will this show?
	
	

















































