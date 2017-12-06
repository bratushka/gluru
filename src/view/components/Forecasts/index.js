import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import weatherSelectors from '../../../data/weather/selectors';
import { ADJECTIVES } from '../../constants';

import { SectionContainer } from '../SectionContainer';
import { Forecast } from './Forecast';
import { NoResults } from './NoResults';

import './styles.css';


const getCityKeys = (forecasts, query) => forecasts
  .filter(value => value.get('text').split(' ').some(token => query.includes(token)))
  .keySeq()
  .toJS()
;

const getAdjectives = forecasts => {
  const tokens = forecasts
    .valueSeq()
    .map(value => value.get('text').split(' '))
    .toArray()
    .reduce((acc, item) => [ ...acc, ...item ], [])
  ;
  const set = new Set(tokens);
  return [ ...set ].filter(word => ADJECTIVES.includes(word));
};

const ForecastsComponent = ({
  cities,
  icons,
  forecasts,
  query,
}) => {
  const cityKeys = getCityKeys(forecasts, query);

  return (
    <SectionContainer>
      <div className="dashboard">
        {(query.size && cityKeys.length) ? cityKeys.map(key => (
          <Forecast
            key={key}
            city={cities.get(key)}
            icon={icons.get(key)}
            {...forecasts.get(key).toJS()}
          />
        )) : (
          <NoResults adjectives={getAdjectives(forecasts)} />
        )}
      </div>
    </SectionContainer>
  )
};
ForecastsComponent.propTypes = {
  cities: PropTypes.object,
  icons: PropTypes.object,
  forecasts: PropTypes.object,
  query: PropTypes.object,
};

const mapStateToProps = state => ({
  cities: weatherSelectors.getCities(state),
  icons: weatherSelectors.getIcons(state),
  forecasts: weatherSelectors.getForecasts(state),
  query: weatherSelectors.getQuery(state),
});

export const Forecasts = connect(mapStateToProps)(ForecastsComponent);
