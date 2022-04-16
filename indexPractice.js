let formBtn = document.querySelector('#addForm');
let listItems = document.querySelector('#items');     //list
let item = document.querySelector("#addItemInp");       //new item input
let description = document.querySelector("#addDescription");       //new item input
const search=document.querySelector('#filter');
let arr=[];

for(let i=0;i<localStorage.length;i++){
    let storedItemObj = JSON.parse(localStorage.getItem(localStorage.key(i)));
    arr.push(storedItemObj);
    if(storedItemObj){
        let newItemLi = document.createElement('li');
        newItemLi.className='list-group-item';
        newItemLi.append(document.createTextNode(storedItemObj.item));
    
        let deleteBtn = document.createElement('button');
        deleteBtn.className='btn btn-danger float-right delete';
        deleteBtn.append(document.createTextNode('X'));
        newItemLi.append(deleteBtn);
        
    
        let editBtn = document.createElement('button');
        editBtn.className='mx-1 btn btn-info float-right edit';
        editBtn.append(document.createTextNode('Edit'));
        newItemLi.append(editBtn);
    
        
        let newDescription = document.createElement('p');
        newDescription.className='description font-italic';
        newDescription.append(document.createTextNode(storedItemObj.description));
        newItemLi.append(newDescription);
    
        listItems.appendChild(newItemLi);
    }

}


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

        
        let newDescription = document.createElement('p');
        newDescription.className='description font-italic';
        newDescription.append(document.createTextNode(description.value));
        newItemLi.append(newDescription);

        listItems.appendChild(newItemLi);

        let newItemObj ={
            item: item.value,
            description: description.value
        }

        arr.push(newItemObj);
        for(let i in arr){
            localStorage.setItem(i,JSON.stringify(arr[i]));
        }


        item.value='';
        description.value='';

    }
});

listItems.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

search.addEventListener('keyup',(e)=>{
    let inp=search.value.toLowerCase();
    let itemItr=listItems.querySelectorAll('li');
    Array.from(itemItr).forEach((item)=>{
        let itemName=item.firstChild.textContent.toLowerCase();
        let lastItem=item.lastChild.textContent.toLowerCase();
        if(itemName.indexOf(inp)!=-1 || lastItem.indexOf(inp)!=-1)
        {
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
});