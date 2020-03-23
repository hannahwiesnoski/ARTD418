        //mouse states and mouse events on sprites
        //click and hold the mouse button while overing on the sprites

var wine;

function setup() {
    createCanvas(800, 400);

    wine = createSprite(200, 200);
    wine.addAnimation('normal', 'images/wineglasses/frame_00_delay-0.04s.gif', 'images/wineglasses/frame_00_delay-0.04s.gif');
//detect the mouse position and click on this sprite
//if no collider is defined, the image bounding box will be checked
wine.mouseActive = true;
};

//if a sprite is mouseActive true I can check if the mouse is over its collider
//and if the button is pressed
if(wine.mouseIsOver)
    wine.rotation-= 10;
    wine.visible = !wine.mouseIsPressed;
    drawSprites();