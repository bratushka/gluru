import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import weatherActions from '../../../data/weather/actions';

import { SectionContainer } from '../SectionContainer';
import { ShadowContainer } from '../ShadowContainer';
import { ADJECTIVES } from '../../constants';

import './styles.css';


const mapDispatchToProps = dispatch => ({
  setQuery: tokens => dispatch(weatherActions.setQuery(tokens)),
});

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      last: '',
    };
  }

  static propTypes = {
    setQuery: PropTypes.func,
  };

  handleChange = e => {
    const tokens = this.getTokensFromEvent(e);
    this.setState({last: tokens[tokens.length - 1].toLowerCase()});
  };

  handleKeyDown = e => {
    const tokens = this.getTokensFromEvent(e);

    if (['Tab', 'ArrowRight'].includes(e.key)) {
      e.preventDefault();
      const suggestion = this.getSuggestion();
      if (suggestion) {
        tokens[tokens.length - 1] = suggestion
      }
      e.target.value = tokens.join(' ');
      this.setState({last: ''});
    } else if (e.key === 'Enter') {
      this.props.setQuery(tokens);
    }
  };

  getTokensFromEvent = e => {
    return e.target.value.split(' ');
  };

  getSuggestion = () => {
    return ADJECTIVES.find(adj => this.state.last && adj.indexOf(this.state.last) === 0);
  };

  render = () => (
    <SectionContainer>
      <ShadowContainer>
        <div className="search-wrap">
          <span className="magnifier" role="img" aria-label="">🔍</span>
          <input
            className="search"
            type="text"
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
          {this.state.last !== '' && (
            <div className="suggestion">{this.getSuggestion()}</div>)
          }
        </div>
      </ShadowContainer>
    </SectionContainer>
  );
}

export const Header = connect(null, mapDispatchToProps)(HeaderComponent);
