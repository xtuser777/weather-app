import { Component, Input } from '@angular/core';
import { faTemperatureLow, faTemperatureHigh, faDroplet, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherData } from 'src/app/models/interfaces/weather-data.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent {
  @Input()
  public weatherData!: WeatherData;

  public minTemperatureIcon = faTemperatureLow;
  public maxTemperatureIcon = faTemperatureHigh;
  public humidityIcon = faDroplet;
  public windIcon = faWind;
}
