import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactChatBotComponent } from './react-chat-bot.component';

describe('ReactChatBotComponent', () => {
  let component: ReactChatBotComponent;
  let fixture: ComponentFixture<ReactChatBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactChatBotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactChatBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
