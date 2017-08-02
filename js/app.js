// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
this.x = x;
this.y = y;
//set different speed to each enemy
this.speed = 50*(Math.random()*5+1);
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //change x coordinate according to different speed
    this.x = this.x + this.speed*dt;
    //resetlocation of enemy if it is offscreen

    if(this.x>500){
      this.x=0;
    }
//this.collision();
collision();
};
//Enemy.prototype.collision = function(){
//this function from live help and some searching for 2dcollisions
var collision = function(){
  for(var i = 0; i < allEnemies.length ;i++){
  if(Player.x < allEnemies[i].x + 40 &&
    Player.x> allEnemies[i].x-40 &&
     Player.y < allEnemies[i].y + 40 &&
      Player.y>allEnemies[i].y-40){
      Player.resetlocation();
  }
  }
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(){
  //initial x and y locations
  this.x = 225;
  this.y =300;
  this.sprite = "images/char-boy.png";

};
Player.prototype.update = function() {
console.log("update");

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(pressedKey){
  if(pressedKey === 'left' && this.x>50){
    this.x -=50;
  }

else if(pressedKey === 'right' && this.x<450){
    this.x +=50;
}
  else if(pressedKey === 'up' && this.y>=0){
    this.y -=50;
    if(this.y <=40){
      this.resetlocation();
    }
}
  else if(pressedKey === 'down' && this.y<450){
    this.y +=50;
  }
//try to detect collision
/*  if(this.x == Enemy.x  && this.y == Enemy.y ){
     this.resetlocation();
*/

};

Player.prototype.resetlocation = function(){
  /* as in the Axis-Aligned Bounding Box

 if((this.y <=0)|| (this.x < Enemy.x + 10 &&
   this.x + 10 > Enemy.x &&
   this.y < Enemy.y + 10 &&
   this.y + 10 >Enemy.y)){*/
     this.x = 225;
     this.y = 300;
//  }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
// i got the y coordinate of enymies by trying and resetting
var allEnemies = [new Enemy(10,220),new Enemy(10,140),new Enemy(10,60)];
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
