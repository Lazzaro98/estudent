import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterListaPredmetaComponent } from './master-lista-predmeta.component';

describe('MasterListaPredmetaComponent', () => {
  let component: MasterListaPredmetaComponent;
  let fixture: ComponentFixture<MasterListaPredmetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterListaPredmetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterListaPredmetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
