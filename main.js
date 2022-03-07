const producto1 = {
    id: "1",
    nombre: "producto1",
    precio: 1100
}

const producto2 = {
    id: "2",
    nombre: "producto2",
    precio: 1500
}
const producto3 = {
    id: "3",
    nombre: "producto3",
    precio: 1150
}

const producto4 = {
    id: "4",
    nombre: "producto4",
    precio: 900
}
let seleccionar;
let total = 0;

do {
    const promoSeleccionada = prompt(`
Seleccione la promo que desea: 
1. ${producto1.nombre} $ ${producto1.precio}
2. ${producto2.nombre} $ ${producto2.precio}
3. ${producto3.nombre} $ ${producto3.precio}
4. ${producto4.nombre} $ ${producto4.precio}
`);
    switch (promoSeleccionada) {
        case "1":
            alert(`El producto ${producto1.nombre} fue seleccionado`);
            total += servicio1.precio;
            break;
        case "2":
            alert(`El producto ${producto2.nombre} fue seleccionado`);
            total += servicio2.precio;
            break;
        case "3":
            alert(`El producto ${producto3.nombre} fue seleccionado`);
            total += servicio3.precio;
            break;
        case "4":
            alert(`El producto ${producto4.nombre} fue seleccionado`);
            total += servicio.precio;
            break;
        default:
            alert("no existe esa opción");
            break;
    }
    seleccionar = prompt(`Desea seguir seleccionando s/n ?`);
} while (seleccionar !== "n");


alert(`El total seleccionado es de $: ` + total);

function promoDescuento(parametro) {

    if (parametro > 2500) {
        let parametro = parametro * 0.20;
    }
    return parametro;

}
alert(`Excelente elección, gozas del descuento del 20 % ${parametro}`);