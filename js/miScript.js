s
let discos = [
  { 
  id: 1,
  artista: "Guns And Roses",
  disco: "Appetite for Destruction",
  precio: 450,
  contenido: "Disco + insert con letras + poster",
  año: 1987,
  tamaño: "12 pulgadas",
  color: "Negro clásico",
  img: "img/gnr_al.jpg"
},
{ 
  id: 2,
  artista: "Red Hot Chili Peppers",
  disco: "Californication",
  precio: 400,
  contenido: "Disco + póster",
  año: 1999,
  tamaño: "12 pulgadas",
  color: "Azul translúcido",
  img: "img/rhc_al.jpg"
},
{ 
  id: 3,
  artista: "Rauw Alejandro",
  disco: "Cosa Nuestra",
  precio: 300,
  contenido: "Disco",
  año: 2020,
  tamaño: "12 pulgadas",
  color: "Negro",
  img: "img/cos_al.jpg"
},
{ 
  id: 4,
  artista: "Nirvana",
  disco: "In Utero",
  precio: 430,
  contenido: "Disco + poster",
  año: 2012,
  tamaño: "12 pulgadas",
  color: "Amarillo crema",
  img: "img/nir_in.jpg"
},
{ 
  id: 5,
  artista: "TV Girl",
  disco: "Who",
  precio: 200,
  contenido: "Vinilo + mini póster",
  año: 2020,
  tamaño: "12 pulgadas",
  color: "Rosa pastel",
  img: "img/tv_al.jpg"
},

];

if (!localStorage.getItem("discos")) {
  localStorage.setItem("discos", JSON.stringify(discos));
}

const lista = document.getElementById("listaDiscos");
let data = JSON.parse(localStorage.getItem("discos"));

function mostrarCatalogo() {
  lista.innerHTML = "";
  data.forEach(d => {
    lista.innerHTML += `
      <div class="card">
        <img src="${d.img}" alt="${d.disco}">
        <h3>${d.artista}</h3>
        <p><strong>${d.disco}</strong></p>

        <p>Tamaño: ${d.tamaño}</p>
        <p>Contenido: ${d.contenido}</p>
        <p>Año: ${d.año}</p>
        <p>Color del vinilo: ${d.color}</p>

        <p><strong>$${d.precio}</strong></p>

        <button onclick="agregarCarrito(${d.id})">Agregar al carrito</button>
      </div>
    `;
  });
}

mostrarCatalogo();

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarCarrito(id) {
  let disco = data.find(d => d.id === id);
  carrito.push(disco);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Agregado al carrito ✔");
}
