import { Component, OnInit } from '@angular/core';
import { Stack } from './stack';
import { Queue } from './queue';

@Component({
  selector: 'app-data-structure',
  templateUrl: './data-structure.component.html',
  styleUrls: ['./data-structure.component.css']
})
export class DataStructureComponent implements OnInit {

  stack = new Stack;
  Queue = new Queue;

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

    //queue output
    console.log("Queue Output");
    this.Queue.enqueue(100);
    this.Queue.enqueue(200);
    console.log(this.Queue.printQueue());
    
    
  }

  ngOnInit() {
  }

}
