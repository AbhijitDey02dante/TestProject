let arr=[
    {title:"post1" ,body:"this is post 1", current:Date.now()},
    {title:"post2" ,body:"this is post 2",current:Date.now()}
   ];
  
  
  function getPost(){ 
  setTimeout(()=>{
      let output=""
      arr.forEach((post)=>{
      output+=`<li>${post.title} ${post.body} created ${Math.floor((Date.now()-post.current)/1000)} seconds ago</li>`;
      })
      document.body.innerHTML=output;
    },1000)
  } 
  
   
  function createPost(obj){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{  
      arr.push({...obj, current:Date.now()});

      const error=false;
      if(!error)
       resolve();
      else
       reject("Something is wrong");
     },2000)
    })
  }
  
  
  function deletePost(){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
      if(arr.length>0){
       resolve(arr.pop().title);
      }
      else
       reject("Array is empty");
     },1000)
    })
  }
  
   
  createPost({title:"post3", body:"this is post 3"})
  .then(()=>{
    getPost();
    deletePost().then(getPost)
  })
  
  .catch((error)=>console.log(error))