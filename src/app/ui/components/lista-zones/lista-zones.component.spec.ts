import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaZonesComponent } from './lista-zones.component';

describe('ListaZonesComponent', () => {
  let component: ListaZonesComponent;
  let fixture: ComponentFixture<ListaZonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaZonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
