
var tablero = document.getElementById('tablero');
var num = 1;

function crearTablero(){
    while (num <= 72){
        if (num % 2 == 0 && num % 9 != 0){
            var caja = document.createElement('div');
            caja.setAttribute('class','blanco');
            tablero.appendChild(caja);
        }else if(num % 2 == 1 && num % 9 != 0){
            var caja = document.createElement('div');
            caja.setAttribute('class','negro');
            tablero.appendChild(caja);
        }else{
            var caja = document.createElement('div');
            caja.setAttribute('class','salto');
            tablero.appendChild(caja);
        }
        num++;
    };
};

var btnTablero = document.getElementById('btnTablero');
btnTablero.addEventListener('click', crearTablero);