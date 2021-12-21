
    //**********    PART 191    ************ */

// async Awiat

// function promise (){
//     return Promise.resolve('Hello Bangladesh')
// }

// promise().then(v => {
//     console.log(v);
// })


//*************** */

//  async function test (){
//     return 'test'
//  }

// test().then(v => {
//     console.log(v);
// })




//******************* */

// let p1 = new Promise(resolve => {
//     setTimeout(resolve, 3000, 'Test Value')
// })

// async function myAsyncFunction(){
//     //p1.then(v => alert(v))

//     let v = await p1
//     console.log(v);
// }

// myAsyncFunction()



//******************** */


// async function fetchData(){

//     try {
        
//         let res = await fetch('https://jsonplaceholder.typicode.com/users')

//         let data = await res.json()
//         //console.log(data);
//         let names = data.map(u => u.name)
//         console.log(names);
//         } catch(e){
//             console.log(e.message);
//         }
// }

// fetchData()


let promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]

async function promiseAll (){
    let result = await Promise.all(promises)
    console.log(result);
}

promiseAll()




