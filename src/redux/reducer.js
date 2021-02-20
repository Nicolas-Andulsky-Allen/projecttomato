import { WEATHERDATA } from "api.openweathermap.org/data/2.5/weather?q=Paphos&units=metric&appid=137fff9ffc0853afd8466241d9b1228f";

export const initialState = {
  weatherData: WEATHERDATA,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
