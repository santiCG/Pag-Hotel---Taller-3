const productos = ["2 Hamburguesas", "1 Spa", "2 Mojitos"]; // Lista de productos del carrito
const telefonoHotel = "573205955920"; // Numero del hotel en formato internacional
const mensaje = `Hola, quiero hacer un pedido de los siguientes productos: ${productos.join(", ")}`;

document.getElementById('whatsapp-link').href = `https://wa.me/${telefonoHotel}?text=${encodeURIComponent(mensaje)}`;