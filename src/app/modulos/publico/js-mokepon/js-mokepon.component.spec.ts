import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsMokeponComponent } from './js-mokepon.component';

describe('JsMokeponComponent', () => {
  let component: JsMokeponComponent;
  let fixture: ComponentFixture<JsMokeponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsMokeponComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsMokeponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
