class Cricle {
    radius;
    color;

    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    setRadius(radius){
        this.radius=radius
    }
    getRadius(){
        return this.radius
    }
    setColor(color){
        this.radius=color
    }
    getColor() {
        return this.color
    }
    setCircle(){

    }
    getArea(){
        return  Math.PI*radius*radius
    }

}