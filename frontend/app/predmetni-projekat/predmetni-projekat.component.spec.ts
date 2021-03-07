import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetniProjekatComponent } from './predmetni-projekat.component';

describe('PredmetniProjekatComponent', () => {
  let component: PredmetniProjekatComponent;
  let fixture: ComponentFixture<PredmetniProjekatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredmetniProjekatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetniProjekatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
