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
  