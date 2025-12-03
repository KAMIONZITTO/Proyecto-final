let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


function mostrarCarrito() {
  const tabla = document.getElementById("tablaCarrito");
  const cuerpo = document.getElementById("carritoItems");
  const totalContainer = document.getElementById("totalContainer");
  const carritoVacio = document.getElementById("carritoVacio");

  cuerpo.innerHTML = "";

  if (carrito.length === 0) {
    carritoVacio.style.display = "block";
    tabla.style.display = "none";
    totalContainer.style.display = "none";
    return;
  }

  carritoVacio.style.display = "none";
  tabla.style.display = "table";
  totalContainer.style.display = "block";

  let total = 0;

  carrito.forEach((item, index) => {
    let subtotal = item.precio;
    total += subtotal;

    cuerpo.innerHTML += `
      <tr>
        <td><img src="${item.img}" class="mini-img"></td>
        <td>
          <strong>${item.disco}</strong><br>
          Artista: ${item.artista}<br>
          Tamaño: ${item.tamaño}<br>
          Contenido: ${item.contenido}<br>
          Año: ${item.año}<br>
          Color: ${item.color}
        </td>
        <td>$${item.precio}</td>
        <td>1</td>
        <td>$${subtotal}</td>
        <td><button onclick="eliminar(${index})" class="btn-eliminar">X</button></td>
      </tr>
    `;
  });

  document.getElementById("totalPagar").textContent = "$" + total;
}

function eliminar(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

mostrarCarrito();

