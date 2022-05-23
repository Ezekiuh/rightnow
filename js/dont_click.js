/** */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drawing = false;
ctx.lineWidth = 0.3;
ctx.fillStyle = '#262728';
ctx.strokeStyle = 'azure';
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 0;
ctx.shadowBlur = 10;
ctx.shadowColor = 'rgba(0,0,0,0.25)';

/* ctx.globalCompositeOperation = 'destination-over'; ~~ this.size = 0;*/

class Root {
    constructor(x, y){
    this.x = x;
    this.y = y;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.maxSize = Math.random() * 35 + 20;
    this.size = Math.random() * 1 + 2; /* Math.random() * 1 + 2 */
    this.vs = Math.random() * 0.2 + 0.5;
    this.angleX = Math.random() * 6.2;
    this.vax = Math.random() * 0.6 - 0.3;
    this.angleY = Math.random() * 6.2;
    this.vay = Math.random() * 0.6 - 0.3;
    this.angle = 0;
    this.va = Math.random() * 0.02 + 0.05;
    this.lightness = 10;
    }
    update(){
        this.x += this.speedX + Math.sin(this.angleX);
        this.y += this.speedY + Math.sin(this.angleY);
        this.size += this.vs;
        this.angleX += this.vax;
        this.angleY += this.vay;
        this.angle += this.va;
        if(this.lightness < 70) this.lightness += 0.25;
        if(this.size < this.maxSize){

            ctx.save();
            ctx.translate(this.x, this.y);
            /* ctx.rotate(this.angle);
            /* ctx.fillRect(0 - this.size/2, 0 - this.size/2, this.size, this.size); */
            let double = this.size * 2;
            ctx.strokeRect(0, 0, this.size, this.size);

            requestAnimationFrame(this.update.bind(this));
            ctx.restore();
        }
    }
}

window.addEventListener('mousemove', function(e){
    if(drawing){
        for(let i = 0; i < 0.1; i++){
        const root = new Root(e.x, e.y);
        root.update();
        }
    }
});
window.addEventListener('mousedown', function(e){
    drawing = true;
    for(let i = 0; i < 1; i++){ /* (let i = 0; i < X; i++) X= number spawned per click (not stroke)*/
        const root = new Root(e.x, e.y);
        root.update();
        }
});
window.addEventListener('mouseup', function(e){
    drawing = false;
});