import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkVisitListComponent } from './park-visit-list.component';

describe('ParkVisitListComponent', () => {
  let component: ParkVisitListComponent;
  let fixture: ComponentFixture<ParkVisitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkVisitListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkVisitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
