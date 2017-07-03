//linked list addBack
function LL(){
	this.head=null;
}

function node(val){
	this.val=val;
	next=null;
}

LL.prototype.addBack = function(val){
	//check if head exists
	var tempNode= new node(val);

	if(this.head==null){
		//create the head
		this.head=tempNode;
	}else{
		//find the current last node
		curr=this.head;
		while(curr.next){
			curr=curr.next
		}
		//link the value sent in as the next node
	curr.next=tempNode;
	}
}

//var myLL = new LL()
//myLL.addBack(3);
//myLL.addBack(4);
//myLL.addBack(3);

//console.log(myLL)

function HLL(){
	head=null
}

function HNode(val){
	this.val=val
	this.next=null
}

HLL.prototype.addBack=function(data){
	tempNode=new HNode(data)
	//check if head exists
	if(this.head==null){
		//create head
		this.head=tempNode
	}else{
		var curr = this.head
		while(curr.next){
			curr=curr.next
		}
		curr.next=tempNode
	}
}

//var testLL = new HLL();
//testLL.addBack(2);
//testLL.addBack(3);
//console.log(testLL);

function LLEx(){
	head=null
}
function nodeLLEx(data){
	this.data=data
	this.next=null
}
LLEx.prototype.addBack = function(data){
	tempNode= new nodeLLEx(data)
	if(this.head==null){
		this.head=tempNode
	}else{
		var curr=this.head
		while(curr.next){
			curr=curr.next
		}
		curr.next=tempNode
	}
}
LLEx.prototype.addFront = function(val){
	var temp_node=new nodeLLEx(val)

	if(this.head==null){
		//create the head
		this.head=temp_Node
	}else{
		//store the head in a temp
		var tempHead=this.head
		//set the head to tempNode
		this.head=temp_node
		//set next to tempHead
		this.head.next= tempHead
	}
}

var newLinkedList = new LLEx()
newLinkedList.addBack(2)
newLinkedList.addBack(3)
newLinkedList.addBack(4)
newLinkedList.addBack(5)
newLinkedList.addFront("hello")
console.log(newLinkedList)
tempCurr=newLinkedList.head
// while(tempCurr!=null){
// 	console.log(tempCurr)
// 	tempCurr=tempCurr.next
// }