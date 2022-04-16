let formBtn = document.querySelector('#addForm');
let listItems = document.querySelector('#items');     //list
let item = document.querySelector("#addItemInp");       //new item input

formBtn.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(item.value!='')
    {
        let newItemLi = document.createElement('li');
        newItemLi.className='list-group-item';
        newItemLi.append(document.createTextNode(item.value));

        let deleteBtn = document.createElement('button');
        deleteBtn.className='btn btn-danger float-right delete';
        deleteBtn.append(document.createTextNode('X'));
        newItemLi.append(deleteBtn);
        

        let editBtn = document.createElement('button');
        editBtn.className='mx-1 btn btn-info float-right edit';
        editBtn.append(document.createTextNode('Edit'));
        newItemLi.append(editBtn);

        listItems.appendChild(newItemLi);
        item.value='';
    }
});

listItems.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});