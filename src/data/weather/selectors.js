import { MODULE_NAME } from './constants';


class Selectors {
  static getCities = state => state[MODULE_NAME].get('cities');
  static getIcons = state => state[MODULE_NAME].get('icons');
  static getForecasts = state => state[MODULE_NAME].get('forecasts');
  static getQuery = state => state[MODULE_NAME].get('query');
}

export default Selectors;
