import {Component} from '@angular/core';
import {WeatherForecast} from '../weather.forecast';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(private readonly weatherService: WeatherService) {
    weatherService.get().subscribe(x => {
      this.forecasts = x;
    })
  }
}

