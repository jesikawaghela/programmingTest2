import * as infix from './infix';
import { myStack } from './stack';

export class InfixPostfix {
    
    private postfix:string;
    private stack : myStack<string>;

    infixExp(Infix:string): string{
        this.postfix =""
        this.stack = new myStack<string>()

        let eqArr = infix.toArray(Infix)
        eqArr.forEach(char => this.performOperation(char));

        this.popUntillNotEmpty()

        return this.postfix
    }
 private performOperation = (char) => {
        if (infix.isOperand(char)) { this.appendToResult(char) }

        else if (infix.isOpeningBracket(char)) { this.stack.push(char) }

        else if (infix.isClosingBracket(char)) { this.processClosingBracket() }

        else { this.processOperator(char) }
    }

    private processClosingBracket() {
        while (!this.stack.isEmpty() && !infix.isOpeningBracket(this.stack.peek())) this.appendToResult(this.stack.pop())
        this.stack.pop()
    }

    private processOperator(char) {
        while (!this.stack.isEmpty() && infix.higherPrecedence(char) <= infix.higherPrecedence(this.stack.peek())) {
            this.appendToResult(this.stack.pop())
        }
        this.stack.push(char)
    }

    private popUntillNotEmpty() { while (!this.stack.isEmpty()) this.appendToResult(this.stack.pop()) }

    private appendToResult(char) { this.postfix = this.postfix + char }
}
