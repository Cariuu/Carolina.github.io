document.addEventListener("DOMContentLoaded", function () {
    // Crea el mapa
    var map = L.map("map").setView([-31.641231534521854, -60.712274624139376], 13);
  
    // Agrega el mapa base
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
      maxZoom: 18,
    }).addTo(map);
  
    // Datos de los móviles
    var moviles = [
      {
        clave_primaria: "auto",
        patente: "ABC123",
        detalles: "Detalles del auto",
        precinto: "c1",
        latitud: -31.62814847150017,
        longitud: -60.70351160696071
      },
      {
        clave_primaria: "moto",
        patente: "DEF456",
        detalles: "Detalles de la moto",
        precinto: "c2",
        latitud: 51.51,
        longitud: -0.1,
      },
      // Agrega más móviles aquí...
    ];
  
    // Agrega los marcadores en el mapa
    moviles.forEach(function (movil) {
      L.marker([movil.latitud, movil.longitud])
        .bindPopup(
          `<strong>${movil.clave_primaria}</strong><br>
          Patente: ${movil.patente}<br>
          Detalles: ${movil.detalles}<br>
          Precinto: ${movil.precinto}`
        )
        .addTo(map);
    });
  });
var cantidadDisponible = 40;
var cantidadOcupada = 0;

function cambiarEstado(indice) {
  var select = document.getElementById("estado-" + indice);
  var disponible = document.getElementById("disponible");
  var ocupado = document.getElementById("ocupado");

  if (select.value === "disponible") {
    disponible.textContent = --cantidadDisponible;
    ocupado.textContent = ++cantidadOcupada;
  } else if (select.value === "ocupado") {
    disponible.textContent = ++cantidadDisponible;
    ocupado.textContent = --cantidadOcupada;
  }
}

function agregarMoviles() {
  var movilesDiv = document.getElementById("moviles");

  for (var i = 1; i <= 40; i++) {
    var nombre = "1234" + i;

    var movilDiv = document.createElement("div");
    movilDiv.innerHTML = `
      <p>Móvil ${nombre}:</p>
      <select id="estado-${i}" onchange="cambiarEstado(${i})">
        <option value="disponible">Disponible</option>
        <option value="ocupado">Ocupado</option>
      </select>
    `;

    movilesDiv.appendChild(movilDiv);
  }
}

agregarMoviles();
var cantidadDisponible = 40;
var cantidadOcupada = 0;

function cambiarEstado(indice) {
  var select = document.getElementById("estado-" + indice);
  var disponible = document.getElementById("disponible");
  var ocupado = document.getElementById("ocupado");

  if (select.value === "disponible") {
    disponible.textContent = --cantidadDisponible;
    ocupado.textContent = ++cantidadOcupada;
  } else if (select.value === "ocupado") {
    disponible.textContent = ++cantidadDisponible;
    ocupado.textContent = --cantidadOcupada;
  }
}

function agregarMoviles() {
  var movilesDiv = document.getElementById("moviles");

  for (var i = 1; i <= 40; i++) {
    var nombre = "1234" + i;

    var movilDiv = document.createElement("div");
    movilDiv.innerHTML = `
      <p>Móvil ${nombre}:</p>
      <select id="estado-${i}" onchange="cambiarEstado(${i})">
        <option value="disponible">Disponible</option>
        <option value="ocupado">Ocupado</option>
      </select>
    `;

    movilesDiv.appendChild(movilDiv);
  }
}

agregarMoviles();
  
