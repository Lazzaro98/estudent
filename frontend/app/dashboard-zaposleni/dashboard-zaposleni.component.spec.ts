import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardZaposleniComponent } from './dashboard-zaposleni.component';

describe('DashboardZaposleniComponent', () => {
  let component: DashboardZaposleniComponent;
  let fixture: ComponentFixture<DashboardZaposleniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardZaposleniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardZaposleniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
