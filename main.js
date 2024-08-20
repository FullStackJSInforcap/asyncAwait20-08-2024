import { buscarPorId, buscarPorIdAsync } from "./promesas.js";

console.log('Inicio programa');

/* const respuestaHeroe = document.querySelector('#respuestaHeroe');
buscarPorId('5d86371f25a058e5b1c8a65e').then((heroe) => {
    respuestaHeroe.innerHTML = `Id: ${heroe.id}, Nombre: ${heroe.name}`;
}).catch((error) => {
    respuestaHeroe.innerHTML = error;
}); */

/* buscarPorIdAsync('5d86371f25a058e5b1c8a65e').then((heroe) => {
    console.log(heroe);
}).catch((error) => {
    console.log(error);
}); */
const renderizarHeroe = async() => {
    try {
        const heroeBuscado = await buscarPorIdAsync('5d86371f25a058e5b1c8a65e');
        const respuestaHeroe = document.querySelector('#respuestaHeroe');
        respuestaHeroe.innerHTML = `El id: ${heroeBuscado.id}, Nombre: ${heroeBuscado.name}`;
    } catch (error) {
        const respuestaHeroe = document.querySelector('#respuestaHeroe');
        respuestaHeroe.innerHTML = error;
    }
}

renderizarHeroe();

console.log('Fin programa');