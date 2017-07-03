function LinkedList(){
	this.head=null
	this.addNode = function(val){
		var myTempNode = new Node(val)
		if(this.head == null){
			this.head = myTempNode
		}else{
			var current=this.head

			//while current is not null
			while(current.next){
				current = current.next
			}
			current.next=myTempNode
		}
	}
}

function Node(val){
	this.val=val
	this.next=null
}

var myLinkedList = new LinkedList()

//adding function to LinkedList prototype
LinkedList.prototype.addBack = function(val){
		var myTempNode = new Node(val)
		if(this.head == null){
			this.head = myTempNode
		}else{
			var current=this.head

			//while current is not null
			while(current.next){
				current = current.next
			}
			current.next=myTempNode
		}
	}



LinkedList.prototype.reverse=function(){
	var node=this
	var previous=null

	while(node){
		//save next or you lose it
		var save=node.next
		//reverse pointer
		node.next=previous
		//increment previous to current node
		previous = node
		//increment node to next node or null at enbd of list
		node = save

	}
	return previous; //change the list head
}

myLinkedList.addBack(1)
myLinkedList.addBack('bob')
myLinkedList.addBack(3)
myLinkedList.addBack('holly')
myLinkedList.addBack('5')
//console.log(myLinkedList)
myLinkedList.reverse()
console.log(myLinkedList.head.val)
