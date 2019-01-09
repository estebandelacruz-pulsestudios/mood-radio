/*
 * action types
 */

export const WEATHER_INIT = 'WEATHER/WEATHER_INIT'
export const REPORT_WEATHER_SUCCESS = 'WEATHER/REPORT_WEATHER_SUCCESS'
export const REPORT_WEATHER_FAILURE = 'WEATHER/REPORT_WEATHER_FAILURE'

/*
 * action creators
 */

export function weatherInit() {
  return { type: WEATHER_INIT }
}

export function reportWeatherSuccess(response: any) {
  return { type: REPORT_WEATHER_SUCCESS, response }
}

export function reportWeatherFailure(errorMessage: string) {
  return { type: REPORT_WEATHER_FAILURE, errorMessage }
}