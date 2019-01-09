import { Weather } from '../../models';
import { WeatherService } from '../../services';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
    WEATHER_INIT,
    reportWeatherSuccess,
    reportWeatherFailure
} from './weather-status.actions';

function* fetchCurrentWeather() {
    try {
        const apiToken = '4e8aae9616a3d0996bfc75c5dc7c1a30';
        const response: Weather = yield call(
            WeatherService.fetchCurrentWeather,
            apiToken
        );
        yield put(reportWeatherSuccess(response));
    } catch (error) {
        yield put(reportWeatherFailure(error.message));
    }
}


function* currentWeatherSaga() {
    yield all([
        takeEvery(WEATHER_INIT, fetchCurrentWeather)
    ]);
}

export { fetchCurrentWeather, currentWeatherSaga };