const mainForm=document.querySelector('#mainForm');

const amount=document.querySelector('#amount');
const description=document.querySelector('#description');
const category=document.querySelector('#category');
const listItem=document.querySelector('#listItems');

window.addEventListener('DOMContentLoaded',async ()=>{
    try{
        let view = axios.get('https://crudcrud.com/api/4be0a0529b954b6d8d649692c3efe808/itemData');
        await view;
        view.then((res)=>{        
            res.data.forEach(element => {
                showUser(element);
            });
        })
    }
    catch(error){
        console.log(error);
    }
})


mainForm.addEventListener('submit',async (e)=>{
    e.preventDefault();

    if(amount.value!='' && description.value!=''){
        try{
            const obj={
                amount: amount.value,
                description: description.value,
                category: category.value
            }
            const id=obj.amount+obj.description+obj.category;
            
    
            //check for duplicate before adding
            let res = axios.get('https://crudcrud.com/api/4be0a0529b954b6d8d649692c3efe808/itemData')
            await res;
            res.then(async (res)=>{
                res.data.forEach(async (element) => {
                    const serverIdCheck=element.amount+element.description+element.category;
                    if(id==serverIdCheck){
                        await axios.delete(`https://crudcrud.com/api/4be0a0529b954b6d8d649692c3efe808/itemData/${element._id}`)
                        console.log(`Deleted id:${element._id}`);
                        delUser(id);
                    }
                });
    
                showUser(obj);
                await axios.post('https://crudcrud.com/api/4be0a0529b954b6d8d649692c3efe808/itemData',obj);
                console.log(`Successfully entered`);
    
            })
            amount.value='';
            description.value='';
        }
        catch(error){
            console.log(error);
        }
    }
})

//delete or edit users
listItem.addEventListener('click',async (e)=>{
    if(e.target.className=='delete')
    {
        const id=e.target.parentElement.id;
        delUser(id);  //screen Delete

        //Server delete
        delUserServer(id);
    }
    if(e.target.className=='edit'){
        const id=e.target.parentElement.id;
        try{
            let val=axios.get('https://crudcrud.com/api/4be0a0529b954b6d8d649692c3efe808/itemData')
            await val;
            val
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
            delUser(id);
            delUserServer(id);

        }
        catch(error){
            console.log(error);
        }
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
async function delUserServer(id){
    try{
        let res=axios.get('https://crudcrud.com/api/4be0a0529b954b6d8d649692c3efe808/itemData')
        await res;
        res
        .then((res)=>{
            res.data.forEach(async (element) => {
                const serverIdCheck=element.amount+element.description+element.category;
                if(id==serverIdCheck){
                    await axios.delete(`https://crudcrud.com/api/4be0a0529b954b6d8d649692c3efe808/itemData/${element._id}`)
                    console.log(`Deleted id:${element._id}`)
                }
            });
        })
    }
    catch(error){
        console.log(error);
    }
}
