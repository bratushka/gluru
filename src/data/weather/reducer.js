import Immutable from 'immutable';

import { ACTIONS } from './constants';


const initialState = Immutable.fromJS({
  cities: {},
  forecasts: {},
  query: [],
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.GET_CITIES:
      return state.set('cities', Immutable.Map(action.cities));

    case ACTIONS.GET_ICONS:
      return state.set('icons', Immutable.Map(action.icons));

    case ACTIONS.GET_FORECASTS:
      return state.set('forecasts', Immutable.fromJS(action.forecasts));

    case ACTIONS.SET_QUERY:
      return state.set('query', Immutable.List(action.query));

    default:
      return state;
  }
}

export default reducer;
