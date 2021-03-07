import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVestiComponent } from './edit-vesti.component';

describe('EditVestiComponent', () => {
  let component: EditVestiComponent;
  let fixture: ComponentFixture<EditVestiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVestiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
