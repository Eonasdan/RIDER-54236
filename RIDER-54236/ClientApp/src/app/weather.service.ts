import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WeatherForecast} from './weather.forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private readonly http: HttpClient, @Inject('BASE_URL') private readonly  baseUrl: string) { }

  get() {
    return this.http.get<WeatherForecast[]>(`${this.baseUrl}weatherforecast`);
  }
}
