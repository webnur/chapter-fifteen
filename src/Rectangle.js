import Shape from './Shape'

class Rectange extends Shape{
        
          
    constructor(color, width, height){
        super(color)
        this.width = width
        this.height = height
    }

    draw(){
        console.log('drawing in Rectangle');
    }

    calculate(){
        return this.width + this.height;
    }
}

export default Rectange