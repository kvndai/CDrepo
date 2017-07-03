function insertAtPos(arr,insert,num){
	arr[num]=insert;
	return arr;
}
//console.log(insertAtPos([1,2,3,4], 'dojo', 2))

function delAtPos(arr, num){
	for(var x=num; x<arr.length; x++){
		arr[x]=arr[x+1];
	}
	arr[arr.length-1] = 0;
	return arr;
}

//console.log(delAtPos([1,2,3,4],2))

function findValInArr(arr, char){
	for(var x=0; x<arr.length; x++){
		if(arr[x]===char){
			return x;
		}
	}
	return 'not found'
}

//console.log(findValInArr([1,2,3,'f'],'f'))

function reverseArray(arr){
	var arrRet=[];
	for(var x=1; x<=arr.length; x++){
		arrRet[x-1]=arr[arr.length-x];
	}
	return arrRet;
}
//console.log(reverseArray(['dojo','not','hello', 'goodbye']))

function Car(){

}

Car.prototype.drive = function(){
	console.log('vroom');
};

var benz = new Car();

//benz.drive()

function Rectangle(width, height){
	this.width=width;
	this.height=height;
}

//var rect = new Rectangle(3,4);
//console.log(rect.width);
//console.log(rect.height);

Rectangle.prototype.area=function(){
	return this.width * this.height;
};

var rect = new Rectangle(3,4);
//console.log(rect.area())

function Square(length){
	this.width = this.height = length;
}

Square.prototype = Object.create(Rectangle.prototype);

var square=new Square(4);
console.log(square.area());

Square.prototype.diagonal = function(){
	return Math.sqrt(this.area()*2);
};