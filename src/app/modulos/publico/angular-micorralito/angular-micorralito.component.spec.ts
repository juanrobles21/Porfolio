import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMicorralitoComponent } from './angular-micorralito.component';

describe('AngularMicorralitoComponent', () => {
  let component: AngularMicorralitoComponent;
  let fixture: ComponentFixture<AngularMicorralitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMicorralitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularMicorralitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
