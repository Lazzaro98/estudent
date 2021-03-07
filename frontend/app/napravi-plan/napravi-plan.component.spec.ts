import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NapraviPlanComponent } from './napravi-plan.component';

describe('NapraviPlanComponent', () => {
  let component: NapraviPlanComponent;
  let fixture: ComponentFixture<NapraviPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NapraviPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NapraviPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
