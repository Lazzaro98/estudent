import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPredmetaIRComponent } from './lista-predmeta-ir.component';

describe('ListaPredmetaIRComponent', () => {
  let component: ListaPredmetaIRComponent;
  let fixture: ComponentFixture<ListaPredmetaIRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPredmetaIRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPredmetaIRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
