import React from 'react';
import PropTypes from 'prop-types';

import { ShadowContainer } from '../ShadowContainer';


export const NoResults = ({
  adjectives,
}) => (
  <ShadowContainer>
    <div className="no-results">
      <p>Please, use the search field to get some forecasts.</p>
      <p>Perhaps, try some of these words: {adjectives.join(', ')}.</p>
      <p>Good luck!</p>
    </div>
  </ShadowContainer>
);
NoResults.propTypes = {
  adjectives: PropTypes.arrayOf(PropTypes.string),
};
