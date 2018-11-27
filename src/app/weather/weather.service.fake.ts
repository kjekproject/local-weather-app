import { Observable, of} from 'rxjs';

import { IWeatherService } from './weather.service';
import { ICurrentWeather } from '../interfaces';

export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: 'Warsaw',
    country: 'PL',
    date: 1485789600,
    image: '',
    temperature: 280.32,
    description: 'light intensity drizzle'
  };
  /* we're leveraging he existing ICurrentWeather interface that our fake data is correctly shaped, but we
  must also turn it into an "Observable". This is easly achieved using "of", which creates an observable
  sequence, given the provided arguments */
  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
      return of(this.fakeWeather);
  }
}
