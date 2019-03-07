const axios = require('axios');

const getClima = async(lat, lng) => {

    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=05f56d086b9ffc53793fb279064c9dbd&units=metric`);

    return respuesta.data.main.temp;
}


module.exports = {
    getClima
}