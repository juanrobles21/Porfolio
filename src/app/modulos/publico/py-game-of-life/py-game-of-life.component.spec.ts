import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyGameOfLifeComponent } from './py-game-of-life.component';

describe('PyGameOfLifeComponent', () => {
  let component: PyGameOfLifeComponent;
  let fixture: ComponentFixture<PyGameOfLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyGameOfLifeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PyGameOfLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
