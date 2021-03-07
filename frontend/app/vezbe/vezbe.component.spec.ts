import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VezbeComponent } from './vezbe.component';

describe('VezbeComponent', () => {
  let component: VezbeComponent;
  let fixture: ComponentFixture<VezbeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VezbeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VezbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
