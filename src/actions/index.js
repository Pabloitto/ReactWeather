import axios from 'axios';

const API_KEY = "8260ae7ad14166bf357e2021ddd4ff82";

const TEMPLATE_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

const createApiRequestUrl = (cityName) => {
    return TEMPLATE_URL + '&q=' + cityName + ',us';
}

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (cityName) => {
    const url = createApiRequestUrl(cityName);

    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
};