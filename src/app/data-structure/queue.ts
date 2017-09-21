export interface Queue {
    enqueue(data)
    dequeue()
    isEmpty()
    getFirst()
}

class Node {
    value: number;
    constructor(value: number) {
      this.value = value;
    }
  }

export class ListQueue implements Queue {
    private front: any
    private rear: any;

    enqueue(data) {
        const newNode = new Node(data)
        if (this.rear == null) {
            this.rear = newNode
            this.front = newNode
        } else {
            this.rear.next = newNode
            this.rear = newNode
        }
    }
    dequeue() {
        if (this.isEmpty()) return null
        const data = this.getFirst()
        this.front = this.front.next
        if (this.isEmpty()) this.rear = null
        return data
    }
    isEmpty(): boolean { return this.front == null }
    getFirst(){ return this.isEmpty() ? null : this.front.data }
}
// export class Queue {
    // myArray = [];
    // private front: Node;
    // private rear: Node;

    // public enqueue(data) {
    //     this.myArray.push(data);
    // }

    // public dequeue() {
    //     if (this.isEmpty())
    //         return this.myArray.shift();
    // }
    // private isEmpty() {
    //     return this.front == null;
    // }
    // public printQueue() {
    //     var str = "";
    //     for (var i = 0; i < this.myArray.length; i++)
    //         str += this.myArray[i] + " ";
    //     return str;
    // }
// }