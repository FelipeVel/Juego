// JavaScript source code
function agua() {
    miCanvas = $("#mi_canvas")[0];
    contexto = miCanvas.getContext("2d");
    this.img = [$("#agua_abajo")[0], $("#agua_arriba")[0], $("#agua_izquierda")[0], $("#agua_derecha")[0]];
    this.sprite = 3;
    this.x=40;
    this.y = miCanvas.height - 70;

    this.dibujar = function (ctx) {
        var img = this.img[this.sprite];
        var x = this.x;
        var y = this.y;
        ctx.drawImage(img, x, y);
        ctx.save();
    }

    this.actualizar = function(accion, paredes){
        if (accion=="arriba" && !colision(accion, paredes)) {
            this.y -= 10;
            this.sprite = 1;
        }
        if (accion == "abajo" && !colision(accion, paredes)) {
            this.y += 10;
            this.sprite = 0;
        }
        if (accion == "izquierda" && !colision(accion, paredes)) {
            this.x -= 10;
            this.sprite = 2;
        }
        if (accion == "derecha" && !colision(accion, paredes)) {
            this.x += 10;
            this.sprite = 3;
        }
    }

    this.colision = function (accion, paredes) {
        if (distancia(accion, paredes) == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    this.distancia=function(accion, paredes) {
        var menor = miCanvas.width;
        var x0;
        var y0;
        if (accion == "arriba") {
            x0 = 20;
            y0 = 0;
        }
        else if (accion == "abajo") {
            x0 = 20;
            y0 = 40;
        }
        else if (accion == "izquierda") {
            x0 = 0;
            y0 = 20;
        }
        else if (accion == "derecha") {
            x0 = 40;
            y0 = 20;
        }
        for (j = 0; j < paredes.length; j++) {
            for (i = 0; i < paredes[j].ancho; i++) {
                var aux = Math.sqrt(Math.pow((x0 + this.x - (paredes[j].x0 + i)), 2) + Math.pow((y0 + this.y - (paredes[j].y0 )), 2));
                if (aux < menor) {
                    menor = aux;
                }
            }
        }

        return menor;
    }
}