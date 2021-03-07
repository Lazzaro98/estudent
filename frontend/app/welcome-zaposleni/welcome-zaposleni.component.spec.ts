import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeZaposleniComponent } from './welcome-zaposleni.component';

describe('WelcomeZaposleniComponent', () => {
  let component: WelcomeZaposleniComponent;
  let fixture: ComponentFixture<WelcomeZaposleniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeZaposleniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeZaposleniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
