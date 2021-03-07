import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPredmetuComponent } from './o-predmetu.component';

describe('OPredmetuComponent', () => {
  let component: OPredmetuComponent;
  let fixture: ComponentFixture<OPredmetuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPredmetuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPredmetuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
