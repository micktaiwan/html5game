// create an new instance of a pixi stage
var stage = new PIXI.Stage(0xFFFFFF);

// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(600, 600);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

requestAnimFrame(animate);

// create a texture from an image path
var texture = PIXI.Texture.fromImage('img/ball.jpg');
// create a new Sprite using the texture
var image = new PIXI.Sprite(texture);

// center the sprites anchor point
image.anchor.x = 0.5;
image.anchor.y = 0.5;

// move the sprite t the center of the screen
image.position.x = 300;
image.position.y = 100;

stage.addChild(image);
var speed = 0;
var rotSpeed = Math.random()/10-0.05;
function animate() {
	requestAnimFrame(animate);
	speed += 0.3;
	image.rotation += rotSpeed;
	image.position.y += speed;
  image.position.x += rotSpeed*40;
	if(image.position.y > 560) {
		speed = -(speed*0.8);
    if(Math.random() > 0.6)
       speed -= Math.random()*10;
  	image.position.y = 560;
  	rotSpeed += Math.random()/10-0.05;
	}
  if(image.position.x < 40) {
    image.position.x = 40;
    rotSpeed = -rotSpeed*0.8;
  }
  if(image.position.x > 560) {
    image.position.x = 560;
    rotSpeed = -rotSpeed*0.8;
  }

	// render the stage
	renderer.render(stage);
}
