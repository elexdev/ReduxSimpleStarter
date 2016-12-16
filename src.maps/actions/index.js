import axios from 'axios';

const API_KEY = '51774761d4b4c7c180eda3dae514eea9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// A constant to keep our action types consistent between action creators
// and our reducers. Not so easy to get bugs & no need to copy string
export const FETCH_WEATHER = 'FEATCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    // !!important!! return the promise as the payload
    payload: request
  };
}
