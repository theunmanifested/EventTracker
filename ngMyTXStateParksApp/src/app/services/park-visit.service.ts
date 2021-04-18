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

  index(){
    return this.http.get<ParkVisit[]>(this.url)
    .pipe(
      catchError((err:any) => {
         console.log(err);
         return throwError('Error getting parkvisits' + err);
      })
     );
 }

 show(PVId) {
  return this.http.get<ParkVisit>(this.url)
  .pipe(
    catchError((err:any) => {
       console.log(err);
       return throwError('Error getting parkVisits');
    })
   );
}

create(newPV: ParkVisit) {
  // newPV.completed = false;
  // newPV.description = '';
  return this.http.post<ParkVisit>(this.url, newPV)
  .pipe(
    catchError((err:any) => {
      console.log(err);
      return throwError('Error creating park visit');
    })
  );
}
update(editedPV: ParkVisit) {
// if(editedPV.completed === true) {
//   editedPV.completeDate = this.datePipe.transform(Date.now(), 'shortDate');
// } else {
//   editedPV.completeDate = '';
// }
 return this.http.put<ParkVisit>(`${this.url}/${editedPV.id}`, editedPV,)
 .pipe( catchError((err:any) => {
  console.log(err);
  return throwError('Error updating park visit in service');
 })
 );
}
destroy(id: number) {
 return this.http.delete<ParkVisit>(`${this.url}/${id}`)
 .pipe(
   catchError((err:any) => {
      console.log(err);
      return throwError('Error deleting park visit in service');
   }));
}

}

