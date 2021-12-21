
//***************   PART 208    ********************** */

let title = document.getElementById('title')
title.style.color = '#55efc4'
title.style.fontSize = '40px'
title.style.background = '#000'


let styleObj = {
    background: 'black',
    fontSize : '30px',
    color: '#ff7979'
}


let list = document.getElementById('list');

[...list.children].forEach(li => Object.assign(li.style, styleObj))

//Object.assign(list.style, styleObj)