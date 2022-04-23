const mainForm=document.querySelector('#mainForm');

const amount=document.querySelector('#amount');
const description=document.querySelector('#description');
const category=document.querySelector('#category');
const listItem=document.querySelector('#listItems');

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/815aeba70c69454ba137e8fddb6e9a74/itemData')
    .then((res)=>{
        res.data.forEach(element => {
            showUser(element);
        });
    })
    .catch(error=>{console.log(error);})
})


mainForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(amount.value!='' && description.value!=''){
        const obj={
            amount: amount.value,
            description: description.value,
            category: category.value
        }
        const id=obj.amount+obj.description+obj.category;
        // if(delUserServer(id))
        //     delUser(id);
        

        //check for duplicate before adding
        axios.get('https://crudcrud.com/api/815aeba70c69454ba137e8fddb6e9a74/itemData')
        .then((res)=>{
            res.data.forEach(element => {
                const serverIdCheck=element.amount+element.description+element.category;
                if(id==serverIdCheck){
                    delUser(id);
                    axios.delete(`https://crudcrud.com/api/815aeba70c69454ba137e8fddb6e9a74/itemData/${element._id}`)
                    .then((res)=>console.log(`Deleted id:${element._id}`))
                    .catch(error=>console.log(error))
                }
            });


            showUser(obj);
            axios.post('https://crudcrud.com/api/815aeba70c69454ba137e8fddb6e9a74/itemData',obj)
            .then((res)=>console.log(`Successfully entered`))
            .catch((error)=>console.log(error));

        })
        .catch(error=>{console.log(error);})



        // amount.value='';
        // description.value='';
    }
})

//delete or edit users
listItem.addEventListener('click',(e)=>{
    if(e.target.className=='delete')
    {
        const id=e.target.parentElement.id;
        delUser(id);  //screen Delete

        //Server delete
        delUserServer(id);
    }
    if(e.target.className=='edit'){
        const id=e.target.parentElement.id;
        
        axios.get('https://crudcrud.com/api/815aeba70c69454ba137e8fddb6e9a74/itemData')
        .then((res)=>{
            res.data.forEach(element => {
                const serverIdCheck=element.amount+element.description+element.category;
                if(id==serverIdCheck){
                    amount.value=element.amount;
                    description.value=element.description;
                    category.value=element.category;
                }
            });
        })
        .catch(error=>{console.log(error);})

        delUser(id);
        delUserServer(id);
    }


})



//show user based on obj value
function showUser(obj){
    const li=document.createElement('li');
    li.id=`${obj.amount}${obj.description}${obj.category}`;
    const textNode=document.createTextNode(`${obj.description} is a type of ${obj.category} | costs: ${obj.amount}`);
    li.appendChild(textNode);

    const del=document.createElement('button');
    del.className='delete';
    del.innerText='Delete';
    del.setAttribute('type','button');
    li.appendChild(del);

    const edit=document.createElement('button');
    edit.className='edit';
    edit.innerText='Edit';
    edit.setAttribute('type','button');
    li.appendChild(edit);

    listItem.append(li);

}
//deletes from screen
function delUser(id){
    const del=document.getElementById(id);
    del.remove();
}

//deletes from server
function delUserServer(id){
    axios.get('https://crudcrud.com/api/815aeba70c69454ba137e8fddb6e9a74/itemData')
    .then((res)=>{
        res.data.forEach(element => {
            const serverIdCheck=element.amount+element.description+element.category;
            if(id==serverIdCheck){
                axios.delete(`https://crudcrud.com/api/815aeba70c69454ba137e8fddb6e9a74/itemData/${element._id}`)
                .then((res)=>console.log(`Deleted id:${element._id}`))
                .catch(error=>console.log(error))
            }
        });
    })
    .catch(error=>{console.log(error);})
}
