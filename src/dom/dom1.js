//********************  PART 204    *************************** */


let li = createElement('li', 'fa-fa-fas', 'four')
li.setAttribute('title', 'I am four')

let list = document.getElementById('list')
list.appendChild(li)


let p1 = createElement('p', 'lead', 'Lorem ipsum dolor sit amet  consectetur adipisicing elit. Sed quibusdam odit eos quos facilis distinctio')
let p2 = createElement('p', 'lead', 'Lorem ipsum dolor sit amet  consectetur adipisicing elit. Sed quibusdam odit eos quos facilis distinctio')


let div = createElement('div')
append(div, [p1, p2])

console.log(div);


// list.insertAdjacentElement('beforebegin', div)
// list.insertAdjacentElement('afterbegin', div)
// list.insertAdjacentElement('beforeend', div)
list.insertAdjacentElement('afterend', div)


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
