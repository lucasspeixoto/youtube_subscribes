import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap, map, startWith } from 'rxjs/operators';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_KEY: string = "APIKEY"
  API_URL: string

  constructor(
    private http: HttpClient
  ) { }

  getStats(name: string) {
    this.API_URL = `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=${name}&key=${this.API_KEY}`
    console.log(this.API_URL)
    return interval(5000)
    .pipe(
      startWith(0),
      switchMap(
        () => this.http.get(this.API_URL)),
        map(res => res)
    )
  }

  
}
