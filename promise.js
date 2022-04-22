let arr=[
    {title:"post1" ,body:"this is post 1", lastActivity:Date.now()},
    {title:"post2" ,body:"this is post 2",lastActivity:Date.now()}
];

function getPost(){
    setTimeout(()=>{
        let output=""
        arr.forEach((post)=>{
            output+=`<li>${post.title} ${post.body} created ${Math.floor((Date.now()-post.lastActivity)/1000)} seconds ago</li>`;
        })
        document.body.innerHTML=output;
    },1000)
}

let mainFunction = async ()=>{
        let createPost = (obj)=>{ return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                arr.push({...obj, lastActivity:Date.now()})
                resolve(arr[arr.length-1]);
            },1000)
        })
    }

    let deletePost = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(arr.length>0){
                resolve(arr.pop().title);
            }
            else
                reject("Array is empty");

        },3000)
    })

    let promise1 = await createPost({title:"post3",body:"This is post 3"})
    console.log('added',arr);
    getPost();
    await deletePost;
    console.log('deleted',arr);
    getPost();
}
mainFunction().then(()=>console.log('done'));

// function createPost(obj){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             arr.push({...obj, lastActivity:Date.now()});
//             const error=false;

//             if(!error){
//                 resolve(arr[arr.length-1]);
//             }
//             else
//                 reject("Something is wrong");

//         },2000)

//     })
// }

// function deletePost(){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//       if(arr.length>0){
//        resolve(arr.pop().title);
//       }
//       else
//        reject("Array is empty");
//      },1000)
//     })
//   }

// function updateLastUserActivityTime(){
//     return new Promise((resolve,reject)=>{
//         console.log('check');
//         setTimeout(()=>{
//         if(arr.length>0){
//             updateTime();
//             resolve(arr);
//         }
//         else
//             reject("Error updating time");
//         },1000)
//     })
// }
// function updateTime(){
//     for(let i=0;i<arr.length;i++){
//         arr[i].lastActivity=new Date().getTime();
//     }
// }



// let promise1 = createPost({title:"post3",body:"This is post 3"})
// .then(()=>{
//     updateLastUserActivityTime().then(()=>{
//         getPost();
//         deletePost().then(()=>{
//             getPost();
//         })
//     });
// });
// let promise2=Promise.resolve('resolved');
// let promise3=10;
// let promise4=new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,'Timed Out')});
// let promise5=fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json());

// Promise.all([promise1,promise2,promise3,promise4,promise5])
// .then((value)=>console.log(value));