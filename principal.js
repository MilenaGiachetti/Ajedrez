var btnTablero = document.getElementById('btnTablero');
var tablero = document.getElementById('tablero');
var num = 1;

function crearTablero(){
    while (num <= 72){
        if (num % 2 == 0 && num % 9 != 0){
            setTimeout(() => {
                    var caja = document.createElement('div');
                    caja.setAttribute('class','blanco');
                    tablero.appendChild(caja);
            }, num * 100)
        }else if(num % 2 == 1 && num % 9 != 0){
            setTimeout(() => {
                var caja = document.createElement('div');
                caja.setAttribute('class','negro');
                tablero.appendChild(caja);
            }, num * 100)
        }else{
            setTimeout(() => {
                var caja = document.createElement('div');
                caja.setAttribute('class','salto');
                tablero.appendChild(caja);
            }, num * 100)
        }
        num++;
    };
};

setInterval('crearTablero()',1000);
btnTablero.addEventListener('click', crearTablero);