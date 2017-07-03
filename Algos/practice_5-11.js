//linked list
function LL(){
	this.head=null
}
//node function
function Node(dat){
	this.val=dat
	this.next=null
}

//addback function
LL.prototype.addback = function(dat){
	var nod = new Node(dat)
	//check if there is already a head
	if(!this.head){
		//create head
		this.head=nod
	}else{
		//add node to back of the list
		var curr=this.head
		while(curr.next){
			curr=curr.next
		}
		curr.next=nod
	}
}

LL.prototype.addfront = function(dat){
	var nod_temp = new Node(dat)
	//check if there is already a head
	if(this.head==null){
		this.head=nod_temp
	}else{
		//create a temp var to hold the head so we can set the next to head
		//var old_head = this.head
		//this.head=nod_temp
		//nod_temp.next=old_head
		nod_temp.next=this.head
		this.head=nod_temp
	}
}

LL.prototype.remove=function(val){
	var curr=this.head
	if(!this.head){
		return null
	}else if(curr.val === val){
		this.head=curr.next
	}else{
		while(curr.next){
			if(curr.next.val===val){
				curr.next=curr.next.next
			}
		}
	}
}

LL.prototype.max=function(){
	var max=this.head.val
	var curr = this.head
	while(curr.next){
		if(curr.val>max){
			max=curr.val
		}
		curr=curr.next
	}
	return max
}
var newLL = new LL()
newLL.addback(2)
newLL.addback("Holly")
newLL.addback("Yes")
newLL.addback(3)
console.log(newLL.max())
newLL.addfront("Toodles")
newLL.remove(2)
console.log(newLL)
