import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjangoComicComponent } from './django-comic.component';

describe('DjangoComicComponent', () => {
  let component: DjangoComicComponent;
  let fixture: ComponentFixture<DjangoComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjangoComicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjangoComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
