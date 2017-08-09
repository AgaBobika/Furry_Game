// document.addEventListener("DOMContentLoaded", function() {
//     console.log('hello');
//
//
// function Furry(){
//     this.x = 0;
//     this.y = 0;
//     this.direction = "right";
// }
//
// function Coin(){
//     this.x = Math.floor(Math.random() *10);
//     this.y = Math.floor(Math.random() *10);
// }
//
//
// function Game() {
//     this.board = document.querySelectorAll("#board div");
//     this.furry = new Furry();
//     this.coin = new Coin();
//     this.score = 0;
//
//     this.startGame = function() {
//         var self = this;
//         console.log("oko");
//         this.setInterval = setInterval(function(){
//             self.moveFurry();
//         }, 500);
//     }
//
//     this.index = function(x,y) {
//         return x + (y * 10);
//     }
//
//     this.showFurry = function(){
//         this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');
//     }
//
//     this.showCoin = function(){
//         this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');
//     }
//
//     this.hideVisibleFurry = function() {
//         if
//         document.querySelector('.furry').classList.remove('furry');
//     }
//
//     this.moveFurry = function () {
//         this.hideVisibleFurry();
//
//         if(this.furry.direction === "right")
//         {
//             this.furry.x = this.furry.x + 1;
//         }
//         else if (this.furry.direction === "left")
//         {
//             this.furry.x = this.furry.x - 1;
//         }
//         else if (this.furry.direction === "down")
//         {
//             this.furry.y = this.furry.y + 1;
//         }
//         else if (this.furry.direction === "up")
//         {
//             this.furry.y = this.furry.y - 1;
//         }
//     this.checkCoinCollision();
//     this.showFurry();
//
//     }
//
//     this.turnFurry = function (event) {
//         switch (event.which) {
//             case 37:
//                 this.furry.direction = 'left';
//                 break;
//             case 39:
//                 this.furry.direction = 'right';
//                 break;
//             case 40:
//                 this.furry.direction = 'down';
//                 break;
//             case 38:
//                 this.furry.direction = 'up';
//                 break;
//             }
//         }
//
//
//     this.checkCoinCollision = function () {
//         if ((this.furry.x==this.coin.x) && (this.furry.y==this.coin.y)) {
//             document.querySelector('.coin').classList.remove('coin');
//             this.score+=1;
//             this.coin = new Coin;
//             this.showCoin();
//             document.querySelector('#score > div > strong').innerText=this.score;
//         }
//     }
//
//
//     this.gameOver = function () {
//          if ((this.furry.x>9 || this.furry.x<0) || (this.furry.y>9 || this.furry.y<0))
//          {
//             console.log("Game over!");
//             clearInterval(this.idSetInterval);
//         } else {
//             this.checkCoinCollision();
//             this.showFurry();
//
//          }
//      }
// }
//
// var game = new Game();
// game.showFurry();
// game.showCoin();
// game.startGame();
//
// document.addEventListener('keydown', function(event){
// game.turnFurry(event);
// });
//
//
//
// });

document.addEventListener("DOMContentLoaded", function(){

var Furry = function(){

  this.x = 0;
  this.y = 0;
  this.direction = "right";


}

var Coin = function(){
  this.x = Math.floor(Math.random() * 10);
  this.y = Math.floor(Math.random() * 10);
}

var Game = function(){
  this.board = document.querySelectorAll('#board > div');
  this.furry = new Furry();
  this.coin = new Coin();
  this.score = 0;
  this.startGame = function(){
    var self = this;
    this.setInterval = setInterval(function(){
      self.moveFurry();
    }, 250);
  }
  this.index = function(x,y) {
    return x + (y * 10);
  }
  this.showFurry = function(){
    this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
  }
  this.showCoin = function(){
    this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
  }
  this.hideVisibleFurry = function(){
    document.querySelector('.furry').classList.remove('furry');
  }
  this.moveFurry = function(){
    console.log(this.furry.x);
    console.log(this.furry.y);
    this.hideVisibleFurry();
    if(this.furry.direction == "right")
    {
      this.furry.x += 1;

    } else if(this.furry.direction == "left"){
      this.furry.x -= 1;
    } else if (this.furry.direction == "top") {

      this.furry.y -= 1;
    } else if (this.furry.direction == "bottom") {
      this.furry.y += 1;
    }
    this.gameOver();


  }

  this.turnFurry = function(event){
    switch (event.which) {
      case 37:
        this.furry.direction = "left";
        break;
      case 38:
        this.furry.direction = "top";
        break;
      case 39:
        this.furry.direction = "right";
        break;
      case 40:
        this.furry.direction = "bottom";
        break;


    }
  }

  this.checkCoinCollision = function(){
    if(this.furry.x == this.coin.x && this.furry.y == this.coin.y)
    {
      document.querySelector('.coin').classList.remove("coin");
      this.score += 1;
      this.coin = new Coin();
      this.showCoin();
      document.querySelector('div > strong').innerText = this.score;

    }
  }
  this.gameOver = function(){
    if(this.furry.x > 9 || this.furry.x < 0 || this.furry.y > 9 || this.furry.y < 0)
    {
      console.log("Game over!");
      clearInterval(this.setInterval);
    } else {
      this.checkCoinCollision();
      this.showFurry();
    }
  }
}


var game = new Game();
game.showFurry();
game.showCoin();
game.startGame();

document.addEventListener('keydown', function(event){
    game.turnFurry(event);
});


});
