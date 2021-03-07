import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraksaComponent } from './praksa.component';

describe('PraksaComponent', () => {
  let component: PraksaComponent;
  let fixture: ComponentFixture<PraksaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PraksaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PraksaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
