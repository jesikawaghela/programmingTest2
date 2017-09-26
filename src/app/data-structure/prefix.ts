import * as infix from './infix';
import { InfixPostfix } from './infix-to-postfix';

export class Prefix {
     infixExp(Infix: string): string {
        let reverseInfix = infix.reverse(Infix)
        let eqArr = infix.toArray(reverseInfix)
        let size = eqArr.length
        for (let i = 0; i < size; i++) {
            const char = eqArr[i]
            if (infix.isOpeningBracket(char)) eqArr[i] = ")"
            if (infix.isClosingBracket(char)) eqArr[i] = "("
        }
        reverseInfix = eqArr.join("")

        let postfix = new InfixPostfix().infixExp(reverseInfix)

        let prefix = infix.reverse(postfix)
        return prefix
    }

}

