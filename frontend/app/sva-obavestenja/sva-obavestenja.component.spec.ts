import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvaObavestenjaComponent } from './sva-obavestenja.component';

describe('SvaObavestenjaComponent', () => {
  let component: SvaObavestenjaComponent;
  let fixture: ComponentFixture<SvaObavestenjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvaObavestenjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvaObavestenjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
