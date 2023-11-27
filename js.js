
function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 20;
        console.log('ok: ' + this.left);
    }

    this.moveLeft = function() {
        this.left -= 20;
        console.log('Left: ' + this.left);
    }

    this.moveUp = function() {
        this.top -= 20;
        console.log('Up: ' + this.top);
    }

    this.moveDown = function() {
        this.top += 20;
        console.log('Down: ' + this.top);
    }

}

let hero = new Hero('pikachu.png', 20, 30, 200);

function start() {
    if (hero.left < window.innerWidth - hero.size && hero.top <= 20) {
        hero.moveRight();
    } else if (hero.left >= window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size) {
        hero.moveDown();
    } else if (hero.top >= window.innerHeight - hero.size && hero.left > 20) {
        hero.moveLeft();
    } else if (hero.left <= 20 && hero.top > 20) {
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 1000 / 120)
}


start();