import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPredmetaOstaliComponent } from './lista-predmeta-ostali.component';

describe('ListaPredmetaOstaliComponent', () => {
  let component: ListaPredmetaOstaliComponent;
  let fixture: ComponentFixture<ListaPredmetaOstaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPredmetaOstaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPredmetaOstaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
