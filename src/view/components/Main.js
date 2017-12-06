import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import weatherActions from '../../data/weather/actions';

import { Header } from './Header';
import { Forecasts } from './Forecasts';

import 'reset-css';
import './Main.css';


const mapDispatchToProps = dispatch => ({
  getForecast: () => dispatch(weatherActions.getForecast()),
});

export class MainComponent extends Component {
  componentDidMount = async () => {
    this.props.getForecast();
  };

  render = () => (
    <div className="viewport">
      <main>
        <Header />
        <Forecasts />
      </main>
    </div>
  );
}
MainComponent.propTypes = {
  getForecast: PropTypes.func,
};

export const Main = connect(null, mapDispatchToProps)(MainComponent);
