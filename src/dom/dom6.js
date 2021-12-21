
let form = document.getElementById('form')

form.addEventListener('submit', function (event) {
   event.preventDefault();
//    console.log(this.length);
    // console.log(this.elements[0]);
    // console.log(this['email']);

    let isValid = false
    let formData = {};

    [...this.elements].forEach(el => {

        //console.log(el.type, el.name, el.value);
        if(el.type !== 'submit'){
            isValid = validator(el)
            if(isValid){
                formData[el.name] = el.value
            }else{
                el.classList.add('is-invalid')
                alert(`${el.name} is required`)
            }
        }

    })
    if(isValid){
        console.log(formData);
        this.reset()
    }
 
})

function validator(el) {

    if(!el.value){
        return false
    }

    if(el.type === 'email'){
        console.log(' please add email');
    }
    return true
}