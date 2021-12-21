    //********  192 + 192     ****** */

//     let asyncIterable = {
//         [Symbol.asyncIterator](){
//             let i = 0
//             return {
//                 next(){
//                     if(i < 5){
//                         return Promise.resolve({
//                             value: i++,
//                             done: false
//                         })
//                     } else{
//                         return Promise.resolve({
//                             value: true
//                         })
//                     }
//                 }
//             }
//         }
//     }

// let iterate = asyncIterable[Symbol.asyncIterator]();
// console.log(iterate.next());
// (async function(){
//     // let v = await iterate.next()
//     // console.log(v);
//     console.log(await iterate.next());
//     console.log(await iterate.next());
//     console.log(await iterate.next());
//     console.log(await iterate.next());
//     console.log(await iterate.next());
//     console.log(await iterate.next());
// })()



// (async function() {
//     for await (let v of asyncIterable){
//         console.log(v);
//     }
// })()




    //********  194     ****** */

// async Generators

async function* asyncGenerators(){
    let i = 0

    while(true) {
        if(i > 5) return
        yield await Promise.resolve(i++)
    }
}

;(async function(){
    for await(let v of asyncGenerators()){
        console.log(v);
    }
})()