import React from 'react';
import PropTypes from 'prop-types';

import { ShadowContainer } from '../ShadowContainer';


const getIconUrl = icon => icon < 10
  ? `https://developer.accuweather.com/sites/default/files/0${icon}-s.png`
  : `https://developer.accuweather.com/sites/default/files/${icon}-s.png`
;

export const Forecast = ({
  icon,
  city,
  dayTemp,
  nightTemp,
  precipitation,
}) => (
  <ShadowContainer>
    <div className="forecast">
      <img
        className="image"
        src={getIconUrl(icon)}
        alt=""
      />
      <div className="city">
        {city}
      </div>
      <div className="details">
        <div>
          <span className="word">Temperature</span>
          <span className="icon sun">☀</span>
          <span className="day">{Math.round(dayTemp)}°</span>
          <span className="night">🌔 {Math.round(nightTemp)}°</span>
        </div>
        <div>
          <span className="word">Precipitation</span>
          <span className="icon droplet">🌢</span>
          <span className="day">{precipitation}%</span>
        </div>
      </div>
    </div>
  </ShadowContainer>
);
Forecast.propTypes = {
  icon: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  dayTemp: PropTypes.number.isRequired,
  nightTemp: PropTypes.number.isRequired,
  precipitation: PropTypes.number.isRequired,
};
