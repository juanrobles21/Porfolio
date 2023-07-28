import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspSaborArteComponent } from './asp-sabor-arte.component';

describe('AspSaborArteComponent', () => {
  let component: AspSaborArteComponent;
  let fixture: ComponentFixture<AspSaborArteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspSaborArteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AspSaborArteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
