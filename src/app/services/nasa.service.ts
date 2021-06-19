import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb';

  constructor(private http: HttpClient) {  }

  getDataExample(){
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json');
    return this.http.get(this.apiUrl, {headers:header});
  }

  getLastSixDays(){
    let myDate = new Date();
    let newDate = new Date();
    newDate.setDate(newDate.getDate()-6)
    let startDate = newDate.toISOString().slice(0,10);
    let endDate = myDate.toISOString().slice(0,10);
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json');
      return this.http.get(this.apiUrl+"&start_date="+startDate+"&end_date="+endDate, {headers:header});
  }
  getDataByDate(date:string){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json');
  return this.http.get(this.apiUrl+"&date="+date, {headers:header});
  }
}
