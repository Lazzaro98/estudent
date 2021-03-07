import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestiComponent } from './vesti.component';

describe('VestiComponent', () => {
  let component: VestiComponent;
  let fixture: ComponentFixture<VestiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VestiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
