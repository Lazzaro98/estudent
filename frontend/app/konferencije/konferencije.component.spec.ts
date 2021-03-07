import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonferencijeComponent } from './konferencije.component';

describe('KonferencijeComponent', () => {
  let component: KonferencijeComponent;
  let fixture: ComponentFixture<KonferencijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonferencijeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonferencijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
