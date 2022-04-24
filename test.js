// class Node{
//     constructor(data){
//         this.data=data;
//         Node.left=null;
//         Node.right=null;
//     }
// }

// function Insert(node , value){                                           //insertion
//     if(node==undefined || node.data==undefined){
//         let newNode=new Node(value);
//         return newNode;
//     }
//     if(node.data<value){
//         node.right=Insert(node.right,value);
//     }
//     else{
//         node.left=Insert(node.left,value);
//     }
//     return node;
// }

// function findMin(node){
//     if(node.left==undefined)
//         return node.data;
//     return findMin(node.left);
// }
// function findMax(node){
//     if(node.right==undefined)
//         return node.data;
//     return findMax(node.right);
// }

// let root=new Node();
// root=Insert(root,10);
// root=Insert(root,20);
// root=Insert(root,8);
// root=Insert(root,2);
// root=Insert(root,17);
// root=Insert(root,16);
// root=Insert(root,14);
// console.log(findMin(root));
// console.log(findMax(root));

async function f1(){
    try{
        console.log('a');
        console.log('b');
        await new Promise((resolve,reject)=>{
            setTimeout(()=>{console.log('c');
            resolve();},1000)
        })
        await new Promise((resolve,reject)=>{
            setTimeout(()=>{console.log('d');
            resolve();},0)
        })
        console.log('e');
    }
    catch(error){
        console.log(error);
    }
}
f1();