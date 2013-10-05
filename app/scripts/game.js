// create an new instance of a pixi stage
var stage = new PIXI.Stage(0xFFFFFF, true);

// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(600, 600);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

requestAnimFrame(animate);

// create a texture from an image path
var texture = PIXI.Texture.fromImage('img/ball.jpg');
// create a new Sprite using the texture
var ball = new PIXI.Sprite(texture);
ball.setInteractive(true);
var touched = false;
var gdata;
ball.mousedown  = ball.touchstart = function(data) {
  touched = true;
  gdata = data;
  speed = 0;
  rotSpeed = 0;
  console.log("touched");
  };
ball.mouseup  = ball.touchend = function(data) {
  touched = false;
  console.log("released");
  };
ball.mousemove = ball.touchmove = function(data) {
  if(touched)  {
    var newPosition = gdata.getLocalPosition(stage);
    ball.position.x = newPosition.x;
    ball.position.y = newPosition.y;
    }
  }
// center the sprites anchor point
ball.anchor.x = 0.5;
ball.anchor.y = 0.5;

// move the sprite t the center of the screen
ball.position.x = 300;
ball.position.y = 100;

stage.addChild(ball);

var speed = 0;
var rotSpeed = Math.random()/10-0.05;
function animate() {
  requestAnimFrame(animate);
  if(touched) { renderer.render(stage); return;}

  speed += 0.3;
  ball.rotation += rotSpeed;
  ball.position.y += speed;
  ball.position.x += rotSpeed*40;
  if(ball.position.y > 560) {
    speed = -(speed*0.8);
    if(Math.random() > 0.6)
       speed -= Math.random()*10;
    ball.position.y = 560;
    rotSpeed += Math.random()/10-0.05;
    }
  if(ball.position.x < 40) {
    ball.position.x = 40;
    rotSpeed = -rotSpeed*0.8;
    }
  if(ball.position.x > 560) {
    ball.position.x = 560;
    rotSpeed = -rotSpeed*0.8;
    }
	// render the stage
	renderer.render(stage);
}
