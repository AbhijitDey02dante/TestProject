const form=document.querySelector('#manForm');
const amount=document.querySelector('#amount');
const description=document.querySelector('#description');
const category=document.querySelector('#category');
const submit=document.querySelector('#submit');

const listExpense=document.querySelector('#list');

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/b31a5a740e1c45048c7e97fdbf734afb/appointmentData')
    .then(res => {
        res.data.forEach(element => {
        
                const li=document.createElement('li');
                li.id=element.description;
                const textNode=document.createTextNode(`${element.amount} * ${element.description} * ${element.category}`);
                li.append(textNode);
            
                const del=document.createElement('button');
                del.innerText=`Delete Expense`;
                del.setAttribute('type','button');
                del.className='delete';
                li.appendChild(del);
            
                const edit=document.createElement('button');
                edit.innerText=`Edit Expense`;
                edit.setAttribute('type','button');
                edit.className='edit';
                li.appendChild(edit);
            
                listExpense.appendChild(li);
            
        })        
    })
    .catch(err => console.log(err));
})
// for(let i=0;i<localStorage.length;i++)
// {
//     let objItem=JSON.parse(localStorage.getItem(localStorage.key(i)));
//     // console.log(objItem);
    
//     const li=document.createElement('li');
//     li.id=objItem.description;
//     const textNode=document.createTextNode(`${objItem.amount} * ${objItem.description} * ${objItem.category}`);
//     li.append(textNode);

//     const del=document.createElement('button');
//     del.innerText=`Delete Expense`;
//     del.setAttribute('type','button');
//     del.className='delete';
//     li.appendChild(del);

//     const edit=document.createElement('button');
//     edit.innerText=`Edit Expense`;
//     edit.setAttribute('type','button');
//     edit.className='edit';
//     li.appendChild(edit);

//     listExpense.appendChild(li);

// }


submit.addEventListener('click',(e)=>{
    e.preventDefault();

    if(amount.value!='' && description.value!=''){
        if(localStorage.getItem(description.value))
        {
            delUser(description.value);
        }
        


        const li=document.createElement('li');
        li.id=description.value;
        const textNode=document.createTextNode(`${amount.value} * ${description.value} * ${category.value}`);
        li.append(textNode);

        const del=document.createElement('button');
        del.innerText=`Delete Expense`;
        del.setAttribute('type','button');
        del.className='delete';
        li.appendChild(del);

        const edit=document.createElement('button');
        edit.innerText=`Edit Expense`;
        edit.setAttribute('type','button');
        edit.className='edit';
        li.appendChild(edit);

        listExpense.appendChild(li);

        let expenseObj={amount:amount.value,
                        description:description.value,
                        category:category.value}

        //pushing data
        axios.post('https://crudcrud.com/api/b31a5a740e1c45048c7e97fdbf734afb/appointmentData',expenseObj)
        .then(resolve => console.log(resolve.data))
        .catch(err => console.log(err));

        amount.value='';
        description.value='';
    }
})


listExpense.addEventListener('click',(e)=>{
    if(e.target.className=='delete')
    {
        delUser(e.target.parentElement.id);
    }
    if(e.target.className=='edit')
    {
        let idEdit=e.target.parentElement.id;
        let editItem=JSON.parse(localStorage.getItem(idEdit));
        amount.value=editItem.amount;
        description.value=editItem.description;
        category.value=editItem.category;
        delUser(idEdit);
    }
})


function delUser(userId){
    const delItem = document.getElementById(userId);
    delItem.remove();
    localStorage.removeItem(userId);
}