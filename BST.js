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

function preOrderR(node){                //Using recursion
    if(node==undefined)
        return;
    console.log(node.data);
    preOrderR(node.left);
    preOrderR(node.right);
    
}
function preOrderT(node){            //Using Iteration
    if(node==undefined)
        return;
    let arr=[];
    arr.push(node); 
    while(arr.length>0){
        if(node!=undefined && node.data!=undefined)
            console.log(node.data);
        if(node!=undefined && node.data!=undefined){
            if(node.right!=undefined)
                arr.push(node.right);
            node=node.left;
        }
        else{
            node=arr.pop();
        }
    }
}



// let node1=new Node();
// node1=Insert(node1,10);
// node1=Insert(node1,23);
// node1=Insert(node1,7);
// node1=Insert(node1,5);
// node1=Insert(node1,15);
// node1=Insert(node1,16);
 
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);
root.right.left.left = new Node(7);
root.right.left.right = new Node(8);


// console.log(search(node1,11));
// preOrderR(root);
preOrderT(root);