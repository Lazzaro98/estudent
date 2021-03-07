import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPredmetaSIComponent } from './lista-predmeta-si.component';

describe('ListaPredmetaSIComponent', () => {
  let component: ListaPredmetaSIComponent;
  let fixture: ComponentFixture<ListaPredmetaSIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPredmetaSIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPredmetaSIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
