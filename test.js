class Queue{
    constructor(size){
        this.queue=[];
        this.size=size;
        this.minPos=0;
        this.maxPos=0;
    }
    enqueue(val){                           //insert value
        if(this.maxPos<this.size)
        {
            this.queue[this.maxPos]=val;
            this.maxPos=this.maxPos+1;
        }
        else
        {
            console.log('Full');
        }
    }

    dequeue(){                               //remove value
        if(this.minPos<this.maxPos)
        {
            let data=this.queue[this.minPos];
            this.queue[this.minPos]=undefined;
            this.minPos=this.minPos+1;
            return data;
        }
        else
            console.log('Empty');
    }

    peek(){                                 //check last element entered
        if(this.minPos<this.maxPos)
            return this.queue[this.maxPos-1];
        else
            console.log('Empty');
    }

    isEmpty(){                            //check if queue is empty
        if(!(this.minPos<this.maxPos))
            return true;
        return false;
    }

    isFull(){                                  //check if queue is full
        if(this.maxPos>=this.size)
            return true;
        return false;
    }

    display(){                                //display queue elements
        for(let i=this.minPos;i<this.maxPos;i++)
            console.log(this.queue[i]);
    }
}


class Stack{
    constructor(size){
        this.q1=new Queue(1000)
        this.q2=new Queue(1000)
        this.stArr=[];
        this.size=size;
    }
    push(val){
        if(this.stArr.length<this.size)
            this.q1.enqueue(val);
        else
            console.log('Stack is full');
    }
    pop(){
        if(!(this.q1.isEmpty())){
            let x=this.q1.dequeue();
            while(!(this.q1.isEmpty())){
                this.q2.enqueue(x);
                x=this.q1.dequeue();
            }
            while(!(this.q2.isEmpty()))
            {
                this.q1.enqueue(this.q2.dequeue());
            }
            return x;
        }
    }
    display(){
        this.q1.display();
    }

}
let st1=new Stack(3);
// st1.display(4);