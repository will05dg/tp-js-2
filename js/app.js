
const productosCrema = [
    {id : 0 , nombre : "Crema Hidratante", descripcion: "Crema ligera y no grasosa que proporciona hidratación profunda.",
    tamanos: [{ tamano: "30ml", precio: 10 },{ tamano: "50ml", precio: 15 },{ tamano: "100ml", precio: 25 } ] },

    {id : 1 , nombre : "Crema Antiarrugas", descripcion:"Crema avanzada para la reducción de arrugas y líneas finas.",
    tamanos: [{ tamano: "30ml", precio: 20 },{ tamano: "50ml", precio: 30 },{ tamano: "100ml", precio: 50 } ] },

    {id : 2 , nombre : "Crema para Manos", descripcion: "Crema nutritiva que suaviza y protege las manos secas.",
    tamanos: [{ tamano: "30ml", precio: 5 },{ tamano: "50ml", precio: 8},{ tamano: "100ml", precio: 12} ] },

    {id : 3 , nombre : "Crema para el Cuerpo", descripcion:"Crema rica y emoliente para todo el cuerpo.",
    tamanos: [{ tamano: "30ml", precio: 12 },{ tamano: "50ml", precio: 20 },{ tamano: "100ml", precio: 35 } ] },

    {id : 4 , nombre : "Crema para el Rostro", descripcion:"Crema diaria que hidrata y protege la piel del rostro.",
    tamanos: [{ tamano: "30ml", precio: 15 },{ tamano: "50ml", precio: 25 },{ tamano: "100ml", precio: 40 } ] },

    {id : 5 , nombre : "Crema de Noche", descripcion:"Crema reparadora que trabaja mientras duermes.",
    tamanos: [{ tamano: "30ml", precio: 18 },{ tamano: "50ml", precio: 28 },{ tamano: "100ml", precio: 45 } ] },

    {id : 6 , nombre : "Crema con Protección Solar", descripcion:"Crema hidratante con protección solar de amplio espectro.",
    tamanos: [{ tamano: "30ml", precio: 12 },{ tamano: "50ml", precio: 20 },{ tamano: "100ml", precio: 35 } ] },

    {id : 7 , nombre : "Crema para Ojos", descripcion: "Crema suave para reducir ojeras y líneas finas alrededor de los ojos.",
    tamanos: [{ tamano: "30ml", precio: 10 },{ tamano: "50ml", precio: 18 }, {tamano:"no tenemos este tamano" , precio:0 } ] },
];



let finalizar = false

while(!finalizar) {

    let opcion= prompt ("-Oprime 1 si quieres ver los distibtos tamanios de productos.\n-Oprime 2 si quieres acomodarlos de mayor a menor o menor a mayor.\n-Oprime 3 si quieres hacer una busqueda de nuestras cremas\n-Oprime 4 si deseas finalizar")

    if (opcion > 4 || opcion < 1 ) {
        console.log("no se encuentra en las opciones")
    } 

    if(opcion == 4){
        finalizar = true
        break
    }

    // productos 

    if (opcion == 1) {
        let tamanoProducto = prompt (`0 para ver Cremas de de 30ml. \n1 para ver Cremas de 50ml. \n2 para ver Cremas de 100ml`);

        if (tamanoProducto > 2) {
            console.log("no se encuentra en las opciones")
        } else {
            productosCrema.forEach ((num) => {
                console.log(num.nombre + ': ' + num.tamanos[tamanoProducto].tamano + '/ US$' + + num.tamanos[tamanoProducto].precio);
            });
        }
    }

    // filtro mayor y nenor


    if (opcion == 2) {

        let opcion= prompt ("Oprime 1 si quieres acomodar los precios de menor a mayor.\nOprime 2 si quieres acomodarlos de mayor a menor.");

        if (opcion > 2 || opcion < 1) {
            console.log("no coincide la opcion")
        } 

        if (opcion == 1) {
            let tamanoProducto = prompt (`0 para ver Cremas de de 30ml. \n1 para ver Cremas de 50ml. \n2 para ver Cremas de 100ml`);

            if (tamanoProducto > 2) {
                console.log("no se encuentra en las opciones")
            } else {
                productosCrema.sort((a , b) => {
                    return a.tamanos[tamanoProducto].precio - b.tamanos[tamanoProducto].precio
                });
            
                productosCrema.forEach ((num) => {
                    console.log(num.nombre + ': ' + num.tamanos[tamanoProducto].tamano + '/ US$' + + num.tamanos[tamanoProducto].precio);
                });
                }
            }

        
    //======================= >>>

        if (opcion == 2) {
            let tamanoProducto = prompt (`0 para ver Cremas de de 30ml. \n1 para ver Cremas de 50ml. \n2 para ver Cremas de 100ml`);

            if (tamanoProducto > 2) {
                console.log("no se encuentra en las opciones")
            } else {
                productosCrema.sort((a , b) => {
                    return b.tamanos[tamanoProducto].precio - a.tamanos[tamanoProducto].precio
                });
        
                productosCrema.forEach ((num) => {
                    console.log(num.nombre + ': ' + num.tamanos[tamanoProducto].tamano + '/ US$' + + num.tamanos[tamanoProducto].precio);
                });
            }
        }
    }


    // buscar

    if (opcion == 3) {

        let productoBuscar = prompt ("busca el nonbre del producto").toLowerCase();

        const filtros = productosCrema.filter((el) => el.nombre.toLowerCase().includes(productoBuscar))

        if (filtros == false){
            console.log("no hay considencias")
        } else {
            filtros.forEach ((num) => {
                console.log(num.nombre + ': ' + num.tamanos[0].tamano + '/ US$' + + num.tamanos[0].precio);
                console.log(num.nombre + ': ' + num.tamanos[1].tamano + '/ US$' + + num.tamanos[1].precio);
                console.log(num.nombre + ': ' + num.tamanos[2].tamano + '/ US$' + + num.tamanos[2].precio);
            });
        }
    }
}

