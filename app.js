const { getLugatLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');
const { argv } = require('./config/yargs');

const getInfo = async(direccion) => {

    try {
        const coord = await getLugatLatLng(direccion);
        const temp = await getClima(coord.lat, coord.lng);
        return `El clima de ${coord.direccion} es de ${temp} grados.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}