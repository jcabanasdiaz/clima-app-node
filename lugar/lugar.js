const axios = require('axios');



const getLugatLatLng = async(dir) => {
    const encodedDireccion = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedDireccion}`,
        timeout: 1000,
        headers: { 'X-RapidAPI-Key': '14d7351065msh1b0bb26257b7874p19d425jsne02b5b1aaa5b' }
    });

    const respuesta = await instance.get();
    const data = respuesta.data.Results[0];

    if (data.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugatLatLng
}