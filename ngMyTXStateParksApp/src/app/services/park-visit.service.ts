import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ParkVisit } from '../models/park-visit';

@Injectable({
  providedIn: 'root'
})
export class ParkVisitService {

private baseUrl = 'http://localhost:8084/';
private url = this.baseUrl + 'api/parks';

  constructor(
  private http: HttpClient

  ) { }

  index() : Observable<ParkVisit[]>{
    return this.http.get<ParkVisit[]>(this.url)
    .pipe(
      catchError((err:any) => {
         console.log(err);
         return throwError('Error getting parkvisits' + err);
      })
     );
 }

}
