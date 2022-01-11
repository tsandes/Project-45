class Plane{
    constructor(){
        this.x=50
        this.y=50
        this.width=50
        this.height=50
        this.PlaneImage=loadImage("Plane.png")

    }

    displayplane(){
        push();
    translate(this.x, this.y);
    imageMode(CENTER);
    image(this.PlaneImage, 0, 0, this.width, this.height);
    pop();
    }

    move() {
    if (keyIsDown(LEFT_ARROW)) {
        this.x-=5
    }
       
    if (keyIsDown(RIGHT_ARROW)) {
        this.x+=5
    }
      }
}