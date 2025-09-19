// Crear un título de bienvenida para la página, además de un párrafo con la lista de los elementos a comprar, enumerados.
// Crear un input de texto donde el usuario pueda escribir el nombre o número del producto que quiere comprar. Agregar un 
// botón que diga “Comprar”. Debajo del botón colocar un párrafo vacío p donde se va a mostrar el precio del producto 
// elegido.
// Al hacer click en el botón:
// Capturar lo que se escribió en el input, mostrar en la consola el producto que se eligió y luego en el párrafo 
// mostrar el precio correspondiente del producto. Si el producto no existe, o está mal escrito, mostrar “Producto 
// no encontrado”.
// Adicional, puede agregarse otro input que recibe un número de productos, y el precio final que se muestre sea 
// el total de todos los productos (un solo producto varias veces)


let botonComprar = document.getElementById("botonComprar");
let precioAlfajor = 200;
let precioCoca = 400;
let precioGalletitas = 300;

let precio = document.getElementById("precio");


botonComprar.addEventListener("click", function () {
    nroProducto = document.getElementById("nroProducto").value;
    cantProducto = document.getElementById("cantProducto").value;

    if (nroProducto == 1) {
        console.log("Producto: Alfajor");
        console.log("Cantidad: " + cantProducto);
        precio.innerText = "El precio es: $" + (precioAlfajor*cantProducto)
    }else if (nroProducto == 2) {
        console.log("Producto: Coca");
        console.log("Cantidad: " + cantProducto);
        precio.innerText = "El precio es: $" + (precioCoca*cantProducto)
    }else if (nroProducto == 3) {
        console.log("Producto: Galletitas");
        console.log("Cantidad: " + cantProducto);
        precio.innerText = "El precio es: $" + (precioGalletitas*cantProducto)
    }else {
        precio.innerText= "Indique un producto válido"
    }

})

// hola que tal