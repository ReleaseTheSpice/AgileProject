import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameItemComponent } from './game-item.component';
import { AppModule } from '../app.module';

describe('GameItemComponent', () => {
  let component: GameItemComponent;
  let fixture: ComponentFixture<GameItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toThrowError();
  });
});
