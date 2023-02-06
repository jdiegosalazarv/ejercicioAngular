import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBirdsComponent } from './lista-birds.component';

describe('ListaBirdsComponent', () => {
  let component: ListaBirdsComponent;
  let fixture: ComponentFixture<ListaBirdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBirdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBirdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
