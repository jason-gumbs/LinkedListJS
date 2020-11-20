class ListNode {
    constructor(data) {
        this.data = data
        this.nextElement = null                
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }  
    //Insertion At Head  
  insertAtHead(newData) {
    let tempNode = new ListNode(newData);
    tempNode.nextElement = this.head;
    this.head = tempNode;
    return this; //returning the updated list
  }
    printList() {
      if (this.head == null) {
      console.log("Empty List");
      return false;
    } else {
      // console.log(temp != null)
      let temp = this.head;
      while (temp != null) {
        process.stdout.write(String(temp.data));
        process.stdout.write(" -> ");
        temp = temp.nextElement;
      }
      // console.log("null");
      return ;
         }
    }
     setHead(newHead) {
    this.head = newHead;
    return this;
  }
     getHead() {
    return this.head;
  }
  

}


let list = new LinkedList();
list.insertAtHead(98)
list.insertAtHead(5)
list.insertAtHead(90)
// let node2 = new ListNode(5)
// node1.next = node2
let temp = list.head;


while (temp != null) {
        process.stdout.write(String(temp.data));
        process.stdout.write(" -> ");
        temp = temp.nextElement;
      }
        let previousNode = null;
        let currentNode = list.getHead(); // The current node
        let nextNode = null;

        while (currentNode != null) {
    nextNode = currentNode.nextElement;
    currentNode.nextElement = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
    console.log(previousNode)
  }
  list.setHead(previousNode)

      list.printList()
