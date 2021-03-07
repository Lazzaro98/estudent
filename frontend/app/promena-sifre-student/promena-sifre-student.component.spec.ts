import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromenaSifreStudentComponent } from './promena-sifre-student.component';

describe('PromenaSifreStudentComponent', () => {
  let component: PromenaSifreStudentComponent;
  let fixture: ComponentFixture<PromenaSifreStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromenaSifreStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromenaSifreStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
