import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrediPredmetComponent } from './uredi-predmet.component';

describe('UrediPredmetComponent', () => {
  let component: UrediPredmetComponent;
  let fixture: ComponentFixture<UrediPredmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrediPredmetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrediPredmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
