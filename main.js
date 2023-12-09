class Producto{
    constructor(nombreProducto,color,talle,precio){
        this.nombreProducto = nombreProducto;
        this.color = color;
        this.talle = talle;
        this.precio = parseFloat(precio);
    }

}

let nombreProducto,color,marca,talle,aux = false;
let nombre = prompt("Bienvenido a ModaMan, favor de ingresar su nombre :)");
let opc = prompt(nombre + " que desea comprar? \n 1 -Remeras \n 2 -Jeans \n 3 -Zapatillas \n 4-Camisas \n 5 -Salir/Terminar Compra");

const carritoProductos = [];

do{

    switch(opc){
        case "1":
            ElegirColor("Remeras");
            ElegirTalle("Remeras");
            carritoProductos.push(new Producto("Remeras",color,talle,9000));
            verCarritoCompras();
            aux = true;
            break;
        case "2":
            ElegirColor("Jeans");
            ElegirTalle("Jeans");
            carritoProductos.push(new Producto("Jeans",color,talle,14000));
            verCarritoCompras();
            aux = true;
            break;
        case "3":
            ElegirColor("Zapatillas");
            ElegirTalle("Zapatillas");
            carritoProductos.push(new Producto("Zapatillas",color,talle,24000));
            verCarritoCompras();
            aux = true;
            break;
        case "4":
            ElegirColor("Camisas");
            ElegirTalle("Camisas");
            carritoProductos.push(new Producto("Camisas",color,talle,18000));
            verCarritoCompras();
            aux = true;
            break;
        case "5":
            if(carritoProductos.length == 0){
                alert("Usted no ha realizado ninguna compra, esperamos vuelva pronto. Saludos :D")
            }else{
                alert("\nEstos son los productos seleccionados.\n");
                verCarritoCompras();
                totalPagar();
            }
            aux = false;
            break;
        default:
            opc = prompt(nombre + " has elegido una opcion invalida. Favor de selecionar de vuelta. \n 1 -Remeras \n 2 -Jeans \n 3 -Zapatillas \n 4-Camisas \n 5 -Salir/Terminar Compra");
            aux = true;
            break;

    }

    opc = prompt("¿Desea seguir comprando? \n 1 -Remeras \n 2 -Jeans \n 3 -Zapatillas \n 4-Camisas \n 5 -Salir/Terminar Compra");

}while(aux);

function totalPagar(){
    let total = 0;
    for(const producto of carritoProductos){
        total= total + producto.precio;
    }
    alert("Total a pagar: $" + total + ". Muchas gracias por su compra, vuelva pronto :D.")
}

function verCarritoCompras(){
    let cont = 1;
    let aux = prompt("Desea ver su carrito de compras? \n 1- Si --- 2- No");
    if(aux == "1"){

        for(const producto of carritoProductos){
            alert("Producto " + cont + ": " + producto.nombreProducto + " Color: " + producto.color + " Talle: " + producto.talle + " Precio: $" + producto.precio + "\n");
            cont++;
        }
    }
}


function ElegirTalle(tipoProducto){
    let aux;
    do{
        if (tipoProducto == "Remeras" || tipoProducto == "Jeans" || tipoProducto == "Camisas"){

            talle = prompt("Elija un talle: TALLE 1 - TALLE 2 - TALLE 3 - TALLE 4");

            if  (parseInt(talle) < 1 || parseInt(talle) > 4){
                aux = prompt("No ha seleccionado una opcion valida. Vuelva a elegir presionando cualquier tecla");
                aux = true;
            }else{
                aux = false;
            }
        }else if (tipoProducto == "Zapatillas"){
            talle = prompt("Elija un talle: TALLE 38 - TALLE 39 - TALLE 40 - TALLE 41 - TALLE 42");
            if(parseInt(talle) < 38 || parseInt(talle) > 42){
                aux = prompt("No ha seleccionado una opcion valida. Vuelva a elegir presionando cualquier tecla");
                aux = true;
            }else{
                aux = false;
            }
        }

    }while(aux)
}
function ElegirColor(tipoProducto){
    let aux;
    do{
        aux = false;
        if (tipoProducto == "Remeras" || tipoProducto == "Camisas"){
           
            color = prompt("Elija un color: 1 - Rojo 2 - Azul 3 - Verde 4 - Blanco 5 - Negro");

            if (1 === parseInt(color)) {
                color = "Rojo";
            }else if (2 === parseInt(color)){
                color = "Azul";
            }else if (3 === parseInt(color)){
                color = "Verde";
            }else if (4 === parseInt(color)){
                color = "Blanco";
            }else if (5 === parseInt(color)){
                color = "Negro";
            }else{
                aux = prompt("No ha seleccionado una opcion valida. Vuelva a elegir presionando cualquier tecla");
                aux = true;
            }
        }else if(tipoProducto == "Jeans" || tipoProducto == "Zapatillas"){
            color = prompt("Elija un color: 1 - Blanco 2 - Negro 3 - Crema");
            if (1 === parseInt(color)) {
                color = "Blanco";
            }else if (2 === parseInt(color)){
                color = "Negro";
            }else if (3 === parseInt(color)){
                color = "Crema";
            }else{
                aux = prompt("No ha seleccionado una opcion valida. Vuelva a elegir presionando cualquier tecla");
                aux = true;
            }
        }

    }while(aux)
}

