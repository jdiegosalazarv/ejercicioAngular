import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCountriesComponent } from './lista-countries.component';

describe('ListaCountriesComponent', () => {
  let component: ListaCountriesComponent;
  let fixture: ComponentFixture<ListaCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
