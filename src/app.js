
//**********    PART 140    *************** */

// var name = 'Nurul Islam'
// var age = 23

// console.log('my name is ' + name + 'and i am ' + age + 'years');
// // console.log(`my name is ${name}, I am ${age}  years. I am ${age < 18 ?'not': ''} adult`);

// console.log(`Your Name Is ${name}, And your age Is ${age}, Years I am ${age < 18 ? 'not' : ''} adult`);

// console.log(name.padStart(10, 'n'));


//**********    PART 142    *************** */


// let add = (a, b) => a + b
// console.log(add(100, 100));

// let x = x => x * x
// console.log(x(10));


//**********    PART 143    *************** */

// let obj = {
//     name: 'Nurul Islam',
//     print: () =>{
//         console.log(`Hello, ${this.name}`);
//     }
// }
// obj.print()

//**********    PART 145   *************** */


// function sum(...rest){
    // let sum = 0

    // for(let i = 0; i<arguments.length; i++){
    //     sum += arguments[i]
    // }

    // return sum

// return rest.reduce((a, b) => a + b)
// }
// console.log(sum(1, 2, 3, 4, 5));


// let arr = [1, 2, 3, 4, 5]
// console.log(...arr);


// let obj = {
//     a: 20,
//     b: 30,
//     c: 40,
//     d: 50,
//     f: 60
// }

// let obj2 = {
// ...obj

// }

// console.log(obj2);

//**********    PART 146   *************** */


// let a = 10, b = 20

// let obj = {
//     a,
//     b,
//     print(){
//         console.log(this);
//     }
// }
// obj.print()

//**********    PART 147   *************** */

//object destructuring 

// let person = {
//     name: 'Nurul Islam',
//     email: 'mdnuruili291@gmail.com',
//     address: {
//         city: 'Dhaka',
//         country: 'bangladesh'
//     }
// }

// let {name, email, address: {city, country}} = person
// console.log(name, email, city, country);


// let arr = [1, 2 , 3, 4 , 5]

// let [first, second, , , last] = arr
// console.log(first, second, last);



//**********    PART 148   *************** */

// Object entries and from entries

// let obj = {
//     a: 10,
//     b: 20
// }
// console.log(Object.entries(obj));


// let objArr = [
//     ['a', 10],
//     ['b', 20]
// ]
// console.log(Object.fromEntries(objArr));


//**********    PART 151   *************** */


// const arr = [1, 2, 3, 4]

//         // iterate in ES5

// function createIterator(collection){
//     let i = 0

//     return{
//         next(){
//             return{
//                 done: i >= collection.length,
//                 value: collection[i++]
//             }
//         }
//     }
// }

// let iteratore = createIterator(arr)

// console.log(iteratore.next());
// console.log(iteratore.next());
// console.log(iteratore.next());
// console.log(iteratore.next());
// console.log(iteratore.next());



//**********    PART 152   *************** */


// const arr = [1, 2, 3, 4]

//         // iterate in ES6

// let iteratore = arr[Symbol.iterator]()

// console.log(iteratore.next());
// console.log(iteratore.next());
// console.log(iteratore.next());
// console.log(iteratore.next());
// console.log(iteratore.next());

// let str = 'TEXT'

// let iterateText = str[Symbol.iterator]()
// console.log(iterateText.next());
// console.log(iterateText.next());
// console.log(iterateText.next());
// console.log(iterateText.next());
// console.log(iterateText.next());

//**********    PART 153   *************** */

        // for of loop in ES6

// const arr = [1, 2, 3, 4]
// for (let val of arr){
//     console.log(val);
// }

// for(let val of 'Nurul Islam'){
//     console.log(val);
// }

        //Object Iterate System

// let obj = {
//     start: 0,
//     end: 5,

    // [Symbol.iterator]: function(){
    //     currentValue = this.start
    //     let self = this
    //     return{
    //         next(){
    //             return{
    //                 done: currentValue >= self.end,
    //                 value: currentValue > self.end ? undefined : currentValue++
    //             }
    //         }
    //     }
    // }


        //Generators Functions

    // [Symbol.iterator]: function*(){
    //    let currentValue = this.start
 
    //    while(currentValue <= this.end){
    //        yield currentValue++
    //    }

    // }

// }

// for(let v of obj){
//     console.log(v);
// }

// let iterate = obj[Symbol.iterator]()

// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());




// function* generate(){
//     yield 1
//     yield 2
//     yield 3
//     yield 4

// }


// let arr = [1, 2, 3, 4]
// function* generate(collection){
//     for(let i = 0; i < collection.length; i++){
//         yield collection[i]
//     }
// }

// let it = generate(arr)
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());


// let biraniDam = 150
// function total(customer, dam){
//     return customer *  dam

//     if(customer > 10){
//         biraniDam = 100
//         return biraniDam * customer
//     }else{

//     }
// }


// let totalcash = total(7, biraniDam)
// console.log(totalcash);


// function Shape(customer, price){
//     return customer * price
// }




//**********    PART 161   *************** */


//  class Rectange {
//         constructor(width, height){
//             this.width = width
//             this.height = height
//         }
//        name = 'Nurul Islam'
//     //    test1 = function(){
    
//     //    }
    
//         draw(){
//             console.log('drawing.....');
//         }
//     }
    
//     let rect = new Rectange(100, 200)
//     console.log(rect);


//**********    PART 162   *************** */

        //static Method



// class Person {
//     constructor(name, email){
//         this.name = name
//         this.email = email
//     }
     
//     print(){
//         console.log(this.name, this.email);
//     }

//     test(){
//         console.log(this);
//     }

//     static create(str){
//         let person = JSON.parse(str)
//         return new Person(person.name, person.email)
//     }
// }

// let str = '{"name": "Nurul Islam", "email": "mdnuruli291@gmail.com"}'

// let p1 = Person.create(str)
// console.log(p1);
// console.log(p1 instanceof Person);
// p1.print()


// function Shape(){
//     this.draw = function(){
//         console.log(this);
//     }
// }

// let s1 = new Shape()
// let anotherDraw = s1.draw
// anotherDraw()

// let test = p1.test
// test()



//************  PART 164     ************ */

        //Private Data with symbool in class method

// const _radius = Symbol()
// const _name = Symbol()
// const _darw = Symbol()

// class Rectange {
//     constructor(radius, name){
//         this[_radius] = radius
//         this[_name] = name
//     }

//     [_darw](){
//         console.log('Drawing....');
//     }
// }

// let rect = new Rectange(2, 'Nurul Islam')

// console.log(rect);



//************  PART 165     ************ */

        //Private Data with WeakMap in class method



    //     const _radius = new WeakMap()
    //     const _name = new WeakMap()
    //     const _resize = new WeakMap()

    //     class Rectange {
    //         constructor(radius, name){
    //             this.size = 100
    //             _radius.set(this, radius)
    //             _name.set(this, name)
    //             _resize.set(this, () => {
    //                 console.log(this.size);
    //             })
    //         }
        
    //         darw(){
    //             console.log('Drawing....');
    //             console.log(_radius.get(this), _name.get(this));
    //             _resize.get(this)()
    //     }
    // }
    //     let rect = new Rectange(2, 'Nurul Islam')
        
        
    //     rect.darw()





//************  PART 166     ************ */

        //Private Data with WeakMap in class method



//         const _radius = new WeakMap()
//         const _name = new WeakMap()
//         const _resize = new WeakMap()

//         class Rectange {
//             constructor(radius, name){
//                 this.size = 100
//                 _radius.set(this, radius)
//                 _name.set(this, name)
//                 _resize.set(this, () => {
//                     console.log(this.size);
//                 })
//             }

//         //   getRadius(){
//         //       return _radius.get(this)
//         //   }

//         get radius(){
//             return _radius.get(this)
//         }
//         set radius(v){
//             return _radius.set(this, v)
//         }
        
//             darw(){
//                 console.log('Drawing....');
//                 console.log(_radius.get(this), _name.get(this));
//                 _resize.get(this)()
//         }
//     }

// let rect = new Rectange(2, 'Nurul Islam')
// rect.darw()
// rect.radius = 100
// console.log(rect.radius);



//************  PART 167     ************ */

        //inheritance in javascript ES6


// class Shape{

//     constructor(color){
//         this.color = color
//     }
//     draw(){
//         console.log('Drawing...');
//     }
// }

// class Rectange extends Shape{

  
//     constructor(color, width, height){
//         super(color)
//         this.width = width
//         this.height = height
//     }

//     calculate(){
//         return this.width + this.height;
//     }
// }

// let rect = new Rectange('Green', 20, 30)
// console.log(rect);
// rect.draw()



/************  PART 168     ************ */

        //Method overriding in javascript ES6


        // class Shape{

        //     constructor(color){
        //         this.color = color
        //     }
        //     draw(){
        //         console.log('Drawing...');
        //     }
        // }
        

        // class Rectange extends Shape{
        
          
        //     constructor(color, width, height){
        //         super(color)
        //         this.width = width
        //         this.height = height
        //     }
        
        //     draw(){
        //         console.log('drawing in Rectangle');
        //     }

        //     calculate(){
        //         return this.width + this.height;
        //     }
        // }
        

        // import Rectange from './Rectangle'
        // let rect = new Rectange('Green', 20, 30)
        // console.log(rect);
        // rect.draw()


// import * as func from './func'
// console.log(func.add(10, 10));
// console.log(func.sum(30, 10));
// console.log(func.dei(10, 10));
// console.log(func.multy(10, 10));
 

// import {add, multy} from './func'
// console.log(add(10, 10), multy(10, 10));





        //ERROR IN JAVASCRIPTS 
        // ***********    PART 170     *************//

// let n = 10
// if(n > 5){
//         throw new Error('n is greater than 5');
// }

         // ***********    PART 171     *************//

// let n = parseInt('amar name')
// console.log(n); 

// function changeToInt(v){
//         let result = Number.parseInt(v)
//         if(!result){
//                 return 'please provite a value which able to convert in Integer'
//         }

//         return result
// }
// let result = changeToInt('300')
// console.log(result);



         // ***********    PART 172     *************//


        //Error handdling with Try Catch in javascript

// function makeWords(text){
//         try{
//                 let str = text.trim()
//                 let words = str.split(' ')
//                 return words
//         } catch(e){
//                 console.log('Please provite a valid text');
//         }

//         let str = text.trim()
//         let words = str.split(' ')
//         return words


//  }

// let words = makeWords(100)
// console.log(words);



         // ***********    PART 173     *************//

         //Thorwing an Error

// try{
//         console.log('i am line 1');
//         throw new Error('I am Your Error')
//         console.log('i am line 2');
//         console.log('i am line 3');
// }
//  catch(e){
//         console.log(e.message);
// }



         // ***********    PART 174     *************//

         //Finally Block in javacript

// try{
//     console.log('i am line 1');
//     throw new Error('I am Your Error')
//     console.log('i am line 2');
//     console.log('i am line 3');}
// catch(e){
//      console.log(e.message);
// }
// finally{
//     console.log('I am finally block');
// }

                // ***********    PART 175     *************//
//  try{
//      console.log('i am line 1');
//      throw new Error('I am Your Error')
//      console.log('i am line 2');
//      console.log('i am line 3');}
// catch{
//      console.log('I am Custom Error');
// }
// finally{
//     console.log('I am finally block');
// }

        //*************         PART 175       ************* */


// class customError extends Error {
//         constructor(msg){
//             super(msg)

//             if(Error.captureStackTrace){
//                     Error.captureStackTrace(this, customError)
//             }
//         }
// }

// try{
//         console.log('i am line 1');
//         throw new customError('I am Your custom Error')
//         console.log('i am line 2');
//         console.log('i am line 3');}
//    catch(e){
//         // console.log(e.message);
//         console.log(e);
//         console.log('I am Custom Error');
//    }
//    finally{
//        console.log('I am finally block');
//    }
 



// import './lessons/lesson2'
// import './lessons/lesson12'
// import './lessons/lesson13'
// import './lessons/lesson14'
// import './lessons/lesson15'



//import './dom/dom'
// import './dom/dom1'
// import './dom/dom2'
// import './dom/dom3'
// import './dom/dom4'
import './dom/dom5'

import './dom/dom6'
import './dom/dom7'
import './dom/dom8'