'use strict'

// Variables de Canciones, Nombre, Artista, Imagen
var canciones = ["musica/poster1.mp3", "musica/poster2.mp3", "musica/poster3.mp3", "musica/poster4.mp3", "musica/poster5.mp3", "musica/poster6.mp3"
, "musica/poster7.mp3", "musica/poster8.mp3", "musica/poster9.mp3", "musica/poster10.mp3", "musica/poster11.mp3", "musica/poster12.mp3"];
var nombre = ["Amorfoda", "Adios", "Alma diamante", "Nutshell",
"First", "Everyday i have the Blues", "Flashed junk mind", "Electric man", "Love in Vain", "Maybe tomorrow", "Gimme the Sweet and Lowdown", "Machine gun blues"];
var artista = ["Badbunny", "Gustavo Cerati", "Spinetta", "Alice in Chains", "Cold war kids", "John Mayer", "Milky Chance",
"Rival Sons", "Rolling Stone", "Sterophonics", "Social Distortion", "Social Distortion"];
var imagen = ["assets/imagen1.jpg", "assets/imagen2.jpg","assets/imagen3.jpg", "assets/imagen4.jpg", "assets/imagen5.jpg", "assets/imagen6.jpg", "assets/imagen7.jpg", "assets/imagen8.jpg"
, "assets/imagen9.jpg", "assets/imagen10.jpg", "assets/imagen11.jpg", "assets/imagen12.jpg"];


//Variables de cada id
var cancionN = document.getElementById("cancionN");
var canArtista = document.getElementById("canArtista");
var expandingBar = document.getElementById("expandingBar");
var timeNow = document.getElementById("timeNow");

//Variable del audio y de cancion actual que en este caso es un Contador
var audio = new Audio();
var cancionActual = 0;
window.onload = reproducir;

//Funcion para reproucir la musica >
function reproducir() {
    audio.src = canciones[cancionActual];
    cancionN.textContent = nombre[cancionActual];
    canArtista.textContent = artista[cancionActual];
    
    audio.play();
}

//Funcion para pausar o volver a reproducir cambiando las clases
function pausa(){
    if(audio.paused){
        audio.play();
        $("#play i").removeClass("fa-play").addClass("fa-pause");

    }
    else{
        audio.pause();
        $("#play i").removeClass("fa-pause").addClass("fa-play");
    }
}

//Agregando Evento
audio.addEventListener('timeupdate', function () {
    var position = audio.currentTime / audio.duration;
    expandingBar.style.width = position * 100 + '%';
    conversorTiempo(Math.round(audio.currentTime));
    if (audio.ended) {
        siguiente();
    }
});

//Conversor de tiempo
function conversorTiempo(segundos) {
    var min = Math.floor(segundos / 60);
    var seg = segundos % 60;
    min = (min < 10) ? "0" + min : min;
    seg = (seg < 10) ? "0" + seg : seg;
    timeNow.textContent = min + ":" + seg;

    tiempoTotal(Math.round(audio.duration));
}

//Tiempo total
function tiempoTotal(segundos) {
    var min = Math.floor(segundos / 60);
    var seg = segundos % 60;
    min = (min < 10) ? "0" + min : min;
    seg = (seg < 10) ? "0" + seg : seg;
    timeNow.textContent += " / " + min + ":" + seg;
}



//Funcion siguiente >>
function siguiente() {
    cancionActual++;
    if (cancionActual > 11) {
        cancionActual = 0;
    }
    reproducir();
    $("#play i").removeClass("fa-play").addClass("fa-pause");
    $("#container-top img").attr("src", imagen[cancionActual]);
}

//Funcion anterior <<
function anterior() {
    cancionActual--;
    if (cancionActual < 0) {
        cancionActual = 11;
    }
    reproducir();
    $("#play i").removeClass("fa-play").addClass("fa-pause");
    $("#container-top img").attr("src", imagen[cancionActual]);

}