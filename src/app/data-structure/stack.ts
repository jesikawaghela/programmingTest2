export class myStack<data> {

    private myArray = [];
    private top = -1

    public push(data) {
        this.top++
        this.myArray[this.top] = data
    }

    public pop() {
        if (this.isEmpty()) return null
            const data = this.peek();
            this.myArray.splice(this.top, 1);
            this.top--;
            return data
    }
    public isEmpty() {
        return this.top == -1
    }
    public peek() {
        return this.myArray[this.top];
    }
    public printStack() {
        var str = "";
        for (var i = 0; i < this.myArray.length; i++)
            str += this.myArray[i] + " ";
        return str;
    }
}
