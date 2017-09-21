import { Component, OnInit } from '@angular/core';
import { Stack } from './stack';
import { ListQueue } from './queue';
import { ReverseString } from './reverse-string'

@Component({
  selector: 'app-data-structure',
  templateUrl: './data-structure.component.html',
  styleUrls: ['./data-structure.component.css']
})
export class DataStructureComponent implements OnInit {

  stack = new Stack;
  Queue = new ListQueue();
  ReverseString = new ReverseString;


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

    //reverse string
    this.ReverseString.reverse('programming');
    console.log(this.ReverseString.printStack());

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
  }

  ngOnInit() {
  }

}
