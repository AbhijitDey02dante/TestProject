// //function call using call
// function test(){
// 	console.log("test function");
// }
// test.call();
// //function call using apply
// function test(){

// 	console.log("test function");
// }
// test.apply();
// //function call using bind
// function test(){
// 	console.log("test function");
// }
// let bounding=test.bind();
// bounding();
// //function call binding object
// let Student={age:20};
// function studAge(){
// 	console.log(`Student age is ${this.age}`);
// }
// let boundAge=studAge.bind(Student);
// boundAge();
// //method currying using bind
// function multiply(x,y){
//     console.log(x*y);
// }
// let multiplyByTwo=multiply.bind(this,2);
// multiplyByTwo(5);
// //method currying via closure
// function multiplying(x,y){
//     return function(y){
//         console.log(x*y);
//     }
// }
// let multiplyingByTwo=multiplying(2);
// multiplyingByTwo(5);
let btn=document.querySelector('#clickMe');
function countButton(){
        let count=0
        btn.addEventListener('click',()=>{
        console.log('clicked Me    '+(++count));
    })
}
countButton();

window.addEventListener('DOMContentLoaded',()=>{
    console.log("DOM has loaded");
})