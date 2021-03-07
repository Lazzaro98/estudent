import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojiPredmetiComponent } from './moji-predmeti.component';

describe('MojiPredmetiComponent', () => {
  let component: MojiPredmetiComponent;
  let fixture: ComponentFixture<MojiPredmetiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MojiPredmetiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MojiPredmetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
