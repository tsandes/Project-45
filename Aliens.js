class Alien{
    constructor(){
    
    }

    addAliens(numberOfSprites, scale,){
        for (var i = 0; i < numberOfSprites; i++) {
            var x, y;   
      
         x = random(width / 2 + 150, width / 2 - 150);
         y = random(-height * 4.5, height - 400);

         var sprite = createSprite(x, y);
         this.addImage("Alien.png");

         this.scale = scale;
        this.add(sprite);
        }
    }
}