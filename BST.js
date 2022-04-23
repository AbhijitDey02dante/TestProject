class Node{
    constructor(data){
        this.data=data;
        Node.left=null;
        Node.right=null;
    }
}

function Insert(node , value){                                           //insertion
    if(node==undefined || node.data==undefined){
        let newNode=new Node(value);
        return newNode;
    }
    if(node.data<value){
        node.right=Insert(node.right,value);
    }
    else{
        node.left=Insert(node.left,value);
    }
    return node;
}


function search(node,value){                                            //search
    if(node==undefined || node.data==undefined){
        return false;
    }
    else{
        if(node.data==value)
            return true;
        if(node.data<value){
            return search(node.right,value);
        }
        else{
            return search(node.left,value);
        }
    }
}



let node1=new Node();
node1=Insert(node1,10);
node1=Insert(node1,23);
node1=Insert(node1,7);
node1=Insert(node1,5);
node1=Insert(node1,15);
node1=Insert(node1,16);


console.log(search(node1,11));