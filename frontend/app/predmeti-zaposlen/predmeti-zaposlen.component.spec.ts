import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetiZaposlenComponent } from './predmeti-zaposlen.component';

describe('PredmetiZaposlenComponent', () => {
  let component: PredmetiZaposlenComponent;
  let fixture: ComponentFixture<PredmetiZaposlenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredmetiZaposlenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetiZaposlenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
