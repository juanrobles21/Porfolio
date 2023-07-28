import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactGuiaComponent } from './react-guia.component';

describe('ReactGuiaComponent', () => {
  let component: ReactGuiaComponent;
  let fixture: ComponentFixture<ReactGuiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactGuiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactGuiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
