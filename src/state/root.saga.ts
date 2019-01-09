import { all } from 'redux-saga/effects';
import { currentWeatherSaga } from './weather-status';

export default function* rootSaga() {
    // We start all the sagas in parallel
    yield all([
        currentWeatherSaga
    ]);
}
