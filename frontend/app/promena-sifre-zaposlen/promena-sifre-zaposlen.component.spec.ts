import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromenaSifreZaposlenComponent } from './promena-sifre-zaposlen.component';

describe('PromenaSifreZaposlenComponent', () => {
  let component: PromenaSifreZaposlenComponent;
  let fixture: ComponentFixture<PromenaSifreZaposlenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromenaSifreZaposlenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromenaSifreZaposlenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
