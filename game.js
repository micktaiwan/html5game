// create an new instance of a pixi stage
var stage = new PIXI.Stage(0xFFFFFF);

// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(600, 600);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

requestAnimFrame(animate);

// create a texture from an image path
var texture = PIXI.Texture.fromImage("ball.png");
// create a new Sprite using the texture
var image = new PIXI.Sprite(texture);

// center the sprites anchor point
image.anchor.x = 0.5;
image.anchor.y = 0.5;

// move the sprite t the center of the screen
image.position.x = 300;
image.position.y = 300;

stage.addChild(image);
var speed = 0;
function animate() {
	requestAnimFrame(animate);
	speed += 0.1;
	image.rotation += Math.random()/10 - 0.05;
	image.position.y += speed
	if(image.position.y > 500) {
		speed = -speed;
	}

	// render the stage
	renderer.render(stage);
}
