console.log(document.title);


//1-Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
document.querySelector("#gen-1").innerHTML = "Generasión 1 Pokimon";


//2-Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
document.querySelector(".infocard-list-pkmn-lg").style.background = "yellow";

//3-Imprime por consola la URL de la página.
console.log(window.location.href);

//4-Imprime por consola el dominio de la página.

console.log(window.location.href.length);

let dominio = [];

for (let i = window.location.href.length-1; i >= 0; i--) {
     
    dominio.unshift(window.location.href[i]);
    
    if (window.location.href[i] == ".") {
        break;
    }

    console.log(window.location.href[i]);
}

console.log(dominio.join());

console.log(".h,t,m,l".replaceAll(",", ""));

//5-Imprime todos los nodos de imagen.

console.log(document.querySelectorAll("img"));


//6-Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

let imagenes =document.getElementsByTagName("img");

 for (let i=0;i<imagenes.length;i++) {
    console.log(imagenes[i].src);
    imagenes[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
 }

 //7-Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying

 document.querySelectorAll(".infocard-lg-datatext-muted">".ent-name">".itype normal">".itypeflying").style.background = "red";
