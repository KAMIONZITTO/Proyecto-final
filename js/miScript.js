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
  img: "img/gnr al.jpg"
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
  img: "img/rhc al.jpg"
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
  img: "img/cos al.jpg"
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
  img: "img/nir in.jpg"
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
  img: "img/tv al.jpg"
},
 {
  id: 6,
  artista: "Lady Gaga",
  disco: "Mayhem",
  precio: 500,
  contenido: "Vinilo edición especial + insert holográfico",
  año: 2015,
  tamaño: "12 pulgadas",
  color: "Negro metalizado",
  img: "img/mayhem.jpg"
},
{
  id: 7,
  artista: "TWICE",
  disco: "This Is For",
  precio: 450,
  contenido: "Vinilo + photobook",
  año: 2021,
  tamaño: "12 pulgadas",
  color: "Blanco nacarado",
  img: "img/thisisfor_twice.jpg"
},
{
  id: 8,
  artista: "NewJeans",
  disco: "Get Up",
  precio: 420,
  contenido: "Vinilo + photocard",
  año: 2023,
  tamaño: "12 pulgadas",
  color: "Azul pastel",
  img: "img/getup_nj.jpg"
},
{
  id: 9,
  artista: "Belanova",
  disco: "Dulce Beat",
  precio: 380,
  contenido: "Vinilo + poster",
  año: 2005,
  tamaño: "12 pulgadas",
  color: "Rosa neón",
  img: "img/dulcebeat.jpg"
},
{
  id: 10,
  artista: "TWICE",
  disco: "Eyes Wide Open",
  precio: 450,
  contenido: "Vinilo + photobook",
  año: 2020,
  tamaño: "12 pulgadas",
  color: "Plateado",
  img: "img/eyeswide.jpg"
}
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

        <button onclick="agregarCarrito(${d.id})" class="btn-agregar">Agregar al carrito</button>
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
  alert("Agregado al carrito");
}

const btnAgregar = document.getElementById("btnAgregar");
const btnActualizar = document.getElementById("btnActualizar");
const btnEliminar = document.getElementById("btnEliminar");

btnAgregar.addEventListener("click", () => {
  let id = Number(prompt("ID del producto:")); 
  let artista = prompt("Artista:");
  let disco = prompt("Nombre del disco:");
  let precio = Number(prompt("Precio:"));
  let contenido = prompt("Contenido:");
  let año = Number(prompt("Año:"));
  let tamaño = prompt("Tamaño:");
  let color = prompt("Color:");
  let img = prompt("Ruta de la imagen:");

  let nuevoDisco = { id, artista, disco, precio, contenido, año, tamaño, color, img };

  data.push(nuevoDisco);

  localStorage.setItem("discos", JSON.stringify(data));
  mostrarCatalogo();
  alert("Producto agregado");
});

btnEliminar.addEventListener("click", () => {
  let idEliminar = Number(prompt("Ingresa el ID del disco a eliminar:"));

  data = data.filter(d => d.id !== idEliminar);

  localStorage.setItem("discos", JSON.stringify(data));
  mostrarCatalogo();
  alert("Producto eliminado ");
});


btnActualizar.addEventListener("click", () => {
  let idEditar = Number(prompt("Ingresa el ID del disco a actualizar:"));
  let disco = data.find(d => d.id === idEditar);

  if (!disco) {
    alert("No existe un disco con ese ID");
    return;
  }

  disco.artista = prompt("Artista:", disco.artista);
  disco.disco = prompt("Nombre del disco:", disco.disco);
  disco.precio = Number(prompt("Precio:", disco.precio));
  disco.contenido = prompt("Contenido:", disco.contenido);
  disco.año = Number(prompt("Año:", disco.año));
  disco.tamaño = prompt("Tamaño:", disco.tamaño);
  disco.color = prompt("Color:", disco.color);
  disco.img = prompt("Ruta imagen:", disco.img);

  localStorage.setItem("discos", JSON.stringify(data));
  mostrarCatalogo();
  alert("Producto actualizado ✏️");
});

