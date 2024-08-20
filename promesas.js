import { heroes } from "./datos.js"

const buscarPorId = (id) => {
    const promesa = new Promise((resolve, reject) => {
        const heroeBuscado = heroes.find((heroe) => {
            return heroe.id === id;
        });
        if(heroeBuscado){
            resolve(heroeBuscado);
        }
        reject(`Héroe no encontrado`);
    });
    return promesa;
}

const buscarPorIdAsync = async(id) => {
    const heroeBuscado = heroes.find((heroe) => {
        return heroe.id === id;
    });
    if(heroeBuscado){
        return heroeBuscado;
    }
    throw `El héroe con Id ${id} no existe`;
}

export{
    buscarPorId,
    buscarPorIdAsync
}