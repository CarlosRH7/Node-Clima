const axios = require('axios');

const getLugarLatLng = async(dir)=>{
    const encodeUrl = encodeURI(dir);
    // console.log(encodeUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "cd25f87c73mshe500f0bc9ed49f3p1431b4jsne2c3f1e13c69",
            "useQueryString": true
        }
    });

    const resp = await instance.get();

    // if(resp.data.Results.length === 0){
    //     throw new Error(`No hay resultados para ${dir}`);
    // }

    // const data = resp.data.Results[0];
    // const direccion = data.name;
    // const lat = data.lat;
    // const lng = data.lon;

    const direccion = 'Tawarano';
    const lat = 35;
    const lng = 139;

    return {
        direccion,
        lat,
        lng
    }
     
}

module.exports = {
    getLugarLatLng
}