import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameItemFormComponent } from './game-item-form.component';
import {AppModule} from '../app.module';

describe('GameItemFormComponent', () => {
  let component: GameItemFormComponent;
  let fixture: ComponentFixture<GameItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
