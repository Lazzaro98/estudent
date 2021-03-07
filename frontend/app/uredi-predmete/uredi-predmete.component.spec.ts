import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrediPredmeteComponent } from './uredi-predmete.component';

describe('UrediPredmeteComponent', () => {
  let component: UrediPredmeteComponent;
  let fixture: ComponentFixture<UrediPredmeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrediPredmeteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrediPredmeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
