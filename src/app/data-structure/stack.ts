export class Stack {

    myArray = [];

    public push(data) {
        this.myArray.push(data);
    }

    public pop() {
        if (this.isEmpty())
            return "stack is empty";
        return this.myArray.pop();
    }
    private isEmpty() {
        return this.myArray.length == 0;
    }
    private peek() {
        return this.myArray[this.myArray.length - 1];
    }
    public printStack() {
        var str = "";
        for (var i = 0; i < this.myArray.length; i++)
            str += this.myArray[i] + " ";
        return str;
    }
}
