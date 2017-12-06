import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import { Main } from './view/components/Main';


const App = ({
  store,
}) => (
  <Provider store={store}>
    <Main />
  </Provider>
);
App.propTypes = {
  store: PropTypes.object,
};

export default App;
