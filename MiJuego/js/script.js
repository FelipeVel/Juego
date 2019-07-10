// JavaScript source code

$(document).ready(inicio);
$(document).keydown(capturaTeclado);

function inicio() {
    miCanvas = $("#mi_canvas")[0];
    ctx = miCanvas.getContext("2d");
    buffer = document.createElement("canvas");
    oma = new agua(); 
    paredes = [new pared(0, 0, 640, 20),
        new pared(0, 0, 20, 524),
        new pared(0, 504, 640, 20),
        new pared(620, 0, 20, 524),
        new pared(320, 121, 320, 20),
        new pared(20, 252, 300, 20),
        new pared(320, 373, 320, 20)];

    run();
}

function run() {
    buffer.width = miCanvas.width;
    buffer.height = miCanvas.height;
    contextoBuffer = buffer.getContext("2d");

    contextoBuffer.clearRect(0, 0, buffer.width, buffer.height);
    oma.dibujar(contextoBuffer);
    for (i = 0; i < paredes.length; i++) {
        paredes[i].dibujar(contextoBuffer)
    }
    ctx.clearRect(0, 0, miCanvas.width, miCanvas.height);
    ctx.drawImage(buffer, 0, 0);
}

function capturaTeclado(event) {
    if (event.which == 38 || event.which == 87)
        oma.actualizar('arriba', paredes);
    if (event.which == 40 || event.which == 83)
        oma.actualizar('abajo', paredes);
    if (event.which == 39 || event.which == 68)
        oma.actualizar('derecha', paredes);
    if (event.which == 37 || event.which == 65)
        oma.actualizar('izquierda', paredes);

}
