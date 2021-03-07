import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetZaposlenComponent } from './predmet-zaposlen.component';

describe('PredmetZaposlenComponent', () => {
  let component: PredmetZaposlenComponent;
  let fixture: ComponentFixture<PredmetZaposlenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredmetZaposlenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetZaposlenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
