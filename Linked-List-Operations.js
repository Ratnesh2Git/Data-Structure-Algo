class Node {
    constructor(val) {
        this.nodeValue = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length+=1;
        return this;
    }
    traverse() {
        let currentNode = this.head;
        while(currentNode) {
            console.log('item is', currentNode.nodeValue);
            currentNode = currentNode.next;
        }
    }

    pop() {
            let currentNode = this.head;
            let lastNode = this.tail;
        if(this.head) {
            if(currentNode.next === null) {
                this.head = null;
                this.tail = null;
            } else {
            while(currentNode.next != this.tail) {
                currentNode = currentNode.next;
            }
            currentNode.next = null;
            this.tail = currentNode;
            }
           
        } else {
            return 'there is no node into linked list';
        }
        this.length-=1;
        return lastNode;
    }

    shift() {
        let currentNode = this.head;
        if(this.head) {
            this.head = this.head.next;
            this.length-=1;
        } else {
            return null;
        }
        return currentNode;
    }

    unshift(val) {
        let newNode = new Node(val);
        if(this.head) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length+=1;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) {
            return 'Invalid Index';
        }
        let current = this.head;
        let currentIndex = 0;
        while(currentIndex != index) {
            current = current.next;
            currentIndex+=1;
        }
        return current;
    }

    set(index, value) {
        let indexNode = this.get(index);

        if(indexNode) {
            indexNode.nodeValue = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if(index<0 || index > this.length) {
            return 'index out of bound';
        }
        if(index === this.length) {
            return !!this.push(value);
        }
        if(index === 0) {
            return !!this.unshift(value);
        }
        let newNode = new Node(value);
        let prevNode = this.get(index-1);
        let nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = nextNode;
        this.length+=1;
        return this;
        
    }

    remove(index) {
        if(index < 0 || index >= this.length) {
            return 'Index out of office';
        }
        if(index === 0) {
            return this.shift();
        }
        if(index === this.length-1) {
            return this.pop();
        }

        let prevNode = this.get(index-1);
        let nextNode = prevNode.next;
        prevNode.next = nextNode.next;
        this.length-=1;
        return nextNode;
    }

    reverse() {
        if(this.length === 0) {
            return 'there is no linked list to reverse';
        }
        if(this.length === 1) {
            return this;
        }

        let tempNode = this.tail;
        this.tail = this.head;
        this.head = tempNode;

        let prevNode = this.tail;
        let currentNode = this.tail.next;
        this.tail.next = null;

        while(currentNode !== null) {
            let nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
                      
        }
        return this;
        
    }

    
}

let newList1 = new LinkedList();
newList1.push(34);
newList1.push(78);
newList1.push(67);
newList1.push(23);
newList1.push(12);
newList1.push(09);
newList1.push(66);
console.log('traversing Linked List ----->');
newList1.traverse();
console.log('length is', newList1.length);
console.log('popped item is', newList1.pop().nodeValue); 
console.log('traversing Linked List ----->');
newList1.traverse();
console.log('length is', newList1.length);
console.log('shifted item is', newList1.shift().nodeValue); 
console.log('traversing Linked List ----->');
newList1.traverse();
console.log('length is', newList1.length);
newList1.unshift(778);
console.log('traversing Linked List ----->');
newList1.traverse();
newList1.unshift(712);
console.log('traversing Linked List ----->');
newList1.traverse();
console.log(newList1.get(3));
console.log(newList1.set(3, 10));
console.log('traversing Linked List ----->');
newList1.traverse();
console.log('length is', newList1.length);
newList1.insert(3, 889);
console.log('traversing Linked List ----->');
newList1.traverse();
newList1.insert(0, 900);
console.log('traversing Linked List ----->');
newList1.traverse();
console.log('length is', newList1.length);
newList1.remove(4);
console.log('traversing Linked List ----->');
newList1.traverse();
console.log('length is', newList1.length);
newList1.remove(0);
console.log('traversing Linked List ----->');
newList1.traverse();
console.log('length is', newList1.length);
newList1.reverse();
console.log('traversing Linked List ----->');
newList1.traverse();
console.log('length is', newList1.length);
