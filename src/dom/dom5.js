//*******************   PART 211 & 212    ************************ */
let name = document.getElementById('name')

name.addEventListener('keypress', function (event) {
    if(event.key === 'Enter'){
        // console.log(event.target.value);
        document.getElementById('show-name').innerHTML = `Your name Is ${event.target.value}`
        event.target.value = ''
       
    }
})

//let skills = document.getElementsByClassName('form-check-input')

// let skills = document.getElementsByName('skills')
// let result = document.getElementById('result')
// let checkedSkills = [];

// [...skills].forEach(skill => {
//     skill.addEventListener('change', function (event) {
       
//         if(event.target.checked){
//             checkedSkills.push(event.target.value)
//             // console.log(checkedSkills);
//             outputSkills(result, checkedSkills)
//         } else{
//             let ind = checkedSkills.indexOf(event.target.value)
//             checkedSkills.splice(ind, 1)
//             // console.log(checkedSkills);
//             outputSkills(result, checkedSkills)
//         }

//      })
// })


// function  outputSkills(parent, skills) {
//     let result = ''
//     skills.forEach((skill, index) => {
//         result += `${index + 1} ${skill}`
//     })

//     parent.innerHTML = result
// }




// let skills = document.getElementsByName('skills')
// let result = document.getElementById('result')
// let checkedSkills = [];
// [...skills].forEach(skill => {
//     skill.addEventListener('change', function (event) {
//         if(event.target.checked){
//             checkedSkills.push(event.target.value)
//             // console.log(checkedSkills);
//             outputSkills(result, checkedSkills)
//         }else{
//            let ind = checkedSkills.indexOf(event.target.value)
//            checkedSkills.splice(ind, 1)
//            outputSkills(result, checkedSkills)
//         }
//     })
// })

// function outputSkills(parent, skills) {
//     let result = ''
//     skills.forEach((skill, index) => {
//        result += `${index + 1} ${skill}`
//     })

//     parent.innerHTML = result
// }





let skills = document.getElementsByName('skills')
let checkedSkills = [];

[...skills].forEach(skill => {
    skill.addEventListener('change', function (event) {
        if(event.target.checked){
            checkedSkills.push(event.target.value)
            console.log(checkedSkills);
        }else{
            let ind = checkedSkills.indexOf(event.target.value)
            checkedSkills.splice(ind, 1)
            console.log(checkedSkills);
        }
    })
})


function outputSkills(parent, skills) {
    let result = ''
    skills.forEach((index, skill) =>{
        result += `${index + 1} ${skill}`
    })

    parent.innerHTML = result
}


//*******************   PART 213    ************************* */

// let list = document.getElementById('list')
// list.addEventListener('dblclick', function (event) {
//     if(this.contains(event.target)){
//         let innerText = event.target.innerText
//         event.target.innerHTML = ''
//         let inputBox = createInputBox(innerText)
//         event.target.appendChild(inputBox)

//         inputBox.addEventListener('keypress', function (e) {
//             if(e.key === 'Enter'){
//                 event.target.innerHTML = e.target.value
//             }
//         })
        

//     }
// })

// function createInputBox(value) {
//     let inp = document.createElement('input')
//     inp.type = 'text'
//     inp.className = 'form-control'
//     inp.value = value
    
//     return inp
// }




let list = document.getElementById('list')
list.addEventListener('dblclick', function (event) {
   if(this.contains(event.target)){
       let innerText = event.target.innerText
       event.target.innerHTML = ''
       let inputBox = createInputBox(innerText)
       event.target.appendChild(inputBox)

       inputBox.addEventListener('keypress', function(e) {
           if(e.key === 'Enter'){
               event.target.innerHTML = e.target.value
           }
       })
       
   }
})

function createInputBox(value){

    let inp = document.createElement('input')
    inp.type = 'text'
    inp.className = 'form-control'
    inp.value = value

    return inp
}

