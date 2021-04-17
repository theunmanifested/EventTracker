import { Component, OnInit } from '@angular/core';
import { ParkVisit } from 'src/app/models/park-visit';
import { ParkVisitService } from 'src/app/services/park-visit.service';

@Component({
  selector: 'app-park-visit-list',
  templateUrl: './park-visit-list.component.html',
  styleUrls: ['./park-visit-list.component.css']
})
export class ParkVisitListComponent implements OnInit {

  parkVisits: ParkVisit[] = [];


  constructor(
    private parkService: ParkVisitService
  ) { }

  ngOnInit(): void {
    this.loadParkVisits();
  }

loadParkVisits(): void {
  this.parkService.index().subscribe(
    data => {
      this.parkVisits = data;
    },
    fail => {
      console.error('ParkVisitListComponent.loadParkVisits() failed: ');
      console.error(fail);
    }
  );
}


}
