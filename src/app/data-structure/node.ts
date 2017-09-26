export class Node {
    private data:any;
    private node: any;

    constructor(_data:any, _node:any){
        this.data = _data;
        this.node = _node;
    }

    getData(){
        return this.data;
    }

    setData(_data:any){
        this.data=_data;
    }

   getNode(){
       return this.node;
    }

    setNode(_node:any){
        this.node = _node;
    }

    
}

