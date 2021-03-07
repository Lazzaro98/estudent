import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajVestComponent } from './dodaj-vest.component';

describe('DodajVestComponent', () => {
  let component: DodajVestComponent;
  let fixture: ComponentFixture<DodajVestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajVestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajVestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
