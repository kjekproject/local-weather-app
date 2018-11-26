import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;

  constructor() { 
    this.current = {
      city: 'Warsaw',
      country: 'Poland',
      date: new Date(),
      temperature: 72,
      image: 'assets/img/sunny.png',
      description: 'sunny'
    } as ICurrentWeather
  }

  ngOnInit() {
  }

}
