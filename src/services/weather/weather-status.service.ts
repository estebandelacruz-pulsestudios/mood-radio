import { Weather } from '../../models';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=';

class WeatherService {
    static async fetchCurrentWeather(apiToken: string): Promise<Response> {
        const response = await fetch(`${BASE_URL}${apiToken}` , {
            method: 'GET',
        });

        console.info('response:', response);
        return response;
    }
}

export { WeatherService };