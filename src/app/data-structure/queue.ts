export class Queue {
    myArray = [];

    public enqueue(data) {
        this.myArray.push(data);
    }

    public dequeue() {
        if (this.isEmpty())
            return this.myArray.shift();
    }
    private isEmpty() {
        return this.myArray.length == 0;
    }
    public printQueue() {
        var str = "";
        for (var i = 0; i < this.myArray.length; i++)
            str += this.myArray[i] + " ";
        return str;
    }
}