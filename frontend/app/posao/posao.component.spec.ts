import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosaoComponent } from './posao.component';

describe('PosaoComponent', () => {
  let component: PosaoComponent;
  let fixture: ComponentFixture<PosaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
