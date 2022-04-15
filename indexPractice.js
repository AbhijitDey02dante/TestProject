// let header = document.getElementById("main-header");
// let addItem = document.getElementById("addItem");
// let headerTitle = document.getElementById("header-title");
// let listItems = document.getElementsByClassName('list-group-item');

// listItems[2].style.backgroundColor='green';
// for(let i of listItems){
//     i.style.fontWeight='bold';
// }
// // header.style.borderBottom="2px solid black";
// headerTitle.style.borderBottom="2px solid black";
// addItem.style.fontWeight="bold";
// addItem.style.color="green";
// let testClassLi = document.getElementsByClassName('test-class');
// testClassLi[0].style.backgroundColor='red';
// let li=document.getElementsByTagName('li');
// for(let i of li){
//     i.style.backgroundColor='yellow';
// }

// let listItems = document.querySelector('.list-group-item');
// let listItem2nd = document.querySelector('.list-group-item:nth-child(2)');
// let listItem3rd = document.querySelector('.list-group-item:nth-child(3)');

// listItem2nd.style.backgroundColor='green';
// listItem3rd.style.display='none';


// let listItems = document.querySelectorAll('.list-group-item');
// listItems[1].style.color='green';
// let odd=document.querySelectorAll('.list-group-item:nth-child(odd)');
// for(let i of odd){
//     i.style.backgroundColor='green';
// }

let item=document.querySelector('#items');
//parentElement
item.parentElement.style.backgroundColor='#f4f4f4';
//lastelementchild
item.lastElementChild.style.color='red';
//lastchild
console.log(item.lastChild);
//create child
let newLi=document.createElement('li');
newLi.innerText='item6';
item.appendChild(newLi);
//firstelementchild
item.firstElementChild.style.backgroundColor='yellow';
//firstchild
console.log(item.firstChild);
//nextsibling
console.log(item.nextSibling);
//nextelementsibling
item.nextElementSibling.style.borderBottom='2px solid black';
//previoussibling
console.log(item.previousSibling);
//previouselementsibling
item.previousElementSibling.style.borderTop='2px solid black';
//create element
let newDiv=document.createElement('div');
//setAttribute
newDiv.setAttribute('title','test');
//createtextnode
let divText=document.createTextNode('Hello world');
newDiv.appendChild(divText);

//adding hello before item lister
let head=document.querySelector('#main-header .container');
let h1=document.querySelector('header h1');
head.insertBefore(newDiv,h1);
//adding hello world before list
item.parentElement.insertBefore(newDiv,item);
