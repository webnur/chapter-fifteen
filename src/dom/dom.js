
    //******************     PART 198    ********************** */

// dom selectors
// 1 > id, 2 > class, 3 > Tag Name, 4 > name


// let idSelector = document.getElementById('title')
// console.log(idSelector);

// let classSelector = document.getElementsByClassName('load')
// console.log(classSelector);

// let tagSelector = document.getElementsByTagName('ul')
// console.log(tagSelector);

// let nameSelector = document.getElementsByName('first')
// console.log(nameSelector);

   //******************     PART 199    ********************** */

   // Selectors Part two

   // selector system two


//    let title = document.querySelector('#title')
//    console.log(title);

//    let classSelector = document.querySelector('.load')
//    console.log(classSelector);
   
//    let classSelectorAll = document.querySelectorAll('.load')
//    console.log(classSelectorAll);

//    let tagSelector = document.querySelectorAll('li')
//    console.log(tagSelector);

//    let nameSelector = document.querySelector(' [name^="list-item-one"]')
//    console.log(nameSelector);


// let list = document.getElementById('list')

// let parent = list.parentElement
// console.log(parent);

// console.log(list.children);

// console.log(list.previousElementSibling);

// console.log(list.nextElementSibling);


// console.log(list.firstElementChild);
// console.log(list.lastElementChild);



   //******************     PART 202    ********************** */


// let listItem = document.getElementsByTagName('li')


// // console.log(listItem);

// // let listItems = Array.from(listItem)
// // let listItems = Array.prototype.slice.apply(listItem)

// let listItems = [...listItem]

// listItems.forEach((li, ind) => {
//     let text = li.innerHTML
//     li.innerHTML = `(${ind + 1}) ${text}`
// }) 






   //******************     PART 203    ********************** */


// let li = document.createElement('li')
// li.className = 'menu-list-item'
// li.setAttribute('title', 'I am four')
// li.innerHTML = 'four'

// let list = document.getElementById('list')
// list.appendChild(li)



let li = createElement('li', 'fa-fa-fas', 'four')
li.setAttribute('title', 'I am four')

let list = document.getElementById('list')
list.appendChild(li)


let p1 = createElement('p', 'lead', 'Lorem ipsum dolor sit amet  consectetur adipisicing elit. Sed quibusdam odit eos quos facilis distinctio')
let p2 = createElement('p', 'lead', 'Lorem ipsum dolor sit amet  consectetur adipisicing elit. Sed quibusdam odit eos quos facilis distinctio')


let div = createElement('div')
append(div, [p1, p2])

console.log(div);



let container = document.getElementById('cont')
container.appendChild(div)


function createElement(tagName, className, innerHTML) {
   let tag = document.createElement(tagName)
   tag.innerHTML = innerHTML || ''
   tag.className = className || ''

   return tag
}

function append(perent, children) {
   children.forEach(child => perent.appendChild(child))


}






