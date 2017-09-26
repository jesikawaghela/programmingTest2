import { Node } from './node';

export class LinkedList {
    private start=null;
    private end=null;
    private size=0;
    nptr: any;

    isEmpty(){ return this.start == null}

    insertAtStart(val){
        this.nptr = new Node(val,null);
        if(this.start == null)
        {
            this.start = this.nptr;
            this.end = this.start;
        }
        else {
            this.nptr.setNode(this.start)
            this.start = this.nptr;
        }
     }

     insertAtEnd(val){
          this.nptr = new Node(val,null);
        if(this.start == null)
        {
            this.start = this.nptr;
            this.end = this.start;
        }
        else {
            this.nptr.setNode(this.start)
            this.end = this.nptr;
        }
     }
}


