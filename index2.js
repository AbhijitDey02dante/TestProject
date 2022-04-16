const uName=document.querySelector('#name');
const email=document.querySelector('#email');
const btn=document.querySelector('.btn');
const list=document.querySelector('#users');
const msg=document.querySelector('.msg');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    
    if(uName.value!='' && email.value!=''){
        const li=document.createElement('li');
        li.innerText=`${uName.value} ${email.value}`;
        list.appendChild(li);
        uName.value='';
        email.value='';

        list.firstElementChild.style.backgroundColor="green";
        if(list.childNodes[1])
            list.childNodes[1].style.backgroundColor="yellow";
    }
    else{
        msg.innerText=`Please fill in the details`;
        msg.classList.add('error');

        setTimeout(()=>{
            msg.innerText='';
            msg.classList.remove('error');
        },3000);
    }
});