
        //******        PART 178     ****** */

//Asynchronous Programming is Action in Javascript _ Stack Learner
// console.log('I am Line One');

// setTimeout(() => {
//     console.log(' I am Line two');
// }, 3000)
// setTimeout(() => {
//     console.log('I am Line treee');
// }, 0)
// console.log('I am Line four');
// setTimeout(() => {
//     console.log('I am Line five');
// }, 1000)




// setTimeout(() =>{
//     console.log('Hello javascript');
// }, 1000)


// function sayMyName(name){
//     let result
//     setTimeout(() => {
//         result = name
//         console.log('I have done...');
//     }, 3000);
//     return result
// }

// let output = sayMyName('Nurul Islam')
// console.log(output);


// function sayMyName(name){
  
//     setTimeout(() => {
//         console.log(name);
//     }, 3000);
   
// }

// let output = sayMyName('Nurul Islam')
// console.log(output);



        //*************     AJAX START      ************ */

        //********      PART 185        ********* */


// const xhr = new XMLHttpRequest()
// xhr.open('get', 'https://jsonplaceholder.typicode.com/users')

// xhr.onreadystatechange = function (e){
//     if(xhr.readyState === 4){
//         if(xhr.status === 200){
//             let users = JSON.parse(xhr.response)
//             console.log(users);
//         }else{
//             console.log(xhr.status);
//         }
//     }
// }

// xhr.send()


// function getRequest(url, callback){
//     const xhr = new XMLHttpRequest()
//     xhr.open('get', url)

//     xhr.onreadystatechange = function (e){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 let response = JSON.parse(xhr.response)
//                 callback(null, response)
//                 //console.log(users);

//             }else{
//                 // console.log(xhr.status);
//                 callback(xhr.status, null)
//             }
//         }
//     }

//     xhr.send()

// }

// getRequest('https://jsonplaceholder.typicode.com/users', (err, res) =>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(res);
//         // res.forEach(r => alert(r.name) )
//     }
// })

// getRequest('https://jsonplaceholder.typicode.com/posts', (err, res) =>{
//     if(err){
//         console.log(err);
//     }else{
//         // console.log(res);
//         res.forEach(r => console.log(r.title))
//     }
// })




        //************    PART 186   ************ */

// let arr = [1, 2, 3, 4]

// let sqrArr = arr.map(v => v * v)
// console.log(sqrArr);

// function asynMap(arr, cb){
//         return arr.map(v => {
//                 // setTimeout(cb.bind(null, v), 0)
//                 setTimeout(() => cb(v), 0)
//         })
// }

// let qbArr = asynMap(arr, v => {
//         console.log(v);
// })
// console.log(qbArr);


        //********************   PART 187   ******************** */



// function getRequest(url, callback){
//     const xhr = new XMLHttpRequest()
//     xhr.open('get', url)

//     xhr.onreadystatechange = function (e){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 let response = JSON.parse(xhr.response)
//                 callback(null, response)
//                 //console.log(users);

//             }else{
//                 // console.log(xhr.status);
//                 callback(xhr.status, null)
//             }
//         }
//     }

//     xhr.send()

// }

// const BASE_URL = 'https://jsonplaceholder.typicode.com'

// getRequest(`${BASE_URL}/posts/1`, (err, res) => {
//         if(err){
//                 throw new Error('Error Occurred')
//         }

//         let {userId} = res

//         getRequest(`${BASE_URL}/users/${userId}`, (err, res) => {
//                 if(err){
//                         throw new Error('Error Occurred')
//                 }

//                 getRequest(`${BASE_URL}/posts/1/comments/${res.id}`, (err, res) =>{
//                         if(err){
//                                 throw new Error('Error Occurred')
//                         }
//                         console.log(res);
//                 })
//         })
// })




        //********************   PART 188   ******************** */


// Promise 

// let p1 = new Promise((resolve, reject) => {

//         setTimeout(resolve, 5000, 'one')
// })


// let p2 = new Promise((resolve, reject) => {

//         setTimeout(resolve, 3000, 'Two')
// })


// // console.log(p1);
// // console.log(p2);
// p1.then((v) => {
//         console.log(v);
// })
// p2.then((v) => {
//         console.log(v);
// })




// function getIphone(isPassed){

//         return new Promise((resolve, reject) => {
//                 setTimeout(() =>{
//                         if(isPassed){
//                                 resolve('I have got an I Phone')
//                         }else{
//                                 reject(new Error('You have Failed'))
//                         }
//                 }, 2000)
//         })

// }

// // console.log(getIphone(false));


// getIphone(false)
// .then(res => {
//         console.log(res);
// })
// .catch((e) => {
//         console.log(e.message);
// })



// function getGifts(isGifts){

//         return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                         if(isGifts){
//                                 resolve('I Got a gift')
//                         }else{
//                                 reject(new Error('please try again'))
//                         }
//                 }, 5000)
//         })
// }

// getGifts(false)
// .then(res =>{
//         console.log(res);
// }).catch((e) =>{
//         console.log(e.message);
// })
