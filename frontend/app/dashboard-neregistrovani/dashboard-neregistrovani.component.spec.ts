import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNeregistrovaniComponent } from './dashboard-neregistrovani.component';

describe('DashboardNeregistrovaniComponent', () => {
  let component: DashboardNeregistrovaniComponent;
  let fixture: ComponentFixture<DashboardNeregistrovaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNeregistrovaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNeregistrovaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
