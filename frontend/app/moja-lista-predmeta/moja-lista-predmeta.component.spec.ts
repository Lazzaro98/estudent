import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojaListaPredmetaComponent } from './moja-lista-predmeta.component';

describe('MojaListaPredmetaComponent', () => {
  let component: MojaListaPredmetaComponent;
  let fixture: ComponentFixture<MojaListaPredmetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MojaListaPredmetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MojaListaPredmetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
