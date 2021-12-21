//********************  PART 205 & 206 & 207  *************************** */


// Update and Remove any Dom Elements


let li = createElement('li', 'fa-fa-fas', 'four')
li.setAttribute('title', 'I am four')

let list = document.getElementById('list')
list.appendChild(li)


// let p1 = createElement('p', 'lead', 'Lorem ipsum dolor sit amet  consectetur adipisicing elit. Sed quibusdam odit eos quos facilis distinctio')
// let p2 = createElement('p', 'lead', 'Lorem ipsum dolor sit amet  consectetur adipisicing elit. Sed quibusdam odit eos quos facilis distinctio')


// let div = createElement('div')
// append(div, [p1, p2])

// console.log(div);


// list.insertAdjacentElement('beforebegin', div)
// list.insertAdjacentElement('afterbegin', div)
// list.insertAdjacentElement('beforeend', div)
// list.insertAdjacentElement('afterend', div)


// let container = document.getElementById('cont')
// container.appendChild(div)


function createElement(tagName, className, innerHTML) {
   let tag = document.createElement(tagName)
   tag.innerHTML = innerHTML || ''
   tag.className = className || ''

   return tag
}

function append(perent, children) {
   children.forEach(child => perent.appendChild(child))


}


let firstChild = list.firstElementChild

setTimeout(() => {
    firstChild.innerHTML = firstChild.innerHTML + ' modified'
    firstChild.classList.add('text-success')
    firstChild.style.background = 'black'
}, 5000)

// setTimeout(() => {
//     list.lastChild.remove()
// }, 3000)


let lastChild = list.lastElementChild.cloneNode()
lastChild.innerHTML = 'five'
list.appendChild(lastChild)


    // 207  How to Deal with Attributes in DOM Manipulation in Javascript _ Stack Learner

// console.log(list.attributes);
// console.log(list.getAttributeNames());
// console.log(list.getAttributeNode('class'));
// console.log(list.getAttributeNode('id'));

// console.log(list.classList);


    //set Attribute

// lastChild.id = 'amar-list'
// lastChild.setAttribute('id', 'amar-list')

let attr = document.createAttribute('title')
attr.value = 'I am new Title'

lastChild.setAttributeNode(attr)
