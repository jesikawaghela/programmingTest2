import { myStack } from './stack';

export class PostFix {

    private stack: myStack<string>;
    character: any;
    result: any;

    public Prec(ch)
	{
	    switch (ch)
	    {
	    case '+':
	    case '-':
	        return 1;
	 
	    case '*':
	    case '/':
	        return 2;
	 
	    case '^':
	        return 3;
	    }
	    return -1;
    }
    isOperand(c) {
        return /^[a-zA-Z0-9]+$/.test(c)
    }
    
    public infixToPostfix(str: string){
        this.stack = new myStack<CharacterData>()

        for (let i = 0; i <str.length; ++i)
	    {
	    	var c = str.charAt(i);
	    	
	         // If the scanned character is an operand, add it to output.
	        if (this.isOperand(c))
	            this.result += c;
	         
	        // If the scanned character is an '(', push it to the stack.
	        else if (c == '(')
	            this.stack.push(c);
	        
	        //  If the scanned character is an ')', pop and output from the stack 
	        // until an '(' is encountered.
	        else if (c == ')')
	        {
	            while (!this.stack.isEmpty() && this.stack.peek() != '(')
	                this.result += this.stack.pop();
	            
	            if (!this.stack.isEmpty() && this.stack.peek() != '(')
	                return "Invalid Expression"; // invalid expression                
	            else
	                this.stack.pop();
	        }
	        else // an operator is encountered
	        {
	            while (!this.stack.isEmpty() && this.Prec(c) <= this.Prec(this.stack.peek()))
	            this.result += this.stack.pop();
	            this.stack.push(c);
	        }
	 
        }
        while (!this.stack.isEmpty())
        this.result += this.stack.pop();
        return this.result;
    }
}
