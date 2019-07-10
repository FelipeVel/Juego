// JavaScript source code
var x0, y0, ancho, largo, canvas;

function pared(x0, y0, ancho, largo) {
    this.x0 = x0;
    this.y0 = y0;
    this.ancho = ancho;
    this.largo = largo;
    this.dibujar = function (ctx) {
        ctx.fillStyle = '#694C1B';
        ctx.fillRect(x0, y0, ancho, largo);
    }
}

