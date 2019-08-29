import { Component } from '@angular/core';
import { WeatherserviceService } from '../weatherservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  getTemper : any;

  Citiez = [];

  city : string = "";
  temp;
  min;
  max;

  constructor(public weatherservice : WeatherserviceService) {
    // this.weatherservice.myWeather(this.city).subscribe((data)=>{
    //   this.getTemper = data;
    //   console.log(this.getTemper);
      

    //   this.temp = Math.round(this.getTemper.main.temp - 273.25);
    //   this.min = Math.round(this.getTemper.main.temp_min - 273.25);
    //   this.max = Math.round(this.getTemper.main.temp_max - 273.25);
    // })
  }

  Location(){
    this.weatherservice.myWeather(this.city).subscribe((data)=>{
      this.getTemper = data;
      console.log(this.getTemper);
      

      this.temp = Math.round(this.getTemper.main.temp - 273.25);
      this.min = Math.round(this.getTemper.main.temp_min - 273.25);
      this.max = Math.round(this.getTemper.main.temp_max - 273.25);
    })
  }
}
