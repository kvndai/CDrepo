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
//var node_1 = new node(1)
//var node_2 = new node(2)
//var node_3 = new node(3)

myLinkedList.addNode(1)
myLinkedList.addNode(2)
myLinkedList.addNode(3)
// myLinkedList.head=node_1
// node_1.next = node_2
// node_2.next = node_3
//node_1.next = node_2

//console.log(myLinkedList.head)

function LinkedLists(){
	this.head=null;
}

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