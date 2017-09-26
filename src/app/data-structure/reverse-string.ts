export class ReverseString {
    private myArray = ["p","r","o"];
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

        public reverse(str) {
            let n = this.myArray.length, i;
           for(i=0; i<n; i++){
               this.push(this.myArray[i]);
           }
           for(i=0; i<n; i++){
               this.pop();
           }
            // this.len = string.length;
            // for(let i = 0; i < this.len; i++)
            //     this.push(string)
            // for(let i = 0; i<this.len; i++)
            //     this.pop();
        }
}
