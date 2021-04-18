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
  newPV: ParkVisit = new ParkVisit();
  editPV: ParkVisit = null;
  selected = null;
  addNewPV = null;


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

displayPV(pV) {
  this.selected  = pV;
}

addPV(): void {
  console.log(this.newPV);
  this.parkService.create(this.newPV).subscribe(
    data => {
      this.loadParkVisits();
    },
    err => {
      console.log('Error creating todo: ' + err)
    }
  );
  this.newPV = new ParkVisit();
}

updatePV(editedPV: ParkVisit, displayPV = true): void {
  this.parkService.update(editedPV).subscribe(
    data => {
      if(displayPV) {
        this.selected = editedPV;
      }
      this.editPV = null;
      this.loadParkVisits();
    },
    err => {
      console.log('Error updating todo: ' + err);
    }
  );
}

deletedPV(id: number): void {
  this.parkService.destroy(id).subscribe(
    data => {
      this.loadParkVisits();
},
    err =>  {
    console.error('Error: ' + err);
    }
  );
}

displayTable(): void {
  this.selected = null;
}

setEditPV() {
  this.editPV = Object.assign({}, this.selected);

}

setNewPV() {
  this.addNewPV = true;
  return document.getElementById('newParkV').scrollIntoView();
}

// getPVCount(): number {
//   return this.incompletePipe.transform(this.parkVisits).length;
// }

}
