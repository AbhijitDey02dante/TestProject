console.log('person1: shows ticket');
console.log('person2: shows ticket');


const preMovie =async ()=>{
    let wifeBringingTheTickets=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket');
        },3000)});
    const getPopcorn = new Promise((resolve,reject)=>resolve('popcorn'));
    const addButter = new Promise((resolve,reject)=>resolve('butter'));
    const getColdDrinks = new Promise((resolve,reject)=>resolve('cold drink'));

    let ticket=await wifeBringingTheTickets;

    console.log(`wife: here's the ${ticket}`);
    console.log("husband: Great let's go in");
    console.log("wife: No, I'm hungry");

    let popcorn=await getPopcorn;
    console.log(`husband: Here's the ${popcorn}`);
    console.log(`wife: But it's plain, I need the buttered one`);

    let butter=await addButter;
    console.log(`husband: Here's your ${butter} on popcorn`);
    console.log(`wife: But I need a cold drink aswell`);

    let drinks=await getColdDrinks;
    console.log(`husband: Here's your ${drinks}`)
    console.log(`wife: Let go in, we are already late`);
    console.log('husband:***SIGHS***');

    return ticket;
}
preMovie().then((e)=>console.log(`person3: shows ${e}`));


console.log('person4: shows ticket');
console.log('person5: shows ticket');