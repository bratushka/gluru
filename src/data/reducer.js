import { combineReducers } from 'redux';

import weather from './weather/reducer';
import { MODULE_NAME as weatherModuleName} from './weather/constants';


const reducer = combineReducers({
  [weatherModuleName]: weather,
});

export default reducer;
