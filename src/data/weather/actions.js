import { API } from '../../utils/API';

import { ACTIONS } from './constants';


class Actions {
  static getForecast = () => async dispatch => {
    const citiesResponse = await API.getCities();

    dispatch({
      type: ACTIONS.GET_CITIES,
      cities: citiesResponse.data.map(city => [city.Key, city.EnglishName]),
    });

    dispatch({
      type: ACTIONS.GET_ICONS,
      icons: citiesResponse.data.map(city => [city.Key, city.WeatherIcon]),
    });

    const forecastsResponse = await Promise.all(citiesResponse
      .data
      .map(city => API.getForecast(city.Key))
    );

    const forecasts = forecastsResponse
      .map(forecast => ({
        text: forecast.data.Headline.Text,
        dayTemp: forecast.data.DailyForecasts[0].Temperature.Maximum.Value,
        dayIcon: forecast.data.DailyForecasts[0].Day.Icon,
        nightTemp: forecast.data.DailyForecasts[0].Temperature.Minimum.Value,
        nightIcon: forecast.data.DailyForecasts[0].Night.Icon,
        precipitation: (
          forecast.data.DailyForecasts[0].Day.PrecipitationProbability
          + forecast.data.DailyForecasts[0].Night.PrecipitationProbability
        ) / 2,
      }))
      .reduce((obj, data, i) => ({...obj, [citiesResponse.data[i].Key]: data}), {})
    ;

    dispatch({
      type: ACTIONS.GET_FORECASTS,
      forecasts,
    });
  };

  static setQuery = tokens => ({
    type: ACTIONS.SET_QUERY,
    query: tokens.filter(Boolean),
  });
}

export default Actions;
