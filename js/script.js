import peliculas from './peliculas.js'

console.log(peliculas);
const basePath = "https://image.tmdb.org/t/p/w500";

let accion = peliculas.filter(pelicula => pelicula.genre_ids.indexOf(28) > -1);
let thriller = peliculas.filter(pelicula => pelicula.genre_ids.indexOf(53) > -1);
let aventura = peliculas.filter(pelicula => pelicula.genre_ids.indexOf(12) > -1);

const catalogo = (pelis, genero) => {
    let generoDIV = document.getElementById(genero);
    for (let i = 0; i < pelis.length; i++) {
        let divContainer = document.createElement("div");
        divContainer.className = "container";
        let img = document.createElement("img");
        img.src = basePath + pelis[i].poster_path;
        img.className = "poster";
        let title = document.createElement("h3");
        title.innerHTML = pelis[i].title;
        title.className = "titulo";
        divContainer.appendChild(img);
        divContainer.appendChild(title);
        generoDIV.appendChild(divContainer);
    }
}

catalogo(accion, "genero-28");
catalogo(thriller, "genero-53");
catalogo(aventura, "genero-12");
