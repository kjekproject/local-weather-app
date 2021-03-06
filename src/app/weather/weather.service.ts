import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICurrentWeather } from '../interfaces';

interface ICurrentWeatherData {
  weather: [{
    description: string,
    icon: string
  }];
  main: {
    temp: number
  };
  sys: {
    country: string
  };
  dt: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService  implements IWeatherService {

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return this.httpClient.get<ICurrentWeatherData>(`http://api.openweathermap.org/data/2.5/weather?q=` +
      `${city},${country}&appid=${environment.appId}`).pipe(map(data => this.transformToICurrentWeather(data)));
      // this returns an object  with a type of Observable<ICurrentWeatherData> //
  }

  private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToFahrenheint(data.main.temp),
      description: data.weather[0].description
    };
  }

  private convertKelvinToFahrenheint(kalvin: number): number {
    return kalvin * 9 / 5 - 459.67;
  }
}

export interface IWeatherService {
  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather>;
}
