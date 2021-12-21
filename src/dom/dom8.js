//****************   PART 217    ***************** */

let postForm = document.getElementById('post-form')
let posts = document.getElementById('form-post')

const URL = 'https://jsonplaceholder.typicode.com/posts'





postForm.addEventListener('submit', function (e) {
    e.preventDefault()
    // console.log(this.title);
    // console.log(this.body)
    let title = this.title.value || undefined
    let body = this.body.value || undefined


    if(title && body){
        let postObj = {
            userId : 100,
            title,
            body
      }

      fetch(URL, {
          method: 'POST',
          headers: {
              'Content-type': 'Application/JSON'
          },
          body: JSON.stringify(postObj)
      })
      .then(response => response.json())
      .then(data => {
          let item = listItemGenerator(data)
          posts.appendChild(item)
          this.reset()
      })
      .catch(e => console.log(e.message))


    }else{
        alert('please Provite Every Detais')
    }

})


function  listItemGenerator(item) {
    let li = document.createElement('li')
    li.className = 'list-group-item'
    //li.innerHTML = item.title 

    li.innerHTML = `${item.id}. ${item.title} by user Id ${item.userId}`

    return li
}


