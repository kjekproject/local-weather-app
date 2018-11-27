import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;

<<<<<<< HEAD
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getCurrentWeather('Warsaw', 'PL').subscribe((data) => this.current = data)
=======
  constructor(private weaterService: WeatherService) { }

  ngOnInit() {
    this.weaterService.getCurrentWeather('Warsaw', 'PL').subscribe((data) => this.current = data);
>>>>>>> 7afb83309d504799e6850ce8eb97200a6a02dd33
  }

}
