import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IspitnaPitanjaComponent } from './ispitna-pitanja.component';

describe('IspitnaPitanjaComponent', () => {
  let component: IspitnaPitanjaComponent;
  let fixture: ComponentFixture<IspitnaPitanjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IspitnaPitanjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IspitnaPitanjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
