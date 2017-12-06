import axios from 'axios';

import { cities, forecast } from './mocks';


const MOCK = true;

class ApiTemplate {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  URI = {
    cities: 'currentconditions/v1/topcities/50',
    forecast: key => `forecasts/v1/daily/1day/${key}`,
  };

  API_KEY = { apikey: 'p4KXdbDnRlC1l3rAoKhHTMBMRiqleBbA' };

  getClient = (extraHeaders) => {
    return axios.create({
      baseURL: this.baseUrl,
      headers: {
        ...axios.defaults.headers,
        ...extraHeaders,
      },
    });
  };

  getCities = () => {
    if (MOCK) {
      return Promise.resolve({ data: cities });
    }

    const client = this.getClient();
    const params = {
      ...this.API_KEY,
      details: true,
    };

    return client.get(this.URI.cities, { params }).catch(() => ({ data: cities }));
  };

  getForecast = key => {
    if (MOCK) {
      return Promise.resolve({ data: forecast });
    }

    const client = this.getClient();
    const params = {
      ...this.API_KEY,
      details: true,
      metric: true,
    };

    return client.get(this.URI.forecast(key), { params }).catch(() => ({ data: forecast }));
  };
}

export const API = new ApiTemplate('http://dataservice.accuweather.com');
