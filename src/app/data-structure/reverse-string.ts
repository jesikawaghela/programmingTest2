export class ReverseString {
    private myArray = [];
    private reverseStack = [];
    len: any;
    
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

        public reverse(data) {
            // this.len = data.length;
            for(let i = 0; i < this.reverseStack.length; i++)
                this.push(data)
            for(let i = 0; i<this.reverseStack.length; i++)
                this.pop();
        }
        public printStack() {
            var str = "";
            for (var i = 0; i < this.reverseStack.length; i++)
                str += this.reverseStack[i] + " ";
            return str;
        }
}
