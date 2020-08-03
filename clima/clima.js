const axios = require('axios');



const getClima = async(lat, lng)=>{

    const resp = await  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d95acf208fcdf47a3c74c227f6effdcf&units=metric`);
    return resp.data.main.tempt;
}

module.exports = {
    getClima
}