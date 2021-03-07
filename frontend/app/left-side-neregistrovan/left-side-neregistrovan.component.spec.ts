import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideNeregistrovanComponent } from './left-side-neregistrovan.component';

describe('LeftSideNeregistrovanComponent', () => {
  let component: LeftSideNeregistrovanComponent;
  let fixture: ComponentFixture<LeftSideNeregistrovanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSideNeregistrovanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSideNeregistrovanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
