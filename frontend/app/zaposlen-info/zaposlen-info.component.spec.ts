import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposlenInfoComponent } from './zaposlen-info.component';

describe('ZaposlenInfoComponent', () => {
  let component: ZaposlenInfoComponent;
  let fixture: ComponentFixture<ZaposlenInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposlenInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaposlenInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
