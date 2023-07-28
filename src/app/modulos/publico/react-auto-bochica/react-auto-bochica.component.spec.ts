import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactAutoBochicaComponent } from './react-auto-bochica.component';

describe('ReactAutoBochicaComponent', () => {
  let component: ReactAutoBochicaComponent;
  let fixture: ComponentFixture<ReactAutoBochicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactAutoBochicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactAutoBochicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
