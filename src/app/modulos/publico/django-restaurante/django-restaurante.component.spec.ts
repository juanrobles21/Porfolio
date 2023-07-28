import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjangoRestauranteComponent } from './django-restaurante.component';

describe('DjangoRestauranteComponent', () => {
  let component: DjangoRestauranteComponent;
  let fixture: ComponentFixture<DjangoRestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjangoRestauranteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjangoRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
