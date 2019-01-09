import {
    WEATHER_INIT,
    REPORT_WEATHER_SUCCESS,
    REPORT_WEATHER_FAILURE
} from './weather-status.actions';

enum FetchStatus {
    NOT_FETCHED = 'NOT_FETCHED',
    FETCHING = 'FETCHING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
}

interface ICurrentWeatherState {
    readonly fetchStatus: FetchStatus;
    readonly error: string;
    readonly name: string;
}

const DEFAULT_STATE: ICurrentWeatherState = {
    fetchStatus: FetchStatus.NOT_FETCHED,
    error: '',
    name: '',
};

const currentWeatherReducer = (state: ICurrentWeatherState = DEFAULT_STATE, action: any): ICurrentWeatherState => {
    switch (action.type) {
        case WEATHER_INIT:
            return {
                ...state,
                fetchStatus: FetchStatus.FETCHING,
            };
        case REPORT_WEATHER_SUCCESS:
            return {
                ...state,
                fetchStatus: FetchStatus.SUCCESS,
                name: action.payload,

            };
        case REPORT_WEATHER_FAILURE:
            return {
                ...state,
                fetchStatus: FetchStatus.ERROR,
                error: action.payload,
            };
        default:
            return state;
    }
};

export { currentWeatherReducer, DEFAULT_STATE };
