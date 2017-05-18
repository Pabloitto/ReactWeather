import { FETCH_WEATHER } from '../actions/index';

const transformData = (data) => {

    const city = data.city;

    const result = {
        city: city.name,
        lon: city.coord.lon,
        lat: city.coord.lat,
        temperature: [],
        pressure: [],
        humidity: []
    };

    data.list.forEach(item=>{
        result.temperature.push(item.main.temp);
        result.pressure.push(item.main.pressure);
        result.humidity.push(item.main.humidity);
    });

    return result;
}


export default (state = [], action) => {

    switch(action.type){
        case FETCH_WEATHER:
        const result = transformData(action.payload.data);
        return state.concat([result]);
    }

    return state;
}