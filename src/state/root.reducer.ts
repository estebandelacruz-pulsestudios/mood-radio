import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { currentWeatherReducer } from './weather-status';

const persistConfig = {
    key: 'mood-radio',
    storage,
};

export default persistCombineReducers(persistConfig, {
    // add more reducers here
    currentWeatherReducer
});
