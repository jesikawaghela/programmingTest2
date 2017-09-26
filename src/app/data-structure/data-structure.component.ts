import { Component, OnInit } from '@angular/core';
import { myStack } from './stack';
import { ListQueue } from './queue';
import { ReverseString } from './reverse-string'
import { PostFix } from './postfix';
import { LinkedList } from './linked-list';
import { Prefix } from './prefix';
import { InfixPostfix } from './infix-to-postfix';

@Component({
  selector: 'app-data-structure',
  templateUrl: './data-structure.component.html',
  styleUrls: ['./data-structure.component.css']
})
export class DataStructureComponent implements OnInit {

  stack = new myStack;
  Queue = new ListQueue();
  ReverseString = new ReverseString;
  infixToPostfix = new PostFix();
  linkedList = new LinkedList;
  infixPostfix = new InfixPostfix;
  prefix = new Prefix;
  exp: any;


  constructor() { 

    //stack output
    console.log("stack Output");
    this.stack.push(1);
    this.stack.push(2);
    this.stack.push(3);
    this.stack.push(4);
    console.log(this.stack.printStack());  
    this.stack.pop();
    console.log(this.stack.printStack());

    console.log("-------------------------------------------------");
    

    //reverse string
    console.log("reverse string");
    var result = this.ReverseString.reverse('programming');
    console.log(result);

    console.log("-------------------------------------------------");

    //queue output
    console.log("Queue Output");
    this.Queue.enqueue(100);
    this.Queue.enqueue(200);
    this.Queue.enqueue(300);
    this.Queue.enqueue(400);
    this.Queue.enqueue(500);
    this.Queue.enqueue(600);
    this.Queue.dequeue();
    console.log(this.Queue); 

    console.log("-------------------------------------------------");

    //infix to postfix
    console.log("infix to postfix");
    this.exp = "a+b";
    console.log(this.infixToPostfix.infixToPostfix(this.exp)); 

    console.log("-------------------------------------------------");

    //Infix To prefix
    console.log("Infix To Prefix");
    let exp1 = "a+b*(c*d)-i";
    console.log(this.prefix.infixExp(exp1));
    

    //infix to postfix
    console.log("Infix To Postfix"); 
    let exp = "a+b*(c*d)-i";
    console.log(this.infixPostfix.infixExp(exp));
    

    //linked list output
    console.log("Linked List");
    this.linkedList.insertAtStart(10);
    console.log(this.linkedList); 
    this.linkedList.insertAtEnd(20);
    console.log(this.linkedList);

  }
  ngOnInit() {
  }

}
