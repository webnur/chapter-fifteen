//***************   PART 209    ********************* */

let btn = document.getElementById('btn')

// btn.onclick = function (e) {
//     console.log(e);
// }

let list = document.getElementById('list')

btn.addEventListener('click', function (e) {
    
    let item = list.lastElementChild.cloneNode(true)
    item.innerHTML = 'Newly Create Items'
    list.appendChild(item)
});

// Event Delegation Problem

// [...list.children].forEach(li => {
//     li.onclick = function (e) {
//         e.target.remove()
//     }
// })

// Event Delegation Problem Solve
list.addEventListener('click', function (e) {
    // e.target.remove()
    if(this.contains(e.target)){
        e.target.remove()
    }
})


let box = document.getElementById('box')

box.addEventListener('mouseover', function (e) {
    
    document.getElementById('x-value').innerHTML = e.offsetX
    document.getElementById('y-value').innerHTML = e.offsetY

    
})


// box.addEventListener('mouseover', function (e) {
//     document.getElementById('x-value').innerHTML = e.offsetX
//     document.getElementById('y-value').innerHTML = e.offsetY
// })


