console.log('person1: shows ticket');
console.log('person2: shows ticket');

const wifeBringingTheTickets = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket');
        },3000)
    })
}

const getPopcorn = wifeBringingTheTickets().then((e)=>{
    console.log(`wife: here's the ${e}`);
    console.log("husband: Great let's go in");
    console.log("wife: No, I'm hungry");
    return new Promise((resolve,reject)=>{
        resolve(`popcorn`);
    })
});

const getButter = getPopcorn.then((p)=>{
    console.log(`husband: Here's the ${p}`);
    console.log(`wife: But it's plain, I need the buttered one`);
    return new Promise((resolve,reject)=>{
        resolve('butter');
    })
});

getColdDrinks = getButter.then((b)=>{
    console.log(`husband: Here's your ${b} on popcorn`);
    console.log(`wife: I need cold drink aswell`);
    console.log(`husband: Whaaaaaaaaaaaaaaat`);
    return new Promise((resolve,reject)=>{
        resolve('cold drink');
    })
});

getColdDrinks.then((e)=>{
    console.log(`husband: Here's your ${e}`)
    console.log(`wife: Let go in, we are already late`);
    console.log('husband:***SIGHS***');
    console.log('person3: shows ticket');
})

console.log('person4: shows ticket');
console.log('person5: shows ticket');