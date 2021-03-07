import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentskaTakmicenjaComponent } from './studentska-takmicenja.component';

describe('StudentskaTakmicenjaComponent', () => {
  let component: StudentskaTakmicenjaComponent;
  let fixture: ComponentFixture<StudentskaTakmicenjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentskaTakmicenjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentskaTakmicenjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
